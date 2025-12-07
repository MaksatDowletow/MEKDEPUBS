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

function formatSetLabel(score) {
  const subject = score.subject || score.setTitle || "Toplum";
  const tags = [];
  if (score.grade) tags.push(`${score.grade} synp`);
  if (score.test) tags.push(`Test ${score.test}`);
  return tags.length ? `${subject} • ${tags.join(" • ")}` : subject;
}

function createMetaItem(label, value) {
  const meta = document.createElement("span");
  meta.className = "score-meta__item";
  meta.textContent = `${label}: ${value}`;
  return meta;
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
    empty.className = "score-item score-empty";
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
        const correctDiff = (b.correct || 0) - (a.correct || 0);
        if (correctDiff !== 0) return correctDiff;
        return (b.timeLeft || 0) - (a.timeLeft || 0);
      }
      return b.score - a.score;
    })
    .forEach(function (score) {
      const liTag = document.createElement("li");
      liTag.className = "score-item";

      const safeName = score.name || "(At girizilmedi)";
      const safeScore = Number.isFinite(score.score) ? score.score : 0;
      const correct = Number.isFinite(score.correct) ? score.correct : "-";
      const total = Number.isFinite(score.total) ? score.total : "-";
      const timeLeft = Number.isFinite(score.timeLeft) ? score.timeLeft : 0;
      const setTitle = formatSetLabel(score);

      const header = document.createElement("div");
      header.className = "score-item__header";

      const titleGroup = document.createElement("div");
      const nameEl = document.createElement("p");
      nameEl.className = "score-item__name";
      nameEl.textContent = safeName;

      const subtitle = document.createElement("p");
      subtitle.className = "score-item__subtitle";
      subtitle.textContent = setTitle;
      titleGroup.append(nameEl, subtitle);

      const scoreBadge = document.createElement("span");
      scoreBadge.className = "score-badge";
      scoreBadge.textContent = `${safeScore} bal`;

      header.append(titleGroup, scoreBadge);

      const metaRow = document.createElement("div");
      metaRow.className = "score-meta";
      metaRow.append(
        createMetaItem("Dogry", `${correct}/${total}`),
        createMetaItem("Galan wagt", `${timeLeft} sek`),
        createMetaItem("Sanaw", score.savedAt ? new Date(score.savedAt).toLocaleDateString() : "-"),
        createMetaItem("Synp/Test", score.grade || score.test ? `${score.grade || "-"}/${score.test || "-"}` : "-" )
      );

      liTag.append(header, metaRow);
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
