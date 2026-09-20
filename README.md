# SEIS 201 · ACMEJOB.Ai curriculum UI

Learner and instructor shells for the continuous Otter Bend Lift Bridge
simulation. The interface is config-driven and links directly to the public
[teaching pack](https://github.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation).

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

Edit `src/content.ts`:

1. Add a `Meeting` object to the appropriate unit.
2. Use repository-relative paths for each student-safe asset.
3. Set `view: true` for browser-readable GitHub pages; omit it for direct
   downloads.
4. Never add `KEY-*`, `00-INSTRUCTOR`, or instructor-folder paths to this file.
5. Add restricted links to `api/instructor.ts` instead.

Unit layout, progression, and file cards are rendered from this map, so later
meetings require no component redesign.

## Checks

```bash
npm run check
npm run build
```
