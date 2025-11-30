const gradeSelect = document.getElementById('grade-select');
const testSelect = document.getElementById('test-select');
const questionsEl = document.getElementById('questions');
const resultsEl = document.getElementById('results');
const metaEl = document.getElementById('test-meta');
const rawTextEl = document.getElementById('raw-text');
const teacherBtn = document.getElementById('teacher-toggle');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const modeLabel = document.getElementById('mode-label');
const coveragePill = document.getElementById('coverage-pill');
const questionCount = document.getElementById('question-count');
const statTests = document.getElementById('stat-tests');
const statQuestions = document.getElementById('stat-questions');
const statGrades = document.getElementById('stat-grades');

let data = { tests: [] };
let activeTest = null;
let teacherMode = false;
let answers = {};
let answerKeys = {};

function loadState() {
  const storedAnswers = localStorage.getItem('studentAnswers');
  const storedKeys = localStorage.getItem('answerKeys');
  answers = storedAnswers ? JSON.parse(storedAnswers) : {};
  answerKeys = storedKeys ? JSON.parse(storedKeys) : {};
  teacherMode = localStorage.getItem('teacherMode') === 'true';
  teacherBtn.classList.toggle('active', teacherMode);
  modeLabel.textContent = teacherMode ? 'Mugallym tertibi' : 'Okuwçy tertibi';
}

function saveState() {
  localStorage.setItem('studentAnswers', JSON.stringify(answers));
  localStorage.setItem('answerKeys', JSON.stringify(answerKeys));
  localStorage.setItem('teacherMode', teacherMode);
}

async function loadData() {
  const res = await fetch('data/tests.json');
  data = await res.json();
  updateStats();
  populateFilters();
}

function updateStats() {
  const allGrades = data.tests.map(t => t.grade).filter(g => g !== null && g !== undefined);
  const gradeCount = new Set(allGrades).size || '—';
  const questionTotal = data.tests.reduce((acc, test) => acc + (test.questions?.length || 0), 0) || '—';
  statTests.textContent = data.tests.length || '—';
  statQuestions.textContent = questionTotal;
  statGrades.textContent = gradeCount;
}

function populateFilters() {
  const grades = Array.from(new Set(data.tests.map(t => t.grade).filter(Boolean))).sort((a, b) => a - b);
  gradeSelect.innerHTML = grades.map(g => `<option value="${g}">${g}-nji synp</option>`).join('');
  if (grades.length) {
    gradeSelect.value = grades[0];
    populateTests();
  } else {
    gradeSelect.innerHTML = '<option disabled>Synp tapylmady</option>';
  }
}

function populateTests() {
  const selectedGrade = Number(gradeSelect.value);
  const tests = data.tests.filter(t => t.grade === selectedGrade);
  testSelect.innerHTML = tests.map(t => `<option value="${t.id}">${t.file}</option>`).join('');
  if (tests.length) {
    setActiveTest(tests[0].id);
  } else {
    activeTest = null;
    questionsEl.innerHTML = '<p class="muted">Bu synp boýunça test tapylmady.</p>';
    metaEl.innerHTML = '';
    questionCount.textContent = '0 sorag';
  }
}

gradeSelect.addEventListener('change', populateTests);
testSelect.addEventListener('change', () => setActiveTest(testSelect.value));

function setActiveTest(id) {
  activeTest = data.tests.find(t => t.id === id);
  if (!activeTest) return;
  testSelect.value = id;
  renderTest();
}

function renderTest() {
  const sections = activeTest.sections.length ? activeTest.sections.join(', ') : 'Bölüm ýok';
  metaEl.innerHTML = `
    <div class="pill subtle">Faýl: ${activeTest.file}</div>
    ${activeTest.variant ? `<div class="pill subtle">Wariant: ${activeTest.variant}</div>` : ''}
    <div class="pill subtle">Bölümler: ${sections}</div>
  `;

  rawTextEl.textContent = activeTest.rawText.join('\n');

  const savedAnswers = answers[activeTest.id] || {};
  const key = answerKeys[activeTest.id] || {};
  const totalQuestions = activeTest.questions.length;
  questionCount.textContent = `${totalQuestions} sorag`;
  updateCoveragePill(key, totalQuestions);

  questionsEl.innerHTML = activeTest.questions.map(q => {
    const options = q.options.length ? q.options : ['(Wariant tapylmady)'];
    const optsHtml = options.map((opt, idx) => {
      const checked = savedAnswers[q.number] === idx ? 'checked' : '';
      const correctClass = teacherMode && key[q.number] === idx ? 'correct' : '';
      const radio = teacherMode
        ? `<div class="option teacher ${correctClass}" data-q="${q.number}" data-opt="${idx}"><span class="badge">${String.fromCharCode(65 + idx)}</span><span>${opt}</span></div>`
        : `<label class="option ${correctClass}" for="q${q.number}-o${idx}"><input type="radio" name="q${q.number}" id="q${q.number}-o${idx}" value="${idx}" ${checked}> <span>${opt}</span></label>`;
      return radio;
    }).join('');

    return `
      <article class="question" data-number="${q.number}">
        <header>
          <h3>${q.number}. ${q.text}</h3>
        </header>
        <div class="options">${optsHtml}</div>
      </article>
    `;
  }).join('');
}

function updateCoveragePill(key, totalQuestions) {
  const coverage = Object.keys(key).length;
  if (!coverage) {
    coveragePill.textContent = 'Dogry jogaplar bellik edilmedi';
    coveragePill.classList.add('subtle');
  } else {
    coveragePill.textContent = `${coverage}/${totalQuestions} soragyň dogrysy bellendi`;
    coveragePill.classList.remove('subtle');
  }
}

function handleTeacherClick(e) {
  const option = e.target.closest('.option.teacher');
  if (!option || !teacherMode || !activeTest) return;
  const q = option.dataset.q;
  const opt = Number(option.dataset.opt);
  if (!answerKeys[activeTest.id]) answerKeys[activeTest.id] = {};
  answerKeys[activeTest.id][q] = opt;
  saveState();
  renderTest();
}

function handleStudentInput(e) {
  if (teacherMode || !activeTest) return;
  const radio = e.target;
  if (radio.name && radio.type === 'radio') {
    const qNum = radio.name.replace('q', '');
    if (!answers[activeTest.id]) answers[activeTest.id] = {};
    answers[activeTest.id][qNum] = Number(radio.value);
    saveState();
  }
}

function gradeTest() {
  if (!activeTest) return;
  const key = answerKeys[activeTest.id] || {};
  const response = answers[activeTest.id] || {};
  const total = activeTest.questions.length;
  let correct = 0;
  activeTest.questions.forEach(q => {
    if (key[q.number] !== undefined && response[q.number] === key[q.number]) {
      correct += 1;
    }
  });
  const coverage = Object.keys(key).length;
  const msg = coverage === 0
    ? 'Dogry jogaplar entek bellik edilmedi. Mugallym tertibinde belleň.'
    : `${correct} / ${total} dogry jogap (${Math.round((correct / total) * 100)}%). Bellik edilen soraglar: ${coverage}`;
  resultsEl.textContent = msg;
}

function resetAnswers() {
  if (activeTest) {
    answers[activeTest.id] = {};
    saveState();
    renderTest();
    resultsEl.textContent = '';
  }
}

function toggleTeacherMode() {
  teacherMode = !teacherMode;
  teacherBtn.classList.toggle('active', teacherMode);
  modeLabel.textContent = teacherMode ? 'Mugallym tertibi' : 'Okuwçy tertibi';
  saveState();
  renderTest();
  resultsEl.textContent = teacherMode ? 'Soraglaryň dogry wariantlaryny belläň.' : '';
}

questionsEl.addEventListener('click', handleTeacherClick);
questionsEl.addEventListener('change', handleStudentInput);
teacherBtn.addEventListener('click', toggleTeacherMode);
submitBtn.addEventListener('click', gradeTest);
resetBtn.addEventListener('click', resetAnswers);

loadState();
loadData();
