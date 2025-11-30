// highScore.js

function loadHighscores() {
  const stored = window.localStorage.getItem("highscores");
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Ýatda saklanan netije bozuldy, sanaw arassalanyp goýberiler.", error);
    window.localStorage.removeItem("highscores");
    return [];
  }
}

// “LocalStorage” -den bal alyp, öňki ballary tertipläň
function printHighscores() {
  const highscores = loadHighscores();
  const list = document.getElementById("highscores");
  const clearButton = document.getElementById("clear");
  const subtitleEl = document.getElementById("scores-subtitle");

  list.innerHTML = "";

  if (!highscores.length) {
    const empty = document.createElement("li");
    empty.textContent = "Ýatda saklanan netije ýok.";
    empty.setAttribute("aria-live", "polite");
    list.appendChild(empty);
    clearButton.disabled = true;
    subtitleEl.textContent = "Ýatda saklanan netije ýok.";
    return;
  }

  clearButton.disabled = false;
  subtitleEl.textContent = `${highscores.length} sany netije ýatda saklandy.`;

  highscores
    .sort(function (a, b) {
      if (b.score === a.score) {
        return (b.correct || 0) - (a.correct || 0);
      }
      return b.score - a.score;
    })
    .forEach(function (score) {
      const liTag = document.createElement("li");
      const safeName = score.name || "(At girizilmedi)";
      const safeScore = Number.isFinite(score.score) ? score.score : 0;
      const correct = Number.isFinite(score.correct) ? score.correct : "-";
      const total = Number.isFinite(score.total) ? score.total : "-";
      const timeLeft = Number.isFinite(score.timeLeft) ? score.timeLeft : 0;
      const setTitle = score.setTitle || "Toplum";
      liTag.textContent = `${safeName} - ${safeScore} bal • Dogry: ${correct}/${total} • Galan wagt: ${timeLeft} sek • ${setTitle}`;
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
