// Merge all sources into the final app/data/questions.js:
//  - app/data/questions.js (existing ExamTopics Q1-10 + Q21-30, from the authenticated scraper run)
//  - browser_capture/page02.text.txt + page02.meta.json (ExamTopics Q11-20, captured via browser)
//  - browser_capture/examdumps_questions.json (exam-dumps.net)
//  - browser_capture/spt_questions.json (securitypracticetest.com, original questions)

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUESTIONS_JS = path.join(ROOT, 'app', 'data', 'questions.js');
const CAPTURE_DIR = path.join(__dirname, 'browser_capture');

function loadExisting() {
  const cp = JSON.parse(fs.readFileSync(path.join(__dirname, '.checkpoint.json'), 'utf8'));
  return cp.questions;
}

const IMG_BASE = 'https://www.examtopics.com/assets/media/exam-media/';

function parsePage02() {
  const text = fs.readFileSync(path.join(CAPTURE_DIR, 'page02.text.txt'), 'utf8');
  const meta = JSON.parse(fs.readFileSync(path.join(CAPTURE_DIR, 'page02.meta.json'), 'utf8'));

  const blocks = text.split(/(?=^Question #\d+ \(Topic: Question Set \d+\)$)/m).filter((b) => b.trim());
  const questions = blocks.map((block, i) => {
    const lines = block.split('\n');
    const headerMatch = lines[0].match(/Question #(\d+) \(Topic: Question Set (\d+)\)/);
    const number = headerMatch ? Number(headerMatch[1]) : null;
    const topicLineMatch = lines[1] ? lines[1].match(/Topic (\d+)/) : null;
    const topic = topicLineMatch ? Number(topicLineMatch[1]) : 1;

    // body: from line 3 (after blank line) to the line before "Reveal Solution Discussion"
    const bodyLines = lines.slice(3);
    const endIdx = bodyLines.findIndex((l) => /^Reveal Solution Discussion/.test(l));
    const content_ = (endIdx >= 0 ? bodyLines.slice(0, endIdx) : bodyLines).join('\n').trim();

    // choices are trailing consecutive lines matching "X. text"
    const contentLines = content_.split('\n');
    let splitAt = contentLines.length;
    for (let j = contentLines.length - 1; j >= 0; j--) {
      if (/^[A-F]\.\s/.test(contentLines[j])) splitAt = j;
      else break;
    }
    const textLines = contentLines.slice(0, splitAt).join('\n').trim();
    const choiceLines = contentLines.slice(splitAt);

    let type = 'single-choice';
    let cleanText = textLines;
    const ddMatch = cleanText.match(/^(DRAG DROP|HOTSPOT)\s*\n?/i);
    if (ddMatch) {
      type = /DRAG DROP/i.test(ddMatch[0]) ? 'drag-drop' : 'hotspot';
      cleanText = cleanText.slice(ddMatch[0].length).trim();
    }

    const choices = choiceLines.map((line) => {
      const m = line.match(/^([A-F])\.\s(.*)$/);
      return m ? { letter: m[1], text: m[2].trim() } : null;
    }).filter(Boolean);

    const m = meta[i] || ['', '', '', '', ''];
    const [id, correctStr, hashSuffix, imagesCsv, answerImageRel] = m;
    const correctLetters = correctStr ? correctStr.split('') : [];
    const images = imagesCsv ? imagesCsv.split(',').filter(Boolean).map((p) => (p.startsWith('http') ? p : IMG_BASE + p)) : [];
    const answerImage = answerImageRel ? (answerImageRel.startsWith('http') ? answerImageRel : IMG_BASE + answerImageRel) : null;

    if (choices.length > 1 && correctLetters.length > 1) type = 'multi-select';

    return {
      id, number, topic, type, text: cleanText, images, choices, correctLetters, answerImage,
      communityTop: null, disputed: false, source: 'examtopics.com',
    };
  });
  return questions;
}

function normKey(q) {
  const text = (q.text || '').toLowerCase().replace(/\s+/g, ' ').trim();
  const choices = (q.choices || []).map((c) => (c.text || '').toLowerCase().trim()).join('|');
  return `${text}::${choices}`;
}

function main() {
  const existing = loadExisting().map((q) => ({ ...q, source: q.source || 'examtopics.com' }));
  const page02 = parsePage02();
  const examdumps = JSON.parse(fs.readFileSync(path.join(CAPTURE_DIR, 'examdumps_questions.json'), 'utf8'));
  const spt = JSON.parse(fs.readFileSync(path.join(CAPTURE_DIR, 'spt_questions.json'), 'utf8'));

  console.log('existing(ExamTopics 1-10,21-30):', existing.length);
  console.log('page02(ExamTopics 11-20):', page02.length);
  console.log('exam-dumps.net:', examdumps.length);
  console.log('securitypracticetest.com:', spt.length);

  const all = [...existing, ...page02, ...examdumps, ...spt];
  const seen = new Set();
  const deduped = [];
  for (const q of all) {
    const key = normKey(q);
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(q);
  }
  console.log('total before dedup:', all.length, '| after dedup:', deduped.length);

  const usable = deduped.filter((q) => {
    if (!q.text || q.text.trim().length < 10) return false;
    if (q.type !== 'drag-drop' && q.type !== 'hotspot' && q.choices.length === 0) return false;
    return true;
  });
  console.log('dropped unusable (no text / no choices for non-visual type):', deduped.length - usable.length);

  // Renumber sequentially for a consistent "Question N" display across the merged pool.
  usable.forEach((q, i) => { q.number = i + 1; });

  const body = `// Auto-generated by scraper merge (ExamTopics + exam-dumps.net + securitypracticetest.com) — do not edit by hand.\nconst QUESTIONS = ${JSON.stringify(usable, null, 2)};\n`;
  fs.writeFileSync(QUESTIONS_JS, body);
  console.log(`Wrote ${usable.length} questions to ${QUESTIONS_JS}`);
}

main();
