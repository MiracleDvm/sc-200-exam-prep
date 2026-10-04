// Supplemental scraper: securitypracticetest.com SC-200 free tests (original, non-leaked questions).
// Each page embeds a clean `var Q = [...]` JS array in the HTML. No login required.
// Output: browser_capture/spt_questions.json

const fs = require('fs');
const path = require('path');

const PAGES = [
  'https://securitypracticetest.com/sc-200-practice-test-1/',
  'https://securitypracticetest.com/sc-200-practice-test-2/',
  'https://securitypracticetest.com/sc-200-practice-test-3/',
  'https://securitypracticetest.com/sc-200-practice-test-4/',
  'https://securitypracticetest.com/sc-200-practice-test-5/',
  'https://securitypracticetest.com/manage-a-security-operations-environment-practice-test-sc-200-mock-test/',
  'https://securitypracticetest.com/respond-to-security-incidents-practice-test-sc-200-mock-test/',
  'https://securitypracticetest.com/perform-threat-hunting-practice-test-sc-200-mock-test/',
];

const OUT = path.join(__dirname, 'browser_capture', 'spt_questions.json');
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function normalize(q, pageUrl) {
  const correctIdx = Array.isArray(q.c) ? q.c : [q.c];
  const correctLetters = correctIdx.map((i) => LETTERS[i]).filter(Boolean);
  const choices = (q.o || []).map((text, i) => ({ letter: LETTERS[i], text }));
  const text = q.code ? `${q.stem}\n\n${q.code}` : q.stem;
  return {
    id: `spt-${q.id}`,
    number: null,
    topic: q.d || 'SC-200',
    type: correctLetters.length > 1 ? 'multi-select' : 'single-choice',
    text,
    images: [],
    choices,
    correctLetters,
    answerImage: null,
    communityTop: q.e ? { text: q.e, selectedAnswer: null, upvotes: null } : null,
    disputed: false,
    source: pageUrl,
  };
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function extractQ(html) {
  const match = html.match(/var Q = (\[.*?\]);\s*\n/s);
  if (!match) return [];
  return JSON.parse(match[1]);
}

async function main() {
  const all = [];
  const seenIds = new Set();
  for (const url of PAGES) {
    console.log(`Fetching ${url}`);
    const html = await fetchHtml(url);
    const raw = extractQ(html);
    let added = 0;
    for (const q of raw) {
      if (seenIds.has(q.id)) continue;
      seenIds.add(q.id);
      all.push(normalize(q, url));
      added++;
    }
    console.log(`  -> ${raw.length} parsed, ${added} new (total ${all.length})`);
    await sleep(1200);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(all, null, 2));
  console.log(`Wrote ${all.length} unique questions to ${OUT}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
