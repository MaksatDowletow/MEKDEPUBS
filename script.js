// script.js

let questions = [];
let questionSets = [];
let activeSet = null;

// Get Dom Elements

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");
let questionSetSelect = document.querySelector("#question-set");
let questionSetMeta = document.querySelector("#question-set-meta");

// Quiz's initial state
let currentQuestionIndex = 0;
const WRONG_ANSWER_PENALTY = 15;
let time = questions.length * 60;
let timerId;

// Load question sets from generated bank
async function loadQuestionBank() {
  try {
    const response = await fetch("./question-bank.json");
    const data = await response.json();
    questionSets = data;
    populateQuestionSelector();
    applySelectedSet();
    startBtn.disabled = false;
  } catch (error) {
    console.error("Sorag bazasyny ýüklemekde säwlik: ", error);
    questionSetSelect.innerHTML = "<option>Ýüklemekde säwlik</option>";
    startBtn.disabled = true;
  }
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
    return;
  }
  activeSet = set;
  questions = (set.questions || []).filter((q) => q.prompt);
  currentQuestionIndex = 0;
  time = questions.length * 60;
  questionSetMeta.textContent = `${set.subject} • Synp: ${
    set.grade || "belli däl"
  } • Test: ${set.test || "-"}`;
}

// Start quiz and hide frontpage

function quizStart() {
  if (!questions.length) {
    alert("Sorag toplumy ýüklendi diýip hasaplanylmaýar.");
    return;
  }
  currentQuestionIndex = 0;
  time = questions.length * 60;
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  let landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
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
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
  const answer = questions[currentQuestionIndex].answer;
  if (!answer) {
    feedbackEl.textContent = "Jogaplar maglumat üçin berilýär.";
    feedbackEl.style.color = "black";
  } else if (this.value !== answer) {
    time -= WRONG_ANSWER_PENALTY;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Nädogry! Dogry jogap:  " + answer;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Jogap dogry!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 3000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// Soraglary gizlemek bilen wiktorinany tamamlaň,
//taýmeri duruzyň we jemleýji balyňyzy görkeziň

function quizEnd() {
  clearInterval(timerId);
  let endScreenEl = document.getElementById("quiz-end");
  endScreenEl.removeAttribute("class");
  let finalScoreEl = document.getElementById("score-final");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

// Taýmer 0-a ýetýän bolsa, wiktorina gutar

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

// Ballary ulanyjylaryň ady bilen birlikde ýerli ammarda saklaň

function saveHighscore() {
  let name = nameEl.value.trim();
  if (name === "") {
    alert("Adyňyz boş bolmaly däl.");
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
