// Splits the drag-drop/hotspot questions from app/data/questions.js into batches for
// image-transcription sub-agents. Writes scraper/interactive/batch_NN_input.json.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUESTIONS_JS = path.join(ROOT, 'app', 'data', 'questions.js');
const OUT_DIR = path.join(__dirname, 'interactive');
const BATCH_SIZE = 6;

function loadQuestions() {
  const content = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const jsonStr = content.replace(/^\/\/.*\n/, '').replace(/^const QUESTIONS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function main() {
  const questions = loadQuestions();
  const visual = questions
    .filter((q) => q.type === 'drag-drop' || q.type === 'hotspot')
    .map((q) => ({ id: q.id, type: q.type, text: q.text, images: q.images, answerImage: q.answerImage }));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const batches = [];
  for (let i = 0; i < visual.length; i += BATCH_SIZE) batches.push(visual.slice(i, i + BATCH_SIZE));

  batches.forEach((batch, idx) => {
    const n = String(idx + 1).padStart(2, '0');
    fs.writeFileSync(path.join(OUT_DIR, `batch_${n}_input.json`), JSON.stringify(batch, null, 2));
  });

  console.log(`${visual.length} visual questions in ${batches.length} batches written to ${OUT_DIR} (sizes: ${batches.map((b) => b.length).join(',')})`);
}

main();
