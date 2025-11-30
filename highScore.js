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
      return b.score - a.score;
    })
    .forEach(function (score, index) {
      let liTag = document.createElement("li");
      const safeName = score.name || "(At girizilmedi)";
      const safeScore = Number.isFinite(score.score) ? score.score : 0;
      liTag.textContent = `${index + 1}. ${safeName} - ${safeScore} sek`;
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
