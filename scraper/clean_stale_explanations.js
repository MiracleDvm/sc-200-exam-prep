// Removes the stale "can't verify the image answer" caveat from explanations of
// questions that now have verified `interactive` data (added after the research pass).

const fs = require('fs');
const path = require('path');

const QUESTIONS_JS = path.join(__dirname, '..', 'app', 'data', 'questions.js');

function loadQuestions() {
  const content = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const jsonStr = content.replace(/^\/\/.*\n/, '').replace(/^const QUESTIONS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

// Ordered most-specific-first; each strips the stale lead-in, leaving a clean sentence start.
const MARKERS = [
  /Le concept test[ée]\s+est\s+/i,
  /Conceptually,?\s+/i,
  /Concept[ée]?,?\s+/i,
  /Sur le fond,?\s+/i,
];

function clean(explanation) {
  for (const re of MARKERS) {
    const m = explanation.match(re);
    if (m && m.index < 400) {
      const rest = explanation.slice(m.index + m[0].length);
      return rest.charAt(0).toUpperCase() + rest.slice(1);
    }
  }
  return explanation;
}

function main() {
  const questions = loadQuestions();
  let changed = 0;
  for (const q of questions) {
    if (!q.interactive) continue;
    const cleaned = clean(q.explanation);
    if (cleaned !== q.explanation) {
      q.explanation = cleaned;
      changed++;
    }
  }
  console.log(`Cleaned ${changed} explanations.`);
  const body = `// Auto-generated — includes interactive drag-drop/hotspot data (scraper/interactive/). Do not edit by hand.\nconst QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(QUESTIONS_JS, body);
}

main();
