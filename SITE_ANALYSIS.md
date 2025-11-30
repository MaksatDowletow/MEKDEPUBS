# Site Analysis

## Overview
- **Purpose:** A browser-based multiple-choice quiz in Turkmen for 4th-grade math, with a high-score board persisted to `localStorage`.
- **Entry point:** `index.html` renders the quiz start screen, question area, timer, and score submission form. JavaScript behavior is defined in `script.js`. Styling is expected from `style.css`, but the repository only contains `Style.css`.
- **High scores:** `highscore.html` lists saved scores and allows clearing the list. Logic lives in `highScore.js`.

## Structure and Behavior
### index.html & script.js
- Start screen describes the rules and provides a **Start** button that triggers quiz logic in `script.js`.
- Questions are stored in a `questions` array of prompt/option/answer objects. The quiz displays each prompt, builds option buttons, and advances on click.
- Timer logic sets total time to `questions.length * 60` (60 seconds per question). Wrong answers subtract 60 seconds; correct answers continue without penalty.
- When the quiz ends (all questions answered or timer reaches 0), the final time is shown as the score and the user can submit a name.
- High scores are stored in `localStorage` as an array of `{ score, name }` objects. Enter key or the **Barla** button triggers saving.

### highscore.html & highScore.js
- On load, `highScore.js` reads scores from `localStorage`, sorts descending, and renders each as `name - score` in an ordered list.
- A **Sanawy arassala** button clears stored scores and reloads the page.

## Notable Issues
1. **Broken stylesheet link:** `index.html` and `highscore.html` reference `./style.css`, but the repository file is `Style.css`, so styles will not load on case-sensitive hosts.
2. **Severe penalty configuration:** Each wrong answer deducts 60 seconds while only 60 seconds are allotted per question. A single mistake can erase an entire question’s time, leading to negative UX and potentially ending the quiz abruptly.
3. **Minimal input validation:** Names are trimmed but not length-restricted in code (the HTML input allows unlimited characters despite `max` being misused), so long names can overflow the layout.
4. **Lack of accessibility touches:** Buttons lack ARIA labels beyond text, feedback messages rely solely on color (red/green), and the page has no language/charset meta tags on the main quiz page.

## Recommendations
- Rename or relink the stylesheet consistently (`style.css` vs `Style.css`) to ensure styling loads across environments.
- Calibrate timing: reduce wrong-answer penalties (e.g., 10–15 seconds) or decrease per-question time to match intended difficulty without causing instant failure.
- Enforce a reasonable name length in both HTML attributes and JavaScript before saving scores; consider rejecting empty names with user guidance.
- Add meta tags (`charset`, responsive viewport) to `index.html`, provide more descriptive button text/ARIA labels, and supplement color-based feedback with icons or text for better accessibility.
