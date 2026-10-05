// Merges the verified research (scraper/research/batch_*_output.json) into app/data/questions.js:
// replaces correctLetters with the verified answer, adds `explanation` + `referenceUrl`,
// drops the old communityTop/disputed fields.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUESTIONS_JS = path.join(ROOT, 'app', 'data', 'questions.js');
const RESEARCH_DIR = path.join(__dirname, 'research');

function loadQuestions() {
  const content = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const jsonStr = content.replace(/^\/\/.*\n/, '').replace(/^const QUESTIONS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function loadResearchMap() {
  const map = new Map();
  for (let i = 1; i <= 14; i++) {
    const n = String(i).padStart(2, '0');
    const arr = JSON.parse(fs.readFileSync(path.join(RESEARCH_DIR, `batch_${n}_output.json`), 'utf8'));
    for (const r of arr) {
      if (map.has(r.id)) console.warn(`Duplicate research id ${r.id} (batch ${n})`);
      map.set(r.id, r);
    }
  }
  return map;
}

function main() {
  const questions = loadQuestions();
  const research = loadResearchMap();

  let corrected = 0;
  let missingResearch = 0;
  const merged = [];

  for (const q of questions) {
    const r = research.get(q.id);
    if (!r) {
      missingResearch++;
      console.warn(`No research entry for question ${q.id} — dropping it.`);
      continue;
    }

    // Data-quality guard: drop choices with empty text (residual scraper bug) and
    // any question that ends up with <2 usable choices for a non-visual type.
    const choices = (q.choices || []).filter((c) => c.text && c.text.trim().length > 0);
    if (q.type !== 'drag-drop' && q.type !== 'hotspot' && choices.length < 2) {
      console.warn(`Dropping ${q.id}: unusable choices after cleanup (${choices.length} left).`);
      continue;
    }

    if (JSON.stringify([...q.correctLetters].sort()) !== JSON.stringify([...r.correctLetters].sort())) {
      corrected++;
    }

    const { communityTop, disputed, discussionId, ...rest } = q;
    merged.push({
      ...rest,
      choices,
      correctLetters: r.correctLetters,
      explanation: r.explanation,
      referenceUrl: r.referenceUrl || null,
    });
  }

  merged.forEach((q, i) => { q.number = i + 1; });

  console.log(`Questions in: ${questions.length} | merged out: ${merged.length} | missing research: ${missingResearch} | corrected answers: ${corrected}`);

  const body = `// Auto-generated — questions merged with researched/verified answers, explanations and Microsoft Learn references. Do not edit by hand.\nconst QUESTIONS = ${JSON.stringify(merged, null, 2)};\n`;
  fs.writeFileSync(QUESTIONS_JS, body);
  console.log(`Wrote ${merged.length} questions to ${QUESTIONS_JS}`);
}

main();
