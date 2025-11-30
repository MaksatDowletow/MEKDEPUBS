// highScore.js

// “LocalStorage” -den bal alyp, öňki ballary tertipläň
function printHighscores() {
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  let list = document.getElementById("highscores");
  list.innerHTML = "";

  if (!highscores.length) {
    let empty = document.createElement("li");
    empty.textContent = "Ýatda saklanan netije ýok.";
    empty.setAttribute("aria-live", "polite");
    list.appendChild(empty);
    document.getElementById("clear").disabled = true;
    return;
  }

  document.getElementById("clear").disabled = false;
  highscores
    .sort(function (a, b) {
      if (b.score === a.score) {
        return (b.correct || 0) - (a.correct || 0);
      }
      return b.score - a.score;
    })
    .forEach(function (score, index) {
      let liTag = document.createElement("li");
      const safeName = score.name || "(At girizilmedi)";
      const safeScore = Number.isFinite(score.score) ? score.score : 0;
      const correct = Number.isFinite(score.correct) ? score.correct : "-";
      const total = Number.isFinite(score.total) ? score.total : "-";
      const timeLeft = Number.isFinite(score.timeLeft) ? score.timeLeft : 0;
      const setTitle = score.setTitle || "Toplum";
      liTag.textContent = `${index + 1}. ${safeName} - ${safeScore} bal • Dogry: ${correct}/${total} • Galan wagt: ${timeLeft} sek • ${setTitle}`;
      list.appendChild(liTag);
    });
}

// Clear previous scores when users click clear
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
document.getElementById("clear").onclick = clearHighscores;

printHighscores();
