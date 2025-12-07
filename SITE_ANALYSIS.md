# Site Analysis

## Overview
- **Purpose:** A browser-based multiple-choice quiz in Turkmen for school math, with a high-score board persisted to `localStorage`.
- **Entry point:** `index.html` renders the quiz start screen, question area, timer, and score submission form. JavaScript behavior is defined in `script.js`, and styling is loaded from `style.css`.
- **High scores:** `highscore.html` lists saved scores and allows clearing the list. Logic lives in `highScore.js`.

## Structure and Behavior
### index.html & script.js
- Start screen describes the rules and provides a **Start** button that triggers quiz logic in `script.js`.
- Questions are stored in a `questions` array of prompt/option/answer objects. The quiz displays each prompt, builds option buttons, and advances on click.
- Timer logic scales by grade: per-question time is computed (30–75 seconds) and the wrong-answer penalty is ~25% of that value, so pacing is less punishing.
- When the quiz ends (all questions answered or timer reaches 0), the final percentage score is shown and the user can submit a name.
- High scores are stored in `localStorage` as an array of `{ score, name }` objects. Enter key or the **Barla** button triggers saving with validation (2–20 characters).

### highscore.html & highScore.js
- On load, `highScore.js` reads scores from `localStorage`, sorts descending, and renders each as `name - score` in an ordered list.
- A **Sanawy arassala** button clears stored scores and reloads the page.

## Notable Issues
1. **Layout integrity:** The hero grid in `index.html` now includes a `.hero__text` wrapper, brand block, and a closing `.app-shell` container so the CSS grid renders correctly across viewports. Previously, the missing wrapper and closing tag collapsed the two-column layout.
2. **Accessibility improvements pending:** Core controls have labels and feedback includes text + icons, but further enhancements (e.g., focus outlines for the timer/progress elements) could make the experience sturdier for keyboard and screen-reader users.

## Recommendations
- Keep the hero/topbar wrappers in place to preserve the intended two-column grid.
- Continue iterating on accessibility by reviewing keyboard focus order and announcing quiz state changes beyond the existing aria-live regions.
