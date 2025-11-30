// script.js

let questions = [];
let questionSets = [];
let activeSet = null;

// Get DOM Elements
let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let questionSetSelect = document.querySelector("#question-set");
let questionSetMeta = document.querySelector("#question-set-meta");
let questionProgressEl = document.querySelector("#question-progress");
let progressBarEl = document.querySelector("#progress-bar");

// Quiz state
let currentQuestionIndex = 0;
const WRONG_ANSWER_PENALTY = 15;
const TIME_PER_QUESTION = 60;
const MIN_NAME_LENGTH = 2;
let time = questions.length * TIME_PER_QUESTION;
let timerId;
let isQuizActive = false;

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
  startBtn.disabled = true;

  const useQuestionData = (data, sourceLabel = "") => {
    questionSets = Array.isArray(data) ? data : [];

    if (!questionSets.length) {
      questionSetSelect.innerHTML = "<option>Ýüklemekde säwlik</option>";
      questionSetMeta.textContent =
        "Soraglar ýüklenerkä ýalňyşlyk ýüze çykdy. Täzeden synanyşyň.";
      updateProgressLabel();
      return;
    }

    populateQuestionSelector();
    applySelectedSet();

    if (sourceLabel) {
      questionSetMeta.textContent = `${questionSetMeta.textContent} • Çeşme: ${sourceLabel}`;
    }
  };

  try {
    const response = await fetch("./question-bank.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    if (Array.isArray(data) && data.length) {
      useQuestionData(data, "JSON");
      startBtn.disabled = false;
      return;
    }
  } catch (error) {
    console.error("Sorag bazasyny JSON arkaly ýüklemekde säwlik: ", error);
  }

  // Preferred inline bank injected via question-bank.js to avoid fetch/CORS issues
  if (Array.isArray(window.questionBankData) && window.questionBankData.length) {
    useQuestionData(window.questionBankData, "JS");
    startBtn.disabled = false;
    return;
  }

  // Final fallback: built-in demo questions so UI never stays empty
  useQuestionData(fallbackQuestionBank, "Ätiýaç");
  startBtn.disabled = false;
}

function populateQuestionSelector() {
  questionSetSelect.innerHTML = "";
  questionSets.forEach((set, index) => {
    const option = document.createElement("option");
    const labelParts = [];
    if (set.grade) labelParts.push(`${set.grade} synp`);
    if (set.test) labelParts.push(`Test ${set.test}`);
    option.value = index;
    option.textContent = labelParts.length
      ? `${set.prefix || "Toplum"} – ${labelParts.join(" • ")}`
      : set.title;
    questionSetSelect.appendChild(option);
  });
}

function applySelectedSet() {
  const selection = Number(questionSetSelect.value) || 0;
  const set = questionSets[selection];
  if (!set) {
    questions = [];
    questionSetMeta.textContent = "Soraglar tapylmady.";
    startBtn.disabled = true;
    timerEl.textContent = 0;
    updateProgressLabel();
    return;
  }
  activeSet = set;
  questions = (set.questions || []).filter((q) => q.prompt);
  currentQuestionIndex = 0;
  time = questions.length * TIME_PER_QUESTION;
  timerEl.textContent = time || 0;
  startBtn.disabled = !questions.length;
  questionSetMeta.textContent = `${set.subject} • Synp: ${
    set.grade || "belli däl"
  } • Test: ${set.test || "-"} • Sorag sany: ${questions.length}`;
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
  time = questions.length * TIME_PER_QUESTION;
  timerEl.textContent = time;
  startBtn.disabled = true;
  questionSetSelect.disabled = true;
  isQuizActive = true;
  timerId = setInterval(clockTick, 1000);
  let landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  updateProgressLabel();
  syncProgressBar();
  getQuestion();
}

// Loop through array of questions and create list with buttons
function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let promptEl = document.getElementById("question-words");
  promptEl.textContent = currentQuestion.prompt;
  choicesEl.innerHTML = "";
  (currentQuestion.options || ["Jogap berilmedi"]).forEach(function (
    choice,
    i
  ) {
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
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
  if (!answer) {
    showFeedback("Jogaplar maglumat üçin berilýär.", "neutral");
  } else if (this.value !== answer) {
    time -= WRONG_ANSWER_PENALTY;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    showFeedback("Nädogry! Dogry jogap:  " + answer, "error");
  } else {
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
  feedbackEl.textContent = message;
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
  let endScreenEl = document.getElementById("quiz-end");
  endScreenEl.removeAttribute("class");
  let finalScoreEl = document.getElementById("score-final");
  finalScoreEl.textContent = `${time} sek`;
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
  let name = nameEl.value.trim();
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

  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  let newScore = {
    score: time,
    name: name,
  };
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));
  alert(name + " Siziň balyňyz ýatda saklandy");
}

// Update status bar label and progress indicator
function updateProgressLabel(isFinished = false) {
  if (!questions.length) {
    questionProgressEl.textContent = "Sorag toplumy taýýar edilýär";
    return;
  }

  if (isFinished) {
    questionProgressEl.textContent = "Netije taýýar!";
    return;
  }

  const total = questions.length;
  const current = Math.min(currentQuestionIndex + 1, total);
  questionProgressEl.textContent = `Sorag ${current}/${total}`;
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
