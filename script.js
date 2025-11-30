// script.js

let questions = [];
let questionSets = [];
let activeSet = null;

// Get DOM Elements
const questionsEl = document.querySelector("#questions");
const timerEl = document.querySelector("#timer");
const choicesEl = document.querySelector("#options");
const submitBtn = document.querySelector("#submit-score");
const startBtn = document.querySelector("#start");
const nameEl = document.querySelector("#name");
const feedbackEl = document.querySelector("#feedback");
const questionSetSelect = document.querySelector("#question-set");
const questionSetMeta = document.querySelector("#question-set-meta");
const questionProgressEl = document.querySelector("#question-progress");
const progressBarEl = document.querySelector("#progress-bar");
const metaTitleEl = document.querySelector("#meta-title");
const metaGradeEl = document.querySelector("#meta-grade");
const metaTimeEl = document.querySelector("#meta-time");
const metaPenaltyEl = document.querySelector("#meta-penalty");
const chipIndexEl = document.querySelector("#chip-index");

// Quiz state
let currentQuestionIndex = 0;
let WRONG_ANSWER_PENALTY = 15;
let TIME_PER_QUESTION = 60;
const MIN_NAME_LENGTH = 2;
let score = 0;
let correctCount = 0;
let scorePerQuestion = 0;
let time = questions.length * TIME_PER_QUESTION;
let timerId;
let isQuizActive = false;

// Utility
function formatGradeTest(grade, test) {
  const gradeLabel = grade ? `${grade} synp` : "Belli däl";
  const testLabel = test ? `Test ${test}` : "-";
  return `${gradeLabel} • ${testLabel}`;
}

// Normalize question sets to avoid unusable/empty entries
function normalizeQuestionSets(rawSets) {
  if (!Array.isArray(rawSets)) return [];

  return rawSets
    .map((set) => {
      const analysis = {
        total: 0,
        missingOptions: 0,
        missingAnswer: 0,
        autoFilledAnswers: 0,
      };

      const normalizedQuestions = Array.isArray(set.questions)
        ? set.questions
            .map((question) => {
              analysis.total += 1;
              const prompt =
                typeof question.prompt === "string" ? question.prompt.trim() : "";
              const options = Array.isArray(question.options)
                ? Array.from(
                    new Set(
                      question.options
                        .map((opt) => (typeof opt === "string" ? opt.trim() : ""))
                        .filter(Boolean)
                    )
                  )
                : [];

              if (!options.length) {
                analysis.missingOptions += 1;
              }

              let answer =
                typeof question.answer === "string" && question.answer.trim()
                  ? question.answer.trim()
                  : null;

              if (options.length) {
                if (!answer) {
                  analysis.missingAnswer += 1;
                  answer = options[0];
                } else if (!options.includes(answer)) {
                  analysis.autoFilledAnswers += 1;
                  answer = options[0];
                }
              }

              return {
                ...question,
                prompt,
                options,
                answer,
              };
            })
            .filter((q) => q.prompt && (q.options.length || q.answer))
        : [];

      return {
        ...set,
        analysis,
        questions: normalizedQuestions,
      };
    })
    .filter((set) => set.questions.length);
}

function sortQuestionSets(sets) {
  const numericValue = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : Number.POSITIVE_INFINITY;
  };

  return [...sets].sort((a, b) => {
    const gradeDiff = numericValue(a.grade) - numericValue(b.grade);
    if (gradeDiff !== 0) return gradeDiff;

    const prefixA = (a.prefix || "").toLowerCase();
    const prefixB = (b.prefix || "").toLowerCase();
    if (prefixA !== prefixB) return prefixA.localeCompare(prefixB);

    const testA = (a.test || "").toString().toLowerCase();
    const testB = (b.test || "").toString().toLowerCase();
    return testA.localeCompare(testB);
  });
}

function computeTimingConfig(grade, questionCount) {
  const numericGrade = Number(grade);
  let perQuestion = 60;

  if (Number.isFinite(numericGrade)) {
    if (numericGrade <= 3) {
      perQuestion = 75;
    } else if (numericGrade <= 6) {
      perQuestion = 60;
    } else if (numericGrade <= 9) {
      perQuestion = 50;
    } else {
      perQuestion = 45;
    }
  }

  // Clamp lower bound to keep pace lively for small tests
  perQuestion = Math.max(30, perQuestion);
  const penalty = Math.max(10, Math.round(perQuestion * 0.25));
  const totalTime = Math.max(questionCount * perQuestion, perQuestion);

  return { perQuestion, penalty, totalTime };
}

function updateMetaCards({
  title = "Saýlanmady",
  grade,
  test,
  perQuestion = 0,
  penalty = 0,
} = {}) {
  metaTitleEl.textContent = title || "Saýlanmady";
  metaGradeEl.textContent = formatGradeTest(grade, test);
  metaTimeEl.textContent = `${perQuestion} sek`;
  metaPenaltyEl.textContent = `-${penalty} sek`;
}

// Load question sets from generated bank
async function loadQuestionBank() {
  // Minimal backup data so the app still works if remote files fail to load
  const fallbackQuestionBank = [
    {
      title: "Ätiýaç toplumy",
      grade: "4",
      test: "A",
      prefix: "Demo",
      subject: "Matematika",
      questions: [
        {
          prompt: "2 + 2 = ?",
          options: ["3", "4", "5"],
          answer: "4",
        },
        {
          prompt: "5 × 3 = ?",
          options: ["8", "15", "53"],
          answer: "15",
        },
      ],
    },
  ];

  questionSetSelect.innerHTML = "<option>Ýüklenýär...</option>";
  questionSetMeta.textContent = "Synag toplumy ýüklenerkä garaşyň.";
  questionSetSelect.disabled = true;
  startBtn.disabled = true;

  const useQuestionData = (data, sourceLabel = "") => {
    if (!Array.isArray(data) || !data.length) {
      questionSetSelect.innerHTML = "<option>Ýüklemekde säwlik</option>";
      questionSetMeta.textContent =
        "Soraglar ýüklenerkä ýalňyşlyk ýüze çykdy. Täzeden synanyşyň.";
      updateProgressLabel();
      return;
    }

    questionSets = sortQuestionSets(normalizeQuestionSets(data));

    if (!questionSets.length) {
      questionSetSelect.innerHTML = "<option>Sorag tapylmady</option>";
      questionSetMeta.textContent =
        "Ulanylyp bilinjek sorag toplumy tapylmady. Çeşmäňizi barlaň.";
      startBtn.disabled = true;
      updateProgressLabel();
      return;
    }

    populateQuestionSelector();
    questionSetSelect.disabled = false;
    questionSetMeta.textContent = `${questionSets.length} sany synag toplumy elýeterli. Birini saýlaň.`;

    if (sourceLabel) {
      questionSetMeta.textContent = `${questionSetMeta.textContent} • Çeşme: ${sourceLabel}`;
    }
  };

  // Preferred inline bank injected via question-bank.js to avoid fetch/CORS issues
  if (Array.isArray(window.questionBankData) && window.questionBankData.length) {
    useQuestionData(window.questionBankData, "JS");
    return;
  }

  try {
    const response = await fetch("./question-bank.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data) && data.length) {
      useQuestionData(data, "JSON");
      return;
    }
  } catch (error) {
    console.error("Sorag bazasyny JSON arkaly ýüklemekde säwlik: ", error);
  }

  // Final fallback: built-in demo questions so UI never stays empty
  useQuestionData(fallbackQuestionBank, "Ätiýaç");
}

function populateQuestionSelector() {
  questionSetSelect.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = "Synag toplumy saýlaň";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  questionSetSelect.appendChild(placeholderOption);

  questionSets.forEach((set, index) => {
    const option = document.createElement("option");
    const labelParts = [];
    if (set.grade) labelParts.push(`${set.grade} synp`);
    if (set.test) labelParts.push(`Test ${set.test}`);
    const totalQuestions = set.questions?.length || 0;
    option.value = index;
    option.textContent = labelParts.length
      ? `${set.prefix || "Toplum"} – ${labelParts.join(" • ")}`
      : set.title;
    option.textContent = `${option.textContent} • ${totalQuestions} sorag`;
    questionSetSelect.appendChild(option);
  });
}

function applySelectedSet() {
  const selection = questionSetSelect.value;

  if (selection === "") {
    questions = [];
    activeSet = null;
    questionSetMeta.textContent = "Synag toplumyndan birini saýlaň.";
    startBtn.disabled = true;
    timerEl.textContent = 0;
    updateMetaCards();
    updateProgressLabel();
    syncProgressBar();
    return;
  }

  const numericSelection = Number(selection);
  const set = questionSets[numericSelection];
  if (!set) {
    questions = [];
    questionSetMeta.textContent = "Soraglar tapylmady.";
    startBtn.disabled = true;
    timerEl.textContent = 0;
    updateMetaCards();
    updateProgressLabel();
    return;
  }
  activeSet = set;
  questions = (set.questions || []).filter((q) => q.prompt);
  currentQuestionIndex = 0;
  const timing = computeTimingConfig(set.grade, questions.length);
  TIME_PER_QUESTION = timing.perQuestion;
  WRONG_ANSWER_PENALTY = timing.penalty;
  time = timing.totalTime;
  scorePerQuestion = questions.length ? Math.max(1, Math.round(100 / questions.length)) : 0;
  timerEl.textContent = time || 0;
  startBtn.disabled = !questions.length;
  updateMetaCards({
    title: set.subject || set.title,
    grade: set.grade,
    test: set.test,
    perQuestion: TIME_PER_QUESTION,
    penalty: WRONG_ANSWER_PENALTY,
  });
  const analysis = activeSet.analysis || {
    total: activeSet.questions.length,
    missingOptions: 0,
    missingAnswer: 0,
    autoFilledAnswers: 0,
  };

  const adjustedTotal = analysis.total;
  const droppedCount = adjustedTotal - activeSet.questions.length;
  const issueSummaries = [];

  if (analysis.missingOptions) {
    issueSummaries.push(`Hiç bolmanda bir saýlawy bolmadyk: ${analysis.missingOptions}`);
  }
  if (analysis.missingAnswer) {
    issueSummaries.push(`Jogapsyz: ${analysis.missingAnswer}`);
  }
  if (analysis.autoFilledAnswers) {
    issueSummaries.push(`Jogap saýlaw bilen deňeşdirilip düzedildi: ${analysis.autoFilledAnswers}`);
  }
  if (droppedCount > 0) {
    issueSummaries.push(`Düzgünsizligi sebäpli çykarylan: ${droppedCount}`);
  }

  const issueText = issueSummaries.length
    ? ` • Hil deslapky gözden geçirme: ${issueSummaries.join("; ")}`
    : "";

  questionSetMeta.textContent = `${
    set.subject || set.title
  } • Synp: ${set.grade || "belli däl"} • Test: ${set.test || "-"} • Sorag sany: ${
    questions.length
  } • Her soraga: ${TIME_PER_QUESTION} sek • Nädogry üçin: -${WRONG_ANSWER_PENALTY} sek${issueText}`;
  updateProgressLabel();
  syncProgressBar();
}

// Start quiz and hide frontpage
function quizStart() {
  if (!questions.length) {
    alert("Sorag toplumy ýüklendi diýip hasaplanylmaýar.");
    return;
  }
  currentQuestionIndex = 0;
  const timing = computeTimingConfig(activeSet?.grade, questions.length);
  TIME_PER_QUESTION = timing.perQuestion;
  WRONG_ANSWER_PENALTY = timing.penalty;
  time = timing.totalTime;
  score = 0;
  correctCount = 0;
  scorePerQuestion = questions.length ? Math.max(1, Math.round(100 / questions.length)) : 0;
  timerEl.textContent = time;
  startBtn.disabled = true;
  questionSetSelect.disabled = true;
  isQuizActive = true;
  timerId = setInterval(clockTick, 1000);
  const landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  updateProgressLabel();
  syncProgressBar();
  getQuestion();
}

// Loop through array of questions and create list with buttons
function getQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const promptEl = document.getElementById("question-words");
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  (currentQuestion.options || ["Jogap berilmedi"]).forEach(function (
    choice,
    i
  ) {
    const choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = `${i + 1}. ${choice}`;
    choiceBtn.onclick = questionClick;
    choicesEl.appendChild(choiceBtn);
  });
  updateProgressLabel();
  syncProgressBar();
}

// Check for right answers and deduct time for wrong answer
function questionClick() {
  if (!isQuizActive) return;

  const answer = questions[currentQuestionIndex].answer;
  const hasAnswer = Boolean(answer);
  const isCorrect = hasAnswer && this.value === answer;

  if (!hasAnswer) {
    showFeedback("Jogaplar maglumat üçin berilýär.", "neutral");
  } else if (!isCorrect) {
    time -= WRONG_ANSWER_PENALTY;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    showFeedback(`Nädogry! Dogry jogap: ${answer}`, "error");
  } else {
    correctCount += 1;
    score += scorePerQuestion;
    showFeedback("Jogap dogry!", "success");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// Render feedback with visual status classes
function showFeedback(message, status) {
  const icons = {
    success: "✓",
    error: "✕",
    neutral: "ℹ",
  };
  feedbackEl.textContent = `${icons[status] || ""} ${message}`.trim();
  feedbackEl.className = "feedback";
  if (status === "success") {
    feedbackEl.classList.add("success");
  } else if (status === "error") {
    feedbackEl.classList.add("error");
  }
  setTimeout(function () {
    feedbackEl.className = "feedback hide";
  }, 2500);
}

// Finish quiz, stop timer, and surface final score
function quizEnd() {
  if (!isQuizActive) return;
  isQuizActive = false;
  clearInterval(timerId);
  const landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.className = "landing";
  const endScreenEl = document.getElementById("quiz-end");
  endScreenEl.removeAttribute("class");
  const finalScoreEl = document.getElementById("score-final");
  const totalQuestions = questions.length || 1;
  const percentScore = Math.round((correctCount / totalQuestions) * 100);
  const cappedScore = Math.min(score, scorePerQuestion * totalQuestions);
  const finalScore = Math.max(percentScore, cappedScore);
  score = finalScore;
  finalScoreEl.textContent = `${finalScore} bal • Dogry: ${correctCount}/${totalQuestions} • Galan wagt: ${time} sek`;
  questionsEl.setAttribute("class", "hide");
  startBtn.disabled = false;
  questionSetSelect.disabled = false;
  updateProgressLabel(true);
  syncProgressBar(true);
}

// Stop when timer hits 0
function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    time = 0;
    quizEnd();
  }
}

// Save scores alongside a name in localStorage
function saveHighscore() {
  const name = nameEl.value.trim();
  if (name.length < MIN_NAME_LENGTH) {
    alert("Adyňyz 2 harpdan gysga bolmaly däl.");
    return;
  }

  if (name.length > nameEl.maxLength) {
    alert(
      "Adyňyz gysga bolmaly. Uzaklygy: " + nameEl.maxLength + " harpdan köp bolmasyn."
    );
    return;
  }

  const highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  const newScore = {
    score: score,
    correct: correctCount,
    total: questions.length,
    timeLeft: time,
    setTitle: activeSet?.title || "Belli däl",
    name: name,
  };
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  alert(name + " Siziň balyňyz ýatda saklandy");
}

// Update status bar label and progress indicator
function updateProgressLabel(isFinished = false) {
  if (!questions.length) {
    questionProgressEl.textContent = "Synag toplumy saýlanmady.";
    chipIndexEl.textContent = "0/0";
    return;
  }

  if (isFinished) {
    questionProgressEl.textContent = "Netije taýýar!";
    chipIndexEl.textContent = `${questions.length}/${questions.length}`;
    return;
  }

  const total = questions.length;
  const current = Math.min(currentQuestionIndex + 1, total);
  questionProgressEl.textContent = `Sorag ${current}/${total}`;
  chipIndexEl.textContent = `${current}/${total}`;
}

function syncProgressBar(forceComplete = false) {
  if (!questions.length) {
    progressBarEl.style.width = "0%";
    return;
  }
  const progress = forceComplete
    ? 100
    : Math.min((currentQuestionIndex / questions.length) * 100, 100).toFixed(2);
  progressBarEl.style.width = `${progress}%`;
}

// Save users' score after pressing enter
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit
submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz
startBtn.onclick = quizStart;

questionSetSelect.onchange = applySelectedSet;

loadQuestionBank();
