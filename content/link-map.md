# SEIS 201 / ACMEJOB — canonical Curriculum UI link map

This file is the checked-in allowlist for the learner and instructor shells.
It was supplied by the Curriculum builder and verified against upstream on
2026-09-20 (`main` at `e35e6e8`; PR #5 at `fbeed80`; PR #7 at `814e11a`).
Runtime student constants live in `src/data/linkMap.ts`; gated instructor
constants live only in `api/instructor.ts`.

## Brand lock

This is ACMEJOB.Ai, not Stone Arch Collective:

- Girder Blue `#1F3A5F`: people, structure, headings.
- Sticker Orange `#F26B1D`: `.Ai`, FOREMAN, and machine output.
- Orange means a machine said it; blue means a person said it.

## Chapter lock

| ID | Chapter | Meetings | Storyline |
|---|---|---:|---|
| `01-hired` | Hired | M01–M06 | First days, measurement, generation, distributions, first checks |
| `02-doubt` | Doubt | M07–M14 | Bias, correlation, false precision, dashboards, pipelines, Exam 1 |
| `03-build` | Build | M15–M20 | Python, vibe coding, tests, verification, debugging |
| `04-own` | Own | M21–M23 | Iterative design, reusable tools, research and recommendations |
| `05-sign` | Sign | M24–M28 + finals | Risk, PE responsibility, limits, briefing, exam and reflection |

## STUDENT allowlist

Only these resources may be linked from the learner shell.

### Orientation

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/02-M01-first-day/M01-slides-first-day.pptx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/01-BRAND-KIT/ACMEJOB-brand-kit.zip`

The upstream course `README.md` is explicitly excluded from the learner shell:
it contains M02 outcome and reveal language. The in-app hero and job board are
the spoiler-clean course landing.

### M02

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/split-m02-decks-9d5e/teaching-pack/03-M02-measurement/M02-student.pptx`

This remains pinned to PR #5 branch `cursor/split-m02-decks-9d5e` until merge.
Main’s combined `M02-slides-measurement.pptx` is forbidden.

### Case B student packet

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.md`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/sensors_startup.csv`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/FOREMAN_PASS_report.md`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/install_startup_note.md`

### Bridge visuals

Keep all embedded schematic and fictional-site disclaimers visible.

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-lift-bridge-flat-claude.png`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-general-elevation.png`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-site-location.png`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-location-map.png`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-strain-gauge-array.png`

## INSTRUCTOR allowlist

These URLs may be returned only by the password-gated server function.

### Run of day

These browser-rendered links use `htmlpreview.github.io` because the teaching
pack does not have GitHub Pages enabled and its raw/jsDelivr HTML responses use
`text/plain`. They remain pinned to PR #7 branch
`cursor/instructor-run-of-day-4604` until that PR merges; then change the raw
ref inside each preview URL to `main`.

- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/instructor-run-of-day-4604/teaching-pack/00-INSTRUCTOR/run-of-day/index.html`
- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/instructor-run-of-day-4604/teaching-pack/00-INSTRUCTOR/run-of-day/M01-run-of-day.html`
- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/instructor-run-of-day-4604/teaching-pack/00-INSTRUCTOR/run-of-day/M02-run-of-day.html`
- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/instructor-run-of-day-4604/teaching-pack/00-INSTRUCTOR/run-of-day/M03-run-of-day.html`

### Reveal and keys

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/split-m02-decks-9d5e/teaching-pack/03-M02-measurement/M02-instructor-reveal.pptx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/02-M01-first-day/KEY-M01-answer-key.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/03-M02-measurement/KEY-M02-answer-key.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/04-M03-hallucination/KEY-M03-answer-key.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/instructor/INSTRUCTOR_KEY.md`

### FOREMAN spoilers

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/02-M01-first-day/H1-03-foreman-deck-assessment.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/03-M02-measurement/H2-03-foreman-baseline-check.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/04-M03-hallucination/H3-02-foreman-spec-summary.docx`

### Run sheets and notes

- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/00-INSTRUCTOR/INSTRUCTOR-GUIDE-M01-M03.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/00-INSTRUCTOR/FILE-INDEX.docx`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/00-INSTRUCTOR/BRIDGE-VISUALS.txt`
- `https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/README.txt`

## DO NOT surface

The learner shell must not link, preview, index, or search-display:

- the M02 instructor reveal;
- any `KEY`, `INSTRUCTOR`, `REVEAL`, `answer-key`, `speaker-notes`, or `spoiler` path;
- H1-03, H2-03, or H3-02;
- any `teaching-pack/00-INSTRUCTOR/` path;
- the Case B instructor key;
- the upstream course `README.md`;
- main’s combined `M02-slides-measurement.pptx`.

Case B’s student `FOREMAN_PASS_report.md` is intentionally public.
