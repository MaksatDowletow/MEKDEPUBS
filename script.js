// script.js

let questions = [
  {
    prompt: "1337+244 ulumy yada 234+1347",
    options: ["1337+244", "1347+234", "deň"],
    answer: "deň",
  },
  {
    prompt: "1 t 5 sent ulumy yada 15 sent",
    options: ["1 t 5 sent", "15 sent", "deň"],
    answer: "deň",
  },
  {
    prompt: "2 manat 30 teňňe ulumy yada 233 teňňe",
    options: ["2 manat 30 teňňe", "deň", "233 teňňe"],
    answer: "233 teňňe",
  },
  {
    prompt: "1 sag 30 min kiçi yada 100",
    options: ["100", "den", "1 sag 30 min"],
    answer: "1 sag 30 min",
  },
  {
    prompt: "25*5= ",
    options: ["155", "125", "100", "65"],
    answer: "125",
  },
  {
    prompt: "108*9",
    options: ["1000", "874", "295", "972"],
    answer: "972",
  },
  {
    prompt: "4820*37",
    options: ["178340", "169067", "897456", "178240"],
    answer: "178340",
  },
  {
    prompt: "64/16",
    options: ["8", "44", "4", "5"],
    answer: "4",
  },
  {
    prompt: "315/4",
    options: ["87 (6 gal)", "78 (3 gal)", "78", "79 (10 gal)"],
    answer: "78 (3 gal)",
  },
  {
    prompt: "3150/70",
    options: ["45", "54", "42", "41"],
    answer: "45",
  },
  {
    prompt: "12350/50",
    options: ["237", "274", "247", "973"],
    answer: "247",
  },
  {
    prompt: "x+331=716 x-a derek aşakdakylardan haýsysyny goýmaly?",
    options: ["358", "385", "298", "259"],
    answer: "385",
  },
  {
    prompt: "x-224=765 x-a derek aşakdakylardan haýsysyny goýmaly?",
    options: ["1000", "899", "999", "989"],
    answer: "989",
  },
  {
    prompt: "x+509=605 x-a derek aşakdakylardan haýsysyny goýmaly?",
    options: ["99", "97", "96", "98"],
    answer: "96",
  },
  {
    prompt: "x-279=821 x-a derek aşakdakylardan haýsysyny goýmaly?",
    options: ["1000", "1100", "1111", "1210"],
    answer: "1100",
  },
];

// Get Dom Elements

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 60;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
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
  currentQuestion.options.forEach(function (choice, i) {
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
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 60;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent =
      "Nädogry! Dogry jogap:  " + questions[currentQuestionIndex].answer;
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
  if (name !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    let newScore = {
      score: time,
      name: name,
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    alert(name + " Siziň balyňyz ýatda saklandy");
  }
}

// Save users' score after pressing enter

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
    alert(" Siziň balyňyz ýatda saklandy");
  }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
