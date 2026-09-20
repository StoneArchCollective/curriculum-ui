# SEIS 201 · ACMEJOB.Ai curriculum UI

Learner and instructor shells for the continuous Otter Bend Lift Bridge
simulation. The interface is config-driven and links directly to the public
[teaching pack](https://github.com/Stone-Arch-Collective/Design-and-AI).

## Run locally

Requires Node 20.19+.

```bash
npm install
npm run dev
```

The student shell works with Vite alone. To test the instructor serverless
function locally, install the Vercel CLI and run:

```bash
INSTRUCTOR_PASSWORD=your-local-password vercel dev
```

If `INSTRUCTOR_PASSWORD` is omitted outside Vercel, the development-only
fallback is `otterbend-local`. A deployed app has no fallback: instructor access
returns unavailable until the environment variable is configured.

## Deploy to Vercel

Import the repository as a Vite project, then add `INSTRUCTOR_PASSWORD` to the
Production and Preview environments. The included `vercel.json` routes
`/instructor` to the app while `/api/instructor` validates the password on the
server. Instructor URLs are returned only after successful authentication and
are not embedded in the student JavaScript bundle.

This is a lightweight course-material gate, not user-account authentication.
The upstream teaching pack remains a public repository.

## Add or update a meeting

Start with `content/link-map.md`, the Curriculum builder’s canonical allowlist:

1. Add an approved public URL to `src/data/linkMap.ts`.
2. Add the `Meeting` object to the appropriate unit in `src/content.ts`.
3. The runtime allowlist rejects student assets that are not in the canonical map.
4. Never add `KEY`, `INSTRUCTOR`, `REVEAL`, `answer-key`, `speaker-notes`, or
   `spoiler` paths to client code.
5. Add approved restricted links to `api/instructor.ts` instead; they are
   returned only after password verification.

Unit layout, progression, and file cards are rendered from this map, so later
meetings require no component redesign.

## Checks

```bash
npm run check
npm run build
```
