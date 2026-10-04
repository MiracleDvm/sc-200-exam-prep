// One-shot scraper for personal, offline SC-200 exam revision.
// Questions 11-480 require a logged-in ExamTopics account (free signup).
// Credentials are read from env vars only (EXAMTOPICS_EMAIL / EXAMTOPICS_PASSWORD) —
// never written to disk — with a polite delay between requests. Output: app/data/questions.js.
//
// Usage: npm install && EXAMTOPICS_EMAIL=... EXAMTOPICS_PASSWORD=... node scrape.js
//        (resumable: re-run after an interruption, same env vars)

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const EXAM_URL_BASE = 'https://www.examtopics.com/exams/microsoft/sc-200/view';
const LOGIN_URL = 'https://www.examtopics.com/login/';
const TOTAL_PAGES = 48;
const REQUEST_DELAY_MS = 1500;
const CHECKPOINT_PATH = path.join(__dirname, '.checkpoint.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'app', 'data', 'questions.js');

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

let sessionCookie = null;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function login() {
  const email = process.env.EXAMTOPICS_EMAIL;
  const password = process.env.EXAMTOPICS_PASSWORD;
  if (!email || !password) {
    console.log('No EXAMTOPICS_EMAIL/EXAMTOPICS_PASSWORD set — continuing anonymously (only the first 10 questions are public).');
    return;
  }
  const body = new URLSearchParams({ act: 'login', pagesource: 'exam', email, pass: password });
  const res = await fetch(LOGIN_URL, {
    method: 'POST',
    redirect: 'manual',
    headers: {
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: `${EXAM_URL_BASE}/`,
    },
    body: body.toString(),
  });
  const setCookie = res.headers.get('set-cookie');
  const match = setCookie && setCookie.match(/PHPSESSID=[^;]+/);
  if (!match || res.status !== 302) {
    throw new Error('Login failed — check EXAMTOPICS_EMAIL/EXAMTOPICS_PASSWORD.');
  }
  sessionCookie = match[0];
  console.log('Logged in to ExamTopics.');
}

// ExamTopics double-encodes some entities in its source HTML (e.g. &amp;quot;),
// so cheerio's single decode leaves literal "&quot;" behind. Decode once more.
function decodeEntities(text) {
  return (text || '')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

async function fetchHtml(url, attempt = 1) {
  try {
    const headers = { 'User-Agent': USER_AGENT };
    if (sessionCookie) headers.Cookie = sessionCookie;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } catch (err) {
    if (attempt >= 3) throw err;
    console.warn(`  retry ${attempt} for ${url} (${err.message})`);
    await sleep(REQUEST_DELAY_MS * 2);
    return fetchHtml(url, attempt + 1);
  }
}

function cleanQuestionText($, cardTextEl) {
  const clone = $(cardTextEl).clone();
  clone.find('img').remove();
  clone.find('br').replaceWith('\n');
  let text = clone.text();
  text = decodeEntities(text).replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').trim();
  return text;
}

function parseQuestionCard($, card) {
  const header = $(card).find('.card-header').first();
  const numberMatch = header.find('strong').first().text().match(/#(\d+)/);
  const topicMatch = header
    .find('.question-title-topic')
    .text()
    .match(/Topic\s*(\d+)/i);

  const body = $(card).find('.question-body').first();
  const id = body.attr('data-id');

  const cardText = body.find('> .card-text').first();
  let rawText = cleanQuestionText($, cardText);

  let type = 'single-choice';
  const dragDropMatch = rawText.match(/^(DRAG DROP|HOTSPOT)\s*\n?/i);
  if (dragDropMatch) {
    type = dragDropMatch[1].toUpperCase() === 'DRAG DROP' ? 'drag-drop' : 'hotspot';
    rawText = rawText.slice(dragDropMatch[0].length).trim();
  }

  const questionImages = [];
  cardText.find('img').each((_, img) => {
    const src = $(img).attr('src');
    if (src) questionImages.push(src);
  });

  const choices = [];
  const correctLetters = [];
  body
    .find('.question-choices-container li.multi-choice-item')
    .each((_, li) => {
      const $li = $(li);
      const letter = $li.find('.multi-choice-letter').attr('data-choice-letter');
      const textClone = $li.clone();
      textClone.find('.multi-choice-letter').remove();
      textClone.find('.most-voted-answer-badge').remove();
      const text = decodeEntities(textClone.text()).trim();
      choices.push({ letter, text });

      const attribs = li.attribs || {};
      const isCorrect = Object.keys(attribs).some((k) => k.startsWith('data-correct'));
      if (isCorrect) correctLetters.push(letter);
    });

  if (choices.length > 1 && correctLetters.length > 1) {
    type = 'multi-select';
  }

  let answerImage = null;
  const answerBlock = body.find('.question-answer').first();
  const answerImg = answerBlock.find('img').first();
  if (answerImg.length) answerImage = answerImg.attr('src');

  const discussionLink = body
    .parent()
    .find('.question-discussion-button')
    .first();
  const onclick = discussionLink.attr('onclick') || '';
  const hashMatch = onclick.match(/openDiscussionModal\('(\d+)',\s*'([a-f0-9]+)'\)/i);
  const discussionId = hashMatch ? hashMatch[1] : null;
  const discussionHash = hashMatch ? hashMatch[2] : null;

  return {
    id,
    number: numberMatch ? Number(numberMatch[1]) : null,
    topic: topicMatch ? Number(topicMatch[1]) : 1,
    type,
    text: rawText,
    images: questionImages,
    choices,
    correctLetters,
    answerImage,
    discussionId,
    discussionHash,
  };
}

async function fetchPage(pageNum) {
  const url = pageNum === 1 ? `${EXAM_URL_BASE}/` : `${EXAM_URL_BASE}/${pageNum}/`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const cards = $('.exam-question-card').toArray();
  return cards.map((card) => parseQuestionCard($, card));
}

function parseUpvoteCount(text) {
  const match = (text || '').match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

async function fetchCommunityTop(discussionHash) {
  if (!discussionHash) return null;
  const url = `https://www.examtopics.com/comments/${discussionHash}/`;
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  let top = null;
  $('.comment-container').each((_, el) => {
    const $el = $(el);
    const body = $el.find('.comment-body').first();
    const text = decodeEntities(body.find('.comment-content').first().text()).trim();
    if (!text) return;
    const selectedAnswer = body
      .find('.badge-warning strong')
      .first()
      .text()
      .trim()
      .toUpperCase() || null;
    const upvoteText = $el.find('.upvote-count').first().text();
    const upvotes = parseUpvoteCount(upvoteText);

    if (!top || upvotes > top.upvotes) {
      top = { text, selectedAnswer, upvotes };
    }
  });

  return top;
}

function loadCheckpoint() {
  if (fs.existsSync(CHECKPOINT_PATH)) {
    return JSON.parse(fs.readFileSync(CHECKPOINT_PATH, 'utf8'));
  }
  return { completedPages: 0, questions: [] };
}

function saveCheckpoint(state) {
  fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify(state));
}

function writeOutput(questions) {
  const dir = path.dirname(OUTPUT_PATH);
  fs.mkdirSync(dir, { recursive: true });
  const body = `// Auto-generated by scraper/scrape.js — do not edit by hand.\nconst QUESTIONS = ${JSON.stringify(
    questions,
    null,
    2
  )};\n`;
  fs.writeFileSync(OUTPUT_PATH, body);
}

async function main() {
  await login();
  const state = loadCheckpoint();
  console.log(`Resuming from page ${state.completedPages + 1}/${TOTAL_PAGES} (${state.questions.length} questions so far)`);

  for (let page = state.completedPages + 1; page <= TOTAL_PAGES; page++) {
    console.log(`Page ${page}/${TOTAL_PAGES}: fetching question list...`);
    const pageQuestions = await fetchPage(page);
    await sleep(REQUEST_DELAY_MS);

    for (let i = 0; i < pageQuestions.length; i++) {
      const q = pageQuestions[i];
      process.stdout.write(
        `  Q#${q.number ?? '?'} (topic ${q.topic}): fetching discussion...\r`
      );
      try {
        q.communityTop = await fetchCommunityTop(q.discussionHash);
      } catch (err) {
        console.warn(`\n  Failed to fetch discussion for Q#${q.number}: ${err.message}`);
        q.communityTop = null;
      }
      if (q.communityTop && q.correctLetters.length) {
        const official = [...q.correctLetters].sort().join('');
        const community = (q.communityTop.selectedAnswer || '').split('').sort().join('');
        q.disputed = community.length > 0 && community !== official;
      } else {
        q.disputed = false;
      }
      delete q.discussionHash;
      await sleep(REQUEST_DELAY_MS);
    }
    console.log(`  done (${pageQuestions.length} questions).                    `);

    state.questions.push(...pageQuestions);
    state.completedPages = page;
    saveCheckpoint(state);
    writeOutput(state.questions);
  }

  const ids = new Set(state.questions.map((q) => q.id));
  console.log(`\nFinished: ${state.questions.length} questions scraped, ${ids.size} unique ids.`);
  if (state.questions.length !== 480 || ids.size !== state.questions.length) {
    console.warn('WARNING: expected 480 unique questions, counts look off — inspect app/data/questions.js.');
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('Scraper failed:', err);
    process.exit(1);
  });
}

module.exports = { parseQuestionCard, fetchPage, fetchCommunityTop };
