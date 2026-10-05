// Splits app/data/questions.js into batches for research/verification sub-agents.
// Writes scraper/research/batch_NN_input.json (one per BATCH_SIZE questions).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUESTIONS_JS = path.join(ROOT, 'app', 'data', 'questions.js');
const OUT_DIR = path.join(__dirname, 'research');
const BATCH_SIZE = 18;

function loadQuestions() {
  const content = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const jsonStr = content.replace(/^\/\/.*\n/, '').replace(/^const QUESTIONS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function main() {
  const questions = loadQuestions();
  const queue = questions.map((q) => ({
    id: q.id,
    text: q.text,
    type: q.type,
    choices: q.choices,
    currentCorrectLetters: q.correctLetters,
    images: q.images,
    answerImage: q.answerImage,
  }));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const batches = [];
  for (let i = 0; i < queue.length; i += BATCH_SIZE) batches.push(queue.slice(i, i + BATCH_SIZE));

  batches.forEach((batch, idx) => {
    const n = String(idx + 1).padStart(2, '0');
    fs.writeFileSync(path.join(OUT_DIR, `batch_${n}_input.json`), JSON.stringify(batch, null, 2));
  });

  console.log(`${batches.length} batches written to ${OUT_DIR} (sizes: ${batches.map((b) => b.length).join(',')})`);
}

main();
