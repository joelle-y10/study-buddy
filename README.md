# 🍁 StudyBuddy

A creative, aesthetic study web app for Canadian high schoolers, built on each **province's real curriculum**. Flashcards, adaptive quizzes, timed unit tests, full final-exam mode, a note-taking academy, a study calendar, and rich progress tracking — all in the browser, no account needed.

**Live site:** https://joelle-y10.github.io/studybuddy/

## Features

- **Province-aware curriculum** — pick your province and grade; your courses, units, learning outcomes, flashcards and questions follow that province's program of studies. **Alberta** and **British Columbia** are fully supported (BC's Physics 20-equivalent content really is different from Alberta's). Other provinces fall back to Alberta with a clear notice.
- **Grade sections** — select Grade 10, 11 or 12 and see exactly the courses for that level.
- **Course switcher** — toggle between Math, the Sciences (Physics, Chemistry, Biology), ELA, Social Studies and more.
- **Flashcards** — flip animation, shuffle, and Know / Still-learning sorting with a review-the-misses round.
- **Adaptive quizzes** — tell StudyBuddy what you're struggling with (free text like *"the tan function in triangles"* or concept chips) and it weights those concepts heavier and serves more of them until you improve. Every question explains *why*.
- **Unit tests** — longer, timed, exam-style, with a per-concept score breakdown.
- **Final exam mode** — "everything" mode pulling from all units, weighted toward your weak spots.
- **Self-rating** — rate your understanding 1–5 after each session; watch the trend on the Progress page.
- **Note-Taking Academy** — illustrated guides + templates for Cornell, mind maps, outline, charting, boxing and flow notes.
- **Study calendar** — add upcoming quizzes, tests and finals; the dashboard counts them down.
- **Progress tracking** — per-course and per-unit mastery bars, a concept heat map, rating trends, streaks and a struggle list you can tick off as you conquer topics.
- **Dark mode** and a mobile-friendly layout.

## Tech

React + TypeScript + Vite + Tailwind CSS v4. All progress is saved locally in your browser (localStorage) — nothing is uploaded.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Pages workflow in `.github/workflows/deploy.yml`. The Vite `base` is set to `/studybuddy/` for project-pages hosting.

## Adding curriculum content

Courses live in `src/data/courses/<province>/`. Each file exports a `Course` (see `src/types.ts`) and is registered in that province's `index.ts`. Questions and flashcards are tagged by `concept`, which is what powers the adaptive engine in `src/engine/adaptive.ts`.
