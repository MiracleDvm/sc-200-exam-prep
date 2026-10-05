// Merges transcribed interactive data (scraper/interactive/batch_*_output.json) into
// app/data/questions.js, adding an `interactive` field to drag-drop/hotspot questions.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUESTIONS_JS = path.join(ROOT, 'app', 'data', 'questions.js');
const BATCH_DIR = path.join(__dirname, 'interactive');

function loadQuestions() {
  const content = fs.readFileSync(QUESTIONS_JS, 'utf8');
  const jsonStr = content.replace(/^\/\/.*\n/, '').replace(/^const QUESTIONS = /, '').replace(/;\s*$/, '');
  return JSON.parse(jsonStr);
}

function loadInteractiveMap() {
  const map = new Map();
  for (let i = 1; i <= 5; i++) {
    const n = String(i).padStart(2, '0');
    const arr = JSON.parse(fs.readFileSync(path.join(BATCH_DIR, `batch_${n}_output.json`), 'utf8'));
    for (const r of arr) map.set(r.id, r.interactive);
  }
  return map;
}

function validate(id, interactive) {
  const errors = [];
  if (!interactive) return errors;
  if (interactive.kind === 'select-blanks') {
    const blanks = interactive.segments.filter((s) => s.type === 'blank');
    if (!blanks.length) errors.push('no blanks');
    blanks.forEach((b) => {
      if (!b.options || !b.options.includes(b.correct)) errors.push(`blank ${b.id} correct not in options`);
    });
  } else if (interactive.kind === 'order-items') {
    if (!interactive.pool || !interactive.pool.length) errors.push('empty pool');
    if (!interactive.correctOrder || !interactive.correctOrder.length) errors.push('empty correctOrder');
    const counts = {};
    interactive.pool.forEach((p) => { counts[p] = (counts[p] || 0) + 1; });
    const used = {};
    (interactive.correctOrder || []).forEach((t) => {
      if (!interactive.pool.includes(t)) { errors.push(`correctOrder item not in pool: "${t}"`); return; }
      used[t] = (used[t] || 0) + 1;
      if (used[t] > counts[t]) errors.push(`correctOrder reuses "${t}" more times than it appears in pool`);
    });
  } else {
    errors.push(`unknown kind: ${interactive.kind}`);
  }
  return errors;
}

function main() {
  const questions = loadQuestions();
  const interactiveMap = loadInteractiveMap();

  let attached = 0;
  let nullCount = 0;
  let errorCount = 0;

  for (const q of questions) {
    if (q.type !== 'drag-drop' && q.type !== 'hotspot') continue;
    if (!interactiveMap.has(q.id)) {
      console.warn(`No interactive data for ${q.id}`);
      continue;
    }
    const interactive = interactiveMap.get(q.id);
    if (!interactive) { nullCount++; continue; }
    const errors = validate(q.id, interactive);
    if (errors.length) {
      console.warn(`VALIDATION FAILED for ${q.id}: ${errors.join('; ')}`);
      errorCount++;
      continue;
    }
    q.interactive = interactive;
    attached++;
  }

  console.log(`Attached: ${attached} | null (kept image fallback): ${nullCount} | validation errors (kept image fallback): ${errorCount}`);

  const body = `// Auto-generated — includes interactive drag-drop/hotspot data (scraper/interactive/). Do not edit by hand.\nconst QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(QUESTIONS_JS, body);
  console.log(`Wrote ${questions.length} questions to ${QUESTIONS_JS}`);
}

main();
