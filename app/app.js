// SC-200 Exam Prep — vanilla JS, no build step, no server.
// Reads the global QUESTIONS array from data/questions.js.

const STORAGE_KEYS = { history: 'sc200.history', flagged: 'sc200.flagged' };

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.history)) || []; }
  catch { return []; }
}
function saveHistoryEntry(entry) {
  const h = loadHistory();
  h.unshift(entry);
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(h.slice(0, 50)));
}
function loadFlagged() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.flagged)) || []); }
  catch { return new Set(); }
}
function saveFlagged(set) {
  localStorage.setItem(STORAGE_KEYS.flagged, JSON.stringify([...set]));
}

let flaggedSet = loadFlagged();

const app = document.getElementById('app');
const timerEl = document.getElementById('examTimer');
const langToggleEl = document.getElementById('langToggle');
const themeToggleEl = document.getElementById('themeToggle');
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

let state = { view: 'home' };
let timerInterval = null;

function escapeHtml(str) {
  return (str || '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

// ---------- Language (question content only — the app UI itself stays French) ----------

let currentLang = localStorage.getItem('sc200.lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sc200.lang', lang);
  renderLangToggle();
  render();
}

function renderLangToggle() {
  langToggleEl.innerHTML = `
    <button class="lang-btn ${currentLang === 'fr' ? 'active' : ''}" onclick="setLang('fr')">FR</button>
    <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
  `;
}

function setTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  if (persist) localStorage.setItem('sc200.theme', theme);
  renderThemeToggle();
}

function toggleTheme() {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
}

function renderThemeToggle() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const nextTheme = isDark ? 'clair' : 'sombre';
  themeToggleEl.setAttribute('aria-label', `Activer le thème ${nextTheme}`);
  themeToggleEl.title = `Activer le thème ${nextTheme}`;
  themeToggleEl.innerHTML = isDark
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path></svg>';
}

if (!['light', 'dark'].includes(localStorage.getItem('sc200.theme'))) {
  systemThemeQuery.addEventListener('change', (event) => {
    if (!localStorage.getItem('sc200.theme')) setTheme(event.matches ? 'dark' : 'light', false);
  });
}

// ---------- UI strings (whole app chrome, not just question content) ----------

const UI = {
  fr: {
    welcome: 'Bienvenue',
    questionsAvailable: 'questions disponibles',
    examsTaken: 'examens passés',
    questionsFlagged: 'questions marquées',
    startExam: 'Démarrer un examen',
    freePractice: 'Entraînement libre',
    recentHistory: 'Historique récent',
    noHistory: "Aucune session d'examen enregistrée encore.",
    questionsWord: 'questions',
    configureExam: "Configurer l'examen",
    questionCount: 'Nombre de questions',
    duration: 'Durée (minutes)',
    examConfigHint: "Valeurs par défaut alignées sur l'examen réel SC-200 (40-60 questions, 120 minutes, seuil de réussite 700/1000).",
    start: 'Démarrer',
    cancel: 'Annuler',
    question: 'Question',
    unflagBtn: 'Retirer le marquage',
    flagBtn: 'Marquer à revoir',
    dragDropNotice: (type) => `Question de type ${type === 'drag-drop' ? 'glisser-déposer' : 'zone active'} — non interactive ici. Tu l'auto-évalueras à la correction.`,
    markSeen: 'Marquer comme vue',
    multiAnswerHint: 'Plusieurs réponses possibles.',
    prev: 'Précédent',
    next: 'Suivant',
    finishExam: "Terminer l'examen",
    confirmFinish: "Terminer l'examen maintenant ?",
    officialAnswer: 'Réponse officielle :',
    noAnswerImage: "(pas d'image de réponse disponible)",
    iWasRight: "J'avais juste",
    iWasWrong: "J'avais faux",
    yourAnswer: '(ta réponse)',
    sortLabel: 'Trier :',
    sortDefault: "Ordre de l'examen",
    sortWrongFirst: "Mauvaises réponses d'abord",
    domainLabel: 'Domaine :',
    all: 'Tous',
    questionsShown: (n) => `${n} question${n === 1 ? '' : 's'} affichée${n === 1 ? '' : 's'}`,
    correctAnswers: 'bonnes réponses',
    passThreshold: 'seuil de réussite 700',
    passed: 'Réussi',
    failed: 'Échoué',
    saveAndHome: "Enregistrer et retourner à l'accueil",
    noMatch: 'Aucune question ne correspond à ce filtre.',
    correctBadge: 'Correct',
    incorrectBadge: 'Incorrect',
    freePracticeTitle: 'Entraînement libre',
    domainFilterLabel: 'Domaine',
    order: 'Ordre',
    random: 'Aléatoire',
    byNumber: 'Par numéro',
    flaggedOnly: (n) => `Seulement les questions marquées (${n})`,
    showAnswer: 'Afficher la réponse',
    validate: 'Valider',
    youWereRight: 'Tu avais juste',
    youWereWrong: 'Tu avais faux',
    goodAnswer: 'Bonne réponse !',
    badAnswer: 'Mauvaise réponse.',
    quit: 'Quitter',
    availableActions: 'Actions disponibles',
    yourOrderAnswer: "Ta réponse (dans l'ordre)",
    emptyDash: '—',
    clickActionLeft: 'Clique une action à gauche',
    emptyValue: '(vide)',
    correctAnswerIs: (v) => `(bonne réponse : ${v})`,
    yourAnswerLabel: 'Ta réponse',
    correctAnswerLabel: 'Réponse correcte',
    noAnswerGiven: '(aucune réponse donnée)',
    caseStudyToggle: "Contexte de l'étude de cas",
    noQuestionsLoaded: 'Aucune question chargée',
    questionsDataUnavailable: 'La banque de questions est introuvable ou vide. Vérifie que le fichier app/data/questions.js est présent, puis recharge cette page.',
    explanation: 'Explication',
    learnMore: 'En savoir plus (Microsoft Learn)',
  },
  en: {
    welcome: 'Welcome',
    questionsAvailable: 'questions available',
    examsTaken: 'exams taken',
    questionsFlagged: 'flagged questions',
    startExam: 'Start an exam',
    freePractice: 'Free practice',
    recentHistory: 'Recent history',
    noHistory: 'No exam session recorded yet.',
    questionsWord: 'questions',
    configureExam: 'Configure the exam',
    questionCount: 'Number of questions',
    duration: 'Duration (minutes)',
    examConfigHint: 'Defaults match the real SC-200 exam (40-60 questions, 120 minutes, 700/1000 pass threshold).',
    start: 'Start',
    cancel: 'Cancel',
    question: 'Question',
    unflagBtn: 'Remove flag',
    flagBtn: 'Flag for review',
    dragDropNotice: (type) => `${type === 'drag-drop' ? 'Drag-and-drop' : 'Hotspot'} question — not interactive here. You'll self-grade it at review time.`,
    markSeen: 'Mark as seen',
    multiAnswerHint: 'Multiple answers possible.',
    prev: 'Previous',
    next: 'Next',
    finishExam: 'Finish exam',
    confirmFinish: 'Finish the exam now?',
    officialAnswer: 'Official answer:',
    noAnswerImage: '(no answer image available)',
    iWasRight: 'I got it right',
    iWasWrong: 'I got it wrong',
    yourAnswer: '(your answer)',
    sortLabel: 'Sort:',
    sortDefault: 'Exam order',
    sortWrongFirst: 'Wrong answers first',
    domainLabel: 'Domain:',
    all: 'All',
    questionsShown: (n) => `${n} question${n === 1 ? '' : 's'} shown`,
    correctAnswers: 'correct answers',
    passThreshold: 'pass threshold 700',
    passed: 'Passed',
    failed: 'Failed',
    saveAndHome: 'Save and return home',
    noMatch: 'No question matches this filter.',
    correctBadge: 'Correct',
    incorrectBadge: 'Incorrect',
    freePracticeTitle: 'Free practice',
    domainFilterLabel: 'Domain',
    order: 'Order',
    random: 'Random',
    byNumber: 'By number',
    flaggedOnly: (n) => `Flagged questions only (${n})`,
    showAnswer: 'Show answer',
    validate: 'Submit',
    youWereRight: 'You were right',
    youWereWrong: 'You were wrong',
    goodAnswer: 'Correct answer!',
    badAnswer: 'Wrong answer.',
    quit: 'Quit',
    availableActions: 'Available actions',
    yourOrderAnswer: 'Your answer (in order)',
    emptyDash: '—',
    clickActionLeft: 'Click an action on the left',
    emptyValue: '(empty)',
    correctAnswerIs: (v) => `(correct answer: ${v})`,
    yourAnswerLabel: 'Your answer',
    correctAnswerLabel: 'Correct answer',
    noAnswerGiven: '(no answer given)',
    caseStudyToggle: 'Case study context',
    noQuestionsLoaded: 'No questions loaded',
    questionsDataUnavailable: 'The question bank is missing or empty. Make sure app/data/questions.js is present, then reload this page.',
    explanation: 'Explanation',
    learnMore: 'Learn more (Microsoft Learn)',
  },
};
function t(key, ...args) {
  const entry = UI[currentLang][key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

function qText(q) {
  return currentLang === 'fr' && q.text_fr ? q.text_fr : q.text;
}

function qChoiceText(c) {
  return currentLang === 'fr' && c.text_fr ? c.text_fr : c.text;
}

const DOMAIN_LABELS_FR = {
  'Manage a security operations environment': 'Gérer un environnement d’opérations de sécurité',
  'Respond to security incidents': 'Répondre aux incidents de sécurité',
  'Perform threat hunting': 'Effectuer une chasse aux menaces',
};

function topicLabel(t) {
  if (typeof t === 'number') return `Topic ${t}`;
  if (currentLang === 'fr' && DOMAIN_LABELS_FR[t]) return DOMAIN_LABELS_FR[t];
  return t;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns a copy of q with its choices (and correctLetters) randomized into a fresh
// A/B/C/... order, so the correct answer isn't always at the same position across sessions.
function shuffleChoices(q) {
  if (!q.choices || q.choices.length < 2) return q;
  const correctSet = new Set(q.correctLetters || []);
  const shuffled = shuffle(q.choices);
  const choices = shuffled.map((c, i) => ({ ...c, letter: String.fromCharCode(65 + i) }));
  const correctLetters = choices.filter((c, i) => correctSet.has(shuffled[i].letter)).map((c) => c.letter);
  return { ...q, choices, correctLetters };
}

function renderInlineExhibits(escapedLine) {
  return escapedLine.replace(/\[EXHIBIT:(https?:\/\/[^\]]+)\]/g, '<img class="exhibit-image" src="$1" alt="exhibit">');
}

function renderCaseStudyBlock(text) {
  const lines = text.split('\n');
  let html = '';
  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (trimmed === '') { i++; continue; }

    const exhibitOnly = trimmed.match(/^\[EXHIBIT:(https?:\/\/[^\]]+)\]$/);
    if (exhibitOnly) {
      html += `<img class="exhibit-image" src="${exhibitOnly[1]}" alt="exhibit">`;
      i++;
      continue;
    }

    if (/^-/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^-/.test(lines[i].trim())) {
        const item = lines[i].trim().replace(/^-\s*/, '');
        if (item) items.push(item);
        i++;
      }
      if (items.length) {
        html += `<ul class="cs-list">${items.map((it) => `<li>${renderInlineExhibits(escapeHtml(it))}</li>`).join('')}</ul>`;
      }
      continue;
    }

    const isHeader = trimmed.length > 0 && trimmed.length <= 60 && !/[.?!]$/.test(trimmed) && i + 1 < lines.length;
    if (isHeader && trimmed !== 'Case study:') {
      html += `<h4 class="cs-header">${escapeHtml(trimmed.replace(/:$/, ''))}</h4>`;
      i++;
      continue;
    }

    html += `<p class="cs-para">${renderInlineExhibits(escapeHtml(raw))}</p>`;
    i++;
  }
  return html;
}

function renderQuestionBody(q) {
  const imgs = (q.images || []).map((src) => `<img src="${src}" alt="illustration">`).join('');
  const displayText = qText(q);
  // Case-study-ness is detected from the (always-present) English text, not the
  // possibly-missing French translation.
  if (/^Case study:/.test(q.text)) {
    const blocks = displayText.split(/\n\n+/);
    const questionPart = blocks.pop();
    const caseStudyPart = blocks.join('\n\n');
    return `<div class="q-text case-study">
      <details class="cs-details" open>
        <summary>${t('caseStudyToggle')}</summary>
        <div class="cs-body">${renderCaseStudyBlock(caseStudyPart)}</div>
      </details>
      <div class="cs-question">${escapeHtml(questionPart).replace(/\n/g, '<br>')}</div>
      ${imgs}
    </div>`;
  }
  return `<div class="q-text">${escapeHtml(displayText)}${imgs}</div>`;
}

function qExplanation(q) {
  return currentLang === 'en' && q.explanation_en ? q.explanation_en : q.explanation;
}

function renderCommunityBlock(q) {
  if (!q.explanation) return '';
  const link = q.referenceUrl
    ? `<div class="ref-link"><a href="${escapeHtml(q.referenceUrl)}" target="_blank" rel="noopener">${t('learnMore')}</a></div>`
    : '';
  return `<div class="community-comment">
      <div class="meta">${t('explanation')}</div>
      ${escapeHtml(qExplanation(q))}
      ${link}
    </div>`;
}

// ---------- Interactive drag-drop / hotspot questions ----------

function getInteractiveStore() {
  if (state.view === 'exam' && state.exam) return state.exam.interactiveAnswers;
  if (state.view === 'practice' && state.practice) return state.practice.interactiveAnswers;
  return null;
}

function interactiveHasAnswer(answer) {
  if (!answer) return false;
  if (answer.blanks) return Object.values(answer.blanks).some((v) => v);
  if (answer.order) return answer.order.length > 0;
  return false;
}

function interactiveIsComplete(interactive, answer) {
  if (!answer) return false;
  if (interactive.kind === 'select-blanks') {
    const blanks = answer.blanks || {};
    return interactive.segments.filter((s) => s.type === 'blank').every((s) => blanks[s.id]);
  }
  if (interactive.kind === 'order-items') {
    return (answer.order || []).length > 0;
  }
  return false;
}

function interactiveIsCorrect(interactive, answer) {
  if (!answer) return false;
  if (interactive.kind === 'select-blanks') {
    const blanks = answer.blanks || {};
    return interactive.segments
      .filter((s) => s.type === 'blank')
      .every((s) => blanks[s.id] === s.correct);
  }
  if (interactive.kind === 'order-items') {
    const given = (answer.order || []).map((idx) => interactive.pool[idx]);
    return JSON.stringify(given) === JSON.stringify(interactive.correctOrder);
  }
  return false;
}

function setBlankAnswer(qid, blankId, value) {
  const store = getInteractiveStore();
  if (!store) return;
  if (!store[qid]) store[qid] = {};
  if (!store[qid].blanks) store[qid].blanks = {};
  store[qid].blanks[blankId] = value;
  render();
}

function addOrderItem(qid, poolIdx) {
  const store = getInteractiveStore();
  if (!store) return;
  if (!store[qid]) store[qid] = {};
  if (!store[qid].order) store[qid].order = [];
  if (!store[qid].order.includes(poolIdx)) store[qid].order.push(poolIdx);
  render();
}

function removeOrderItem(qid, pos) {
  const store = getInteractiveStore();
  if (!store || !store[qid] || !store[qid].order) return;
  store[qid].order.splice(pos, 1);
  render();
}

function renderInteractiveEditable(qid, interactive, answer) {
  if (interactive.kind === 'select-blanks') {
    const blanks = (answer && answer.blanks) || {};
    const body = interactive.segments.map((seg) => {
      if (seg.type === 'text') return escapeHtml(seg.value);
      const val = blanks[seg.id] || '';
      const opts = seg.options.map((o) => `<option value="${escapeHtml(o)}" ${o === val ? 'selected' : ''}>${escapeHtml(o)}</option>`).join('');
      return `<select class="inline-blank" onchange="setBlankAnswer('${qid}','${seg.id}', this.value)"><option value="">--</option>${opts}</select>`;
    }).join('');
    return `<pre class="interactive-query">${body}</pre>`;
  }
  if (interactive.kind === 'order-items') {
    const order = (answer && answer.order) || [];
    const usedIdx = new Set(order);
    const poolHtml = interactive.pool.map((item, idx) => usedIdx.has(idx) ? '' :
      `<li class="pool-item" onclick="addOrderItem('${qid}', ${idx})">${escapeHtml(item)}</li>`
    ).join('');
    const orderHtml = order.map((idx, pos) =>
      `<li class="order-item">${pos + 1}. ${escapeHtml(interactive.pool[idx])} <button class="order-remove" onclick="event.stopPropagation(); removeOrderItem('${qid}', ${pos})">✕</button></li>`
    ).join('');
    return `<div class="order-container">
      <div class="order-col"><strong>${t('availableActions')}</strong><ul class="pool-list">${poolHtml || `<li class="empty">${t('emptyDash')}</li>`}</ul></div>
      <div class="order-col"><strong>${t('yourOrderAnswer')}</strong><ul class="order-list">${orderHtml || `<li class="empty">${t('clickActionLeft')}</li>`}</ul></div>
    </div>`;
  }
  return '';
}

function renderInteractiveRevealed(interactive, answer) {
  if (interactive.kind === 'select-blanks') {
    const blanks = (answer && answer.blanks) || {};
    const body = interactive.segments.map((seg) => {
      if (seg.type === 'text') return escapeHtml(seg.value);
      const val = blanks[seg.id] || '';
      const isCorrect = val === seg.correct;
      const shown = val ? escapeHtml(val) : t('emptyValue');
      const note = isCorrect ? '' : ` <span class="blank-correct-answer">${escapeHtml(t('correctAnswerIs', seg.correct))}</span>`;
      return `<span class="blank-value ${isCorrect ? 'blank-correct' : 'blank-incorrect'}">${shown}</span>${note}`;
    }).join('');
    return `<pre class="interactive-query">${body}</pre>`;
  }
  if (interactive.kind === 'order-items') {
    const order = (answer && answer.order) || [];
    const given = order.map((idx) => interactive.pool[idx]);
    const allCorrect = JSON.stringify(given) === JSON.stringify(interactive.correctOrder);
    const givenHtml = given.length ? given.map((val, i) => `<li>${i + 1}. ${escapeHtml(val)}</li>`).join('') : `<li class="empty">${t('noAnswerGiven')}</li>`;
    const correctHtml = interactive.correctOrder.map((val, i) => `<li>${i + 1}. ${escapeHtml(val)}</li>`).join('');
    return `<div class="order-container">
      <div class="order-col"><strong>${t('yourAnswerLabel')}</strong><ul class="order-list ${allCorrect ? 'all-correct' : 'all-incorrect'}">${givenHtml}</ul></div>
      <div class="order-col"><strong>${t('correctAnswerLabel')}</strong><ul class="order-list all-correct">${correctHtml}</ul></div>
    </div>`;
  }
  return '';
}

// ---------- Routing ----------

function render() {
  timerEl.classList.add('hidden');
  if (state.view === 'home') renderHome();
  else if (state.view === 'examConfig') renderExamConfig();
  else if (state.view === 'exam') renderExam();
  else if (state.view === 'review') renderReview();
  else if (state.view === 'practiceConfig') renderPracticeConfig();
  else if (state.view === 'practice') renderPractice();
}

function goHome() {
  if (timerInterval) clearInterval(timerInterval);
  state = { view: 'home' };
  render();
}

// ---------- Home ----------

function renderHome() {
  const history = loadHistory();
  const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
  const historyHtml = history.length
    ? `<ul class="history-list">${history.slice(0, 10).map((h) => `
        <li>
          <span>${new Date(h.date).toLocaleDateString(locale)} — ${h.questionCount} ${t('questionsWord')}</span>
          <span class="${h.passed ? 'badge-pass' : 'badge-fail'}">${h.score}/1000</span>
        </li>`).join('')}</ul>`
    : `<p style="color:var(--text-dim)">${t('noHistory')}</p>`;

  app.innerHTML = `
    <div class="card">
      <h2>${t('welcome')}</h2>
      <div class="stat-row">
        <div class="stat"><div class="num">${QUESTIONS.length}</div><div class="label">${t('questionsAvailable')}</div></div>
        <div class="stat"><div class="num">${history.length}</div><div class="label">${t('examsTaken')}</div></div>
        <div class="stat"><div class="num">${flaggedSet.size}</div><div class="label">${t('questionsFlagged')}</div></div>
      </div>
      <div class="btn-row home-actions">
        <button class="primary" onclick="goExamConfig()">${t('startExam')}</button>
        <button class="ghost" onclick="goPracticeConfig()">${t('freePractice')}</button>
      </div>
    </div>
    <div class="card">
      <h2>${t('recentHistory')}</h2>
      ${historyHtml}
    </div>
  `;
}

// ---------- Exam mode ----------

function goExamConfig() {
  state = { view: 'examConfig' };
  render();
}

function renderExamConfig() {
  app.innerHTML = `
    <div class="card">
      <h2>${t('configureExam')}</h2>
      <div class="grid-2">
        <div>
          <label>${t('questionCount')}</label>
          <div class="stepper">
            <button type="button" onclick="adjustStepper('cfgCount',-5)" aria-label="-">−</button>
            <input id="cfgCount" type="number" min="5" max="${QUESTIONS.length}" value="54">
            <button type="button" onclick="adjustStepper('cfgCount',5)" aria-label="+">+</button>
          </div>
        </div>
        <div>
          <label>${t('duration')}</label>
          <div class="stepper">
            <button type="button" onclick="adjustStepper('cfgDuration',-5)" aria-label="-">−</button>
            <input id="cfgDuration" type="number" min="5" max="240" value="120">
            <button type="button" onclick="adjustStepper('cfgDuration',5)" aria-label="+">+</button>
          </div>
        </div>
      </div>
      <p class="hint">
        ${t('examConfigHint')}
      </p>
      <div class="btn-row">
        <button class="primary" onclick="startExam()">${t('start')}</button>
        <button class="ghost" onclick="goHome()">${t('cancel')}</button>
      </div>
    </div>`;
}

function adjustStepper(id, delta) {
  const el = document.getElementById(id);
  const min = Number(el.min) || 0;
  const max = Number(el.max) || Infinity;
  const next = Math.min(max, Math.max(min, (Number(el.value) || 0) + delta));
  el.value = next;
}

function startExam() {
  const count = Math.min(Math.max(Number(document.getElementById('cfgCount').value) || 54, 1), QUESTIONS.length);
  const durationMin = Math.max(Number(document.getElementById('cfgDuration').value) || 120, 1);
  const pool = shuffle(QUESTIONS).slice(0, count).map(shuffleChoices);

  state = {
    view: 'exam',
    exam: {
      questions: pool,
      answers: {},
      visited: {},
      selfGrades: {},
      interactiveAnswers: {},
      index: 0,
      endAt: Date.now() + durationMin * 60000,
      durationMin,
    },
  };
  render();
  startTimerLoop();
}

function startTimerLoop() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!state.exam) { clearInterval(timerInterval); return; }
    const remaining = state.exam.endAt - Date.now();
    if (remaining <= 0) {
      clearInterval(timerInterval);
      finishExam();
      return;
    }
    updateTimerDisplay(remaining);
  }, 1000);
}

function updateTimerDisplay(remaining) {
  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  timerEl.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
  timerEl.classList.remove('hidden');
  timerEl.classList.toggle('low', remaining < 5 * 60000);
}

function renderExam() {
  const ex = state.exam;
  const q = ex.questions[ex.index];
  updateTimerDisplay(ex.endAt - Date.now());

  const navButtons = ex.questions.map((qq, i) => {
    const answered = (ex.answers[qq.id] && ex.answers[qq.id].length > 0) || ex.visited[qq.id] || interactiveHasAnswer(ex.interactiveAnswers[qq.id]);
    const classes = [
      i === ex.index ? 'current' : '',
      answered ? 'answered' : '',
      flaggedSet.has(qq.id) ? 'flagged' : '',
    ].join(' ');
    return `<button class="${classes}" onclick="gotoQuestion(${i})">${i + 1}</button>`;
  }).join('');

  let bodyHtml;
  if (q.interactive) {
    bodyHtml = `
      ${renderQuestionBody(q)}
      ${renderInteractiveEditable(q.id, q.interactive, ex.interactiveAnswers[q.id])}
    `;
  } else if (q.type === 'drag-drop' || q.type === 'hotspot') {
    bodyHtml = `
      ${renderQuestionBody(q)}
      <p style="color:var(--text-dim);font-size:0.85rem;">
        ${t('dragDropNotice', q.type)}
      </p>
      <div class="btn-row"><button onclick="markVisited('${q.id}')">${t('markSeen')}</button></div>
    `;
  } else {
    const multi = q.type === 'multi-select';
    const selected = ex.answers[q.id] || [];
    const choicesHtml = q.choices.map((c) => {
      const isSel = selected.includes(c.letter);
      return `<li class="choice ${isSel ? 'selected' : ''}" onclick="toggleChoice('${q.id}','${c.letter}', ${multi})">
        <input type="${multi ? 'checkbox' : 'radio'}" ${isSel ? 'checked' : ''} readonly>
        <span class="letter">${c.letter}.</span><span>${escapeHtml(qChoiceText(c))}</span>
      </li>`;
    }).join('');
    bodyHtml = `${renderQuestionBody(q)}
      ${multi ? `<p style="color:var(--text-dim);font-size:0.85rem;">${t('multiAnswerHint')}</p>` : ''}
      <ul class="choices">${choicesHtml}</ul>`;
  }

  app.innerHTML = `
    <div class="card">
      <div class="toolbar">
        <span class="topic-pill">${topicLabel(q.topic)}</span>
        <span class="topic-pill">${t('question')} ${ex.index + 1} / ${ex.questions.length}</span>
        <button class="ghost flag-toggle ${flaggedSet.has(q.id) ? 'is-flagged' : ''}" onclick="toggleFlag('${q.id}')">${flaggedSet.has(q.id) ? t('unflagBtn') : t('flagBtn')}</button>
      </div>
      ${bodyHtml}
      <div class="btn-row">
        <button class="btn-prev" onclick="gotoQuestion(${ex.index - 1})" ${ex.index === 0 ? 'disabled' : ''}>${t('prev')}</button>
        <button class="btn-next" onclick="gotoQuestion(${ex.index + 1})" ${ex.index === ex.questions.length - 1 ? 'disabled' : ''}>${t('next')}</button>
        <button class="primary" style="margin-left:auto" onclick="confirmFinishExam()">${t('finishExam')}</button>
      </div>
    </div>
    <div class="card">
      <div class="nav-grid">${navButtons}</div>
    </div>
  `;
}

function toggleChoice(qid, letter, multi) {
  const ex = state.exam;
  const current = ex.answers[qid] || [];
  ex.answers[qid] = multi
    ? (current.includes(letter) ? current.filter((l) => l !== letter) : [...current, letter])
    : [letter];
  render();
}
function markVisited(qid) { state.exam.visited[qid] = true; render(); }
function gotoQuestion(i) {
  const ex = state.exam;
  if (i < 0 || i >= ex.questions.length) return;
  ex.index = i;
  render();
}
function toggleFlag(qid) {
  if (flaggedSet.has(qid)) flaggedSet.delete(qid); else flaggedSet.add(qid);
  saveFlagged(flaggedSet);
  render();
}
function confirmFinishExam() {
  if (confirm(t('confirmFinish'))) finishExam();
}
function finishExam() {
  if (timerInterval) clearInterval(timerInterval);
  state = { view: 'review', exam: state.exam };
  state.exam.reviewFilter = { sort: 'default', topic: 'all' };
  render();
}

function isQuestionCorrect(q, ex) {
  if (q.interactive) return interactiveIsCorrect(q.interactive, ex.interactiveAnswers[q.id]);
  if (q.type === 'drag-drop' || q.type === 'hotspot') return ex.selfGrades[q.id] === 'correct';
  const sel = (ex.answers[q.id] || []).slice().sort().join('');
  const off = (q.correctLetters || []).slice().sort().join('');
  return !!sel && sel === off;
}

function computeScore(ex) {
  let correct = 0;
  ex.questions.forEach((q) => { if (isQuestionCorrect(q, ex)) correct++; });
  const total = ex.questions.length;
  const score = total ? Math.round((correct / total) * 1000) : 0;
  return { correct, total, score, passed: score >= 700 };
}

function setReviewSort(value) { state.exam.reviewFilter.sort = value; render(); }
function setReviewTopicFilter(value) { state.exam.reviewFilter.topic = value; render(); }

function renderReview() {
  const ex = state.exam;
  const { correct, total, score, passed } = computeScore(ex);
  const filter = ex.reviewFilter || { sort: 'default', topic: 'all' };

  const topics = [...new Set(ex.questions.map((q) => q.topic))].sort((a, b) => String(a).localeCompare(String(b)));

  let indexed = ex.questions.map((q, i) => ({ q, originalIndex: i }));
  if (filter.topic !== 'all') indexed = indexed.filter(({ q }) => q.topic === filter.topic);
  if (filter.sort === 'wrongFirst') {
    indexed = indexed
      .map((item) => ({ ...item, correct: isQuestionCorrect(item.q, ex) }))
      .sort((a, b) => (a.correct === b.correct ? 0 : a.correct ? 1 : -1));
  }

  const filterHtml = `
    <div class="toolbar">
      <label style="color:var(--text-dim);font-size:0.85rem;">${t('sortLabel')}
        <select onchange="setReviewSort(this.value)">
          <option value="default" ${filter.sort === 'default' ? 'selected' : ''}>${t('sortDefault')}</option>
          <option value="wrongFirst" ${filter.sort === 'wrongFirst' ? 'selected' : ''}>${t('sortWrongFirst')}</option>
        </select>
      </label>
      <label style="color:var(--text-dim);font-size:0.85rem;">${t('domainLabel')}
        <select onchange="setReviewTopicFilter(this.value)">
          <option value="all" ${filter.topic === 'all' ? 'selected' : ''}>${t('all')}</option>
          ${topics.map((d) => `<option value="${escapeHtml(String(d))}" ${filter.topic === d ? 'selected' : ''}>${escapeHtml(topicLabel(d))}</option>`).join('')}
        </select>
      </label>
      <span class="topic-pill">${t('questionsShown', indexed.length)}</span>
    </div>
  `;

  const itemsHtml = indexed.map(({ q, originalIndex: i }) => {
    let answerBlock;
    if (q.interactive) {
      const isCorrect = interactiveIsCorrect(q.interactive, ex.interactiveAnswers[q.id]);
      answerBlock = `
        ${renderInteractiveRevealed(q.interactive, ex.interactiveAnswers[q.id])}
        <p class="${isCorrect ? 'badge-pass' : 'badge-fail'}" style="margin-top:8px;">${isCorrect ? t('correctBadge') : t('incorrectBadge')}</p>
      `;
    } else if (q.type === 'drag-drop' || q.type === 'hotspot') {
      const grade = ex.selfGrades[q.id];
      answerBlock = `
        <p style="color:var(--text-dim);font-size:0.85rem;">${t('officialAnswer')}</p>
        ${q.answerImage ? `<img src="${q.answerImage}" style="max-width:100%;border-radius:6px;">` : `<p>${t('noAnswerImage')}</p>`}
        <div class="btn-row">
          <button class="${grade === 'correct' ? 'primary' : ''}" onclick="setSelfGrade('${q.id}','correct')">${t('iWasRight')}</button>
          <button class="${grade === 'incorrect' ? 'primary' : ''}" onclick="setSelfGrade('${q.id}','incorrect')">${t('iWasWrong')}</button>
        </div>`;
    } else {
      const sel = ex.answers[q.id] || [];
      const off = q.correctLetters || [];
      answerBlock = `<ul class="choices">${q.choices.map((c) => {
        const wasSelected = sel.includes(c.letter);
        const isOfficial = off.includes(c.letter);
        const cls = isOfficial ? 'correct' : (wasSelected ? 'incorrect' : '');
        return `<li class="choice ${cls}"><span class="letter">${c.letter}.</span><span>${escapeHtml(qChoiceText(c))}</span>${wasSelected ? ` <strong>${t('yourAnswer')}</strong>` : ''}</li>`;
      }).join('')}</ul>`;
    }

    return `<div class="review-item">
      <div class="q-meta">${t('question')} ${i + 1} — ${topicLabel(q.topic)}</div>
      ${renderQuestionBody(q)}
      ${answerBlock}
      ${renderCommunityBlock(q)}
    </div>`;
  }).join('');

  app.innerHTML = `
    <div class="card">
      <div class="score-big ${passed ? 'pass' : 'fail'}">${score} / 1000</div>
      <div class="result-sub">${correct} / ${total} ${t('correctAnswers')} — ${t('passThreshold')} — <span class="${passed ? 'badge-pass' : 'badge-fail'}">${passed ? t('passed') : t('failed')}</span></div>
      <div class="btn-row" style="justify-content:center;">
        <button class="primary" onclick="saveAndGoHome()">${t('saveAndHome')}</button>
      </div>
    </div>
    <div class="card">${filterHtml}</div>
    <div class="card">${itemsHtml || `<p style="color:var(--text-dim)">${t('noMatch')}</p>`}</div>
  `;
}

function setSelfGrade(qid, grade) { state.exam.selfGrades[qid] = grade; render(); }

function saveAndGoHome() {
  const { score, total, passed } = computeScore(state.exam);
  saveHistoryEntry({ date: Date.now(), score, questionCount: total, passed });
  goHome();
}

// ---------- Practice mode ----------

function goPracticeConfig() {
  state = { view: 'practiceConfig' };
  render();
}

function renderPracticeConfig() {
  const topics = [...new Set(QUESTIONS.map((q) => q.topic))].sort((a, b) => String(a).localeCompare(String(b)));
  app.innerHTML = `
    <div class="card">
      <h2>${t('freePracticeTitle')}</h2>
      <div class="grid-2">
        <div>
          <label>${t('domainFilterLabel')}</label>
          <select id="pTopic"><option value="all">${t('all')}</option>${topics.map((d) => `<option value="${escapeHtml(String(d))}">${escapeHtml(topicLabel(d))}</option>`).join('')}</select>
        </div>
        <div>
          <label>${t('order')}</label>
          <select id="pOrder"><option value="random">${t('random')}</option><option value="sequential">${t('byNumber')}</option></select>
        </div>
      </div>
      <label class="switch-row">
        <span>${t('flaggedOnly', flaggedSet.size)}</span>
        <input type="checkbox" id="pFlaggedOnly">
      </label>
      <div class="btn-row">
        <button class="primary" onclick="startPractice()">${t('start')}</button>
        <button class="ghost" onclick="goHome()">${t('cancel')}</button>
      </div>
    </div>`;
}

function startPractice() {
  const topic = document.getElementById('pTopic').value;
  const order = document.getElementById('pOrder').value;
  const flaggedOnly = document.getElementById('pFlaggedOnly').checked;

  let pool = QUESTIONS.filter((q) =>
    (topic === 'all' || String(q.topic) === topic) &&
    (!flaggedOnly || flaggedSet.has(q.id))
  );
  if (!pool.length) { alert(t('noMatch')); return; }
  pool = order === 'random' ? shuffle(pool) : [...pool].sort((a, b) => (a.number || 0) - (b.number || 0));
  pool = pool.map(shuffleChoices);

  state = {
    view: 'practice',
    practice: { pool, index: 0, revealed: {}, selected: {}, selfGraded: {}, interactiveAnswers: {}, correctCount: 0, wrongCount: 0 },
  };
  render();
}

function renderPractice() {
  const pr = state.practice;
  const q = pr.pool[pr.index];
  const revealed = pr.revealed[q.id];
  const sel = pr.selected[q.id] || [];

  let bodyHtml;
  if (q.interactive) {
    const iAns = pr.interactiveAnswers[q.id];
    bodyHtml = `${renderQuestionBody(q)}
      ${revealed
        ? renderInteractiveRevealed(q.interactive, iAns)
        : `${renderInteractiveEditable(q.id, q.interactive, iAns)}
           <div class="btn-row"><button class="primary" onclick="revealAnswer('${q.id}')" ${interactiveHasAnswer(iAns) ? '' : 'disabled'}>${t('validate')}</button></div>`}
    `;
  } else if (q.type === 'drag-drop' || q.type === 'hotspot') {
    bodyHtml = `${renderQuestionBody(q)}
      ${revealed
        ? `<p style="color:var(--text-dim);font-size:0.85rem;">${t('officialAnswer')}</p>${q.answerImage ? `<img src="${q.answerImage}" style="max-width:100%;border-radius:6px;">` : ''}`
        : `<div class="btn-row"><button class="primary" onclick="revealAnswer('${q.id}')">${t('showAnswer')}</button></div>`}
    `;
  } else {
    const multi = q.type === 'multi-select';
    const off = q.correctLetters || [];
    const choicesHtml = q.choices.map((c) => {
      const isSel = sel.includes(c.letter);
      let cls = isSel ? 'selected' : '';
      if (revealed) {
        if (off.includes(c.letter)) cls = 'correct';
        else if (isSel) cls = 'incorrect';
      }
      const clickHandler = revealed ? '' : `onclick="practiceToggleChoice('${q.id}','${c.letter}', ${multi})"`;
      return `<li class="choice ${cls}" ${clickHandler}>
        <input type="${multi ? 'checkbox' : 'radio'}" ${isSel ? 'checked' : ''} readonly>
        <span class="letter">${c.letter}.</span><span>${escapeHtml(qChoiceText(c))}</span>
      </li>`;
    }).join('');
    bodyHtml = `${renderQuestionBody(q)}
      ${multi ? `<p style="color:var(--text-dim);font-size:0.85rem;">${t('multiAnswerHint')}</p>` : ''}
      <ul class="choices">${choicesHtml}</ul>
      ${!revealed ? `<div class="btn-row"><button class="primary" onclick="revealAnswer('${q.id}')" ${sel.length === 0 ? 'disabled' : ''}>${t('validate')}</button></div>` : ''}
    `;
  }

  let feedbackHtml = '';
  if (revealed) {
    let isCorrect = null;
    if (q.interactive) {
      isCorrect = interactiveIsCorrect(q.interactive, pr.interactiveAnswers[q.id]);
    } else if (q.type !== 'drag-drop' && q.type !== 'hotspot') {
      const selSorted = sel.slice().sort().join('');
      const offSorted = (q.correctLetters || []).slice().sort().join('');
      isCorrect = selSorted === offSorted;
    }

    let selfGradeHtml = '';
    if (!q.interactive && (q.type === 'drag-drop' || q.type === 'hotspot')) {
      selfGradeHtml = pr.selfGraded[q.id]
        ? `<p class="${pr.selfGraded[q.id] === 'correct' ? 'badge-pass' : 'badge-fail'}">${pr.selfGraded[q.id] === 'correct' ? t('youWereRight') : t('youWereWrong')}</p>`
        : `<div class="btn-row"><button onclick="practiceSelfGrade('${q.id}',true)">${t('iWasRight')}</button><button onclick="practiceSelfGrade('${q.id}',false)">${t('iWasWrong')}</button></div>`;
    }

    feedbackHtml = `<div class="feedback-box ${isCorrect === true ? 'ok' : (isCorrect === false ? 'ko' : '')}">
      <p class="feedback-title">${isCorrect === true ? t('goodAnswer') : (isCorrect === false ? t('badAnswer') : '')}</p>
      ${renderCommunityBlock(q)}
      ${selfGradeHtml}
    </div>`;
  }

  app.innerHTML = `
    <div class="card">
      <div class="toolbar">
        <span class="topic-pill">${topicLabel(q.topic)}</span>
        <span class="topic-pill">${t('question')} ${pr.index + 1} / ${pr.pool.length}</span>
        <span class="topic-pill score-pill"><span class="count-correct">${pr.correctCount}</span> / <span class="count-wrong">${pr.wrongCount}</span></span>
        <button class="ghost flag-toggle ${flaggedSet.has(q.id) ? 'is-flagged' : ''}" onclick="toggleFlag('${q.id}')">${flaggedSet.has(q.id) ? t('unflagBtn') : t('flagBtn')}</button>
      </div>
      ${bodyHtml}
      ${feedbackHtml}
      <div class="btn-row">
        <button class="btn-prev" onclick="gotoPracticeQuestion(${pr.index - 1})" ${pr.index === 0 ? 'disabled' : ''}>${t('prev')}</button>
        <button class="btn-next" onclick="gotoPracticeQuestion(${pr.index + 1})" ${pr.index === pr.pool.length - 1 ? 'disabled' : ''}>${t('next')}</button>
        <button class="ghost" onclick="goHome()" style="margin-left:auto">${t('quit')}</button>
      </div>
    </div>
  `;
}

function practiceToggleChoice(qid, letter, multi) {
  const pr = state.practice;
  const current = pr.selected[qid] || [];
  pr.selected[qid] = multi
    ? (current.includes(letter) ? current.filter((l) => l !== letter) : [...current, letter])
    : [letter];
  render();
}

function revealAnswer(qid) {
  const pr = state.practice;
  pr.revealed[qid] = true;
  const q = pr.pool.find((x) => x.id === qid);
  if (q.interactive) {
    if (interactiveIsCorrect(q.interactive, pr.interactiveAnswers[qid])) pr.correctCount++; else pr.wrongCount++;
  } else if (q.type !== 'drag-drop' && q.type !== 'hotspot') {
    const sel = (pr.selected[qid] || []).slice().sort().join('');
    const off = (q.correctLetters || []).slice().sort().join('');
    if (sel === off) pr.correctCount++; else pr.wrongCount++;
  }
  render();
}

function practiceSelfGrade(qid, isCorrect) {
  const pr = state.practice;
  if (pr.selfGraded[qid]) return;
  pr.selfGraded[qid] = isCorrect ? 'correct' : 'incorrect';
  if (isCorrect) pr.correctCount++; else pr.wrongCount++;
  render();
}

function gotoPracticeQuestion(i) {
  const pr = state.practice;
  if (i < 0 || i >= pr.pool.length) return;
  pr.index = i;
  render();
}

// ---------- Init ----------

document.addEventListener('DOMContentLoaded', () => {
  renderLangToggle();
  renderThemeToggle();
  themeToggleEl.addEventListener('click', toggleTheme);
  if (typeof QUESTIONS === 'undefined' || !QUESTIONS.length) {
    app.innerHTML = `<div class="card"><h2>${t('noQuestionsLoaded')}</h2>
      <p>${t('questionsDataUnavailable')}</p></div>`;
    return;
  }
  goHome();
});
