// Supplemental scraper: exam-dumps.net SC-200 pages (no login, no paywall observed on pages 1-12).
// Output: browser_capture/examdumps_questions.json

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE = 'https://www.exam-dumps.net/exams/microsoft/sc-200';
const OUT = path.join(__dirname, 'browser_capture', 'examdumps_questions.json');
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function decodeEntities(text) {
  return (text || '')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function cleanBlock($, el) {
  const clone = el.clone();
  clone.find('img').remove();
  clone.find('br').replaceWith('\n');
  clone.find('a').remove();
  let t = clone.text();
  return decodeEntities(t).replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function extractImages($, el) {
  const urls = [];
  el.find('img').each((_, img) => {
    const src = $(img).attr('src');
    if (src) urls.push(src.startsWith('http') ? src : `https://www.exam-dumps.net${src}`);
  });
  return urls;
}

// Like cleanBlock, but keeps embedded images (e.g. exhibit tables/screenshots inside a
// case study) as inline `[EXHIBIT:<url>]` markers instead of discarding them.
function cleanBlockInline($, el) {
  const clone = el.clone();
  clone.find('img').each((_, img) => {
    const $img = $(img);
    const src = $img.attr('src');
    const url = src ? (src.startsWith('http') ? src : `https://www.exam-dumps.net${src}`) : null;
    if (url) $img.replaceWith(`\n[EXHIBIT:${url}]\n`);
    else $img.remove();
  });
  clone.find('br').replaceWith('\n');
  clone.find('a').remove();
  let t = clone.text();
  return decodeEntities(t).replace(/\r/g, '').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function parsePage(html) {
  const $ = cheerio.load(html);
  const cards = $('.panel.panel-smart').toArray();
  return cards.map((card) => {
    const $card = $(card);
    const strongText = $card.find('.panel-heading strong').first().text();
    const numMatch = strongText.match(/QUESTION:\s*(\d+)/i);
    const topic = $card.find('.panel-heading .pull-right').first().text().trim() || 'SC-200';

    const caseStudyEl = $card.find('[id^="examTopic_"]').first();
    let caseStudy = caseStudyEl.length ? cleanBlockInline($, caseStudyEl) : '';
    if (/does not have a case study/i.test(caseStudy)) caseStudy = '';

    const leadP = $card.find('p.lead').first();
    let stem = cleanBlock($, leadP);
    let type = 'single-choice';
    const ddMatch = stem.match(/^(DRAG DROP|HOTSPOT)[^\n]*\n?/i);
    if (ddMatch) {
      type = /DRAG DROP/i.test(ddMatch[0]) ? 'drag-drop' : 'hotspot';
      stem = stem.slice(ddMatch[0].length).trim();
    }
    const images = [];
    leadP.find('img').each((_, img) => {
      const src = $(img).attr('src');
      if (src) images.push(src.startsWith('http') ? src : `https://www.exam-dumps.net${src}`);
    });

    const fullText = caseStudy ? `${caseStudy}\n\n${stem}` : stem;

    const choices = [];
    const correctLetters = [];
    const lis = $card.find('ol.rounded-list > li, ol.rounded-list-multi > li').toArray();
    lis.forEach((li, i) => {
      const $li = $(li);
      const letter = String.fromCharCode(65 + i);
      const clone = $li.clone();
      clone.children('ol, ul').remove();
      const text = decodeEntities(clone.text()).trim();
      choices.push({ letter, text });
      if ($li.attr('data-correct') === 'True') correctLetters.push(letter);
    });

    const isPlaceholder = choices.length === 1 && /see explanation/i.test(choices[0].text);
    if (isPlaceholder) { choices.length = 0; correctLetters.length = 0; }
    if (choices.length > 1 && correctLetters.length > 1 && type === 'single-choice') type = 'multi-select';

    const answerBlock = $card.find('[id^="answerQ"]').first();
    let answerImage = null;
    if (type === 'drag-drop' || type === 'hotspot') {
      const img = answerBlock.find('img').first();
      if (img.length) {
        const src = img.attr('src');
        answerImage = src ? (src.startsWith('http') ? src : `https://www.exam-dumps.net${src}`) : null;
      }
    }
    let explanation = '';
    answerBlock.find('.bg-light-yellow').each((_, block) => {
      const $block = $(block);
      const heading = $block.find('h5').first().text().trim();
      if (/explanation/i.test(heading)) explanation = cleanBlock($, $block);
    });

    const id = `ed-${numMatch ? numMatch[1] : Math.random().toString(36).slice(2)}-${Buffer.from(stem.slice(0, 40)).toString('hex').slice(0, 8)}`;

    return {
      id,
      number: numMatch ? Number(numMatch[1]) : null,
      topic,
      type,
      text: fullText,
      images,
      choices,
      correctLetters,
      answerImage,
      communityTop: explanation ? { text: explanation, selectedAnswer: null, upvotes: null } : null,
      disputed: false,
      source: 'exam-dumps.net',
    };
  });
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function main() {
  const all = [];
  const seenStems = new Set();
  for (let page = 1; page <= 12; page++) {
    const url = page === 1 ? `${BASE}/page-1` : `${BASE}/page-${page}`;
    console.log(`Fetching ${url}`);
    const html = await fetchHtml(url);
    const qs = parsePage(html);
    let added = 0;
    for (const q of qs) {
      const key = `${q.text}::${(q.choices || []).map((c) => c.text).join('|')}`;
      if (seenStems.has(key)) continue;
      seenStems.add(key);
      all.push(q);
      added++;
    }
    console.log(`  -> ${qs.length} parsed, ${added} new (total ${all.length})`);
    await sleep(1200);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(all, null, 2));
  console.log(`Wrote ${all.length} unique questions to ${OUT}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
