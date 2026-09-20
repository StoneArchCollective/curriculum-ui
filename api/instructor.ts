import { timingSafeEqual } from "node:crypto";

type ApiRequest = {
  method?: string;
  body?: { password?: unknown };
};

type ApiResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(body: unknown): void;
};

const RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/";
const PR5_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/split-m02-decks-9d5e/";
const PR7_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/cursor/instructor-run-of-day-4604/teaching-pack/00-INSTRUCTOR/run-of-day/";

const instructorGroups = [
  {
    title: "Run of day",
    note: "Browser-ready day plans from the instructor teaching pack.",
    links: [
      {
        label: "RUN OF DAY · CONTENTS",
        url: `${PR7_HTML}index.html`,
      },
      {
        label: "M01 · FIRST DAY",
        url: `${PR7_HTML}M01-run-of-day.html`,
      },
      {
        label: "M02 · MEASURE FIRST",
        url: `${PR7_HTML}M02-run-of-day.html`,
      },
      {
        label: "M03 · RUN OF DAY",
        url: `${PR7_HTML}M03-run-of-day.html`,
      },
    ],
  },
  {
    title: "Reveal + answer keys",
    note: "Spoiler-bearing decks and solutions for the currently built work.",
    links: [
      {
        label: "M02 instructor reveal · PR #5 branch",
        url: `${PR5_RAW}teaching-pack/03-M02-measurement/M02-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M01",
        url: `${RAW}teaching-pack/02-M01-first-day/KEY-M01-answer-key.docx`,
      },
      {
        label: "KEY · M02",
        url: `${RAW}teaching-pack/03-M02-measurement/KEY-M02-answer-key.docx`,
      },
      {
        label: "KEY · M03",
        url: `${RAW}teaching-pack/04-M03-hallucination/KEY-M03-answer-key.docx`,
      },
      {
        label: "Case B instructor key",
        url: `${RAW}teaching-pack/07-HW-CASE-B-LIFT-STATION/instructor/INSTRUCTOR_KEY.md`,
      },
    ],
  },
  {
    title: "FOREMAN spoilers",
    note: "Machine outputs held back from the learner shell.",
    links: [
      {
        label: "M01 FOREMAN deck assessment",
        url: `${RAW}teaching-pack/02-M01-first-day/H1-03-foreman-deck-assessment.docx`,
      },
      {
        label: "M02 FOREMAN baseline check",
        url: `${RAW}teaching-pack/03-M02-measurement/H2-03-foreman-baseline-check.docx`,
      },
      {
        label: "M03 FOREMAN specification summary",
        url: `${RAW}teaching-pack/04-M03-hallucination/H3-02-foreman-spec-summary.docx`,
      },
    ],
  },
  {
    title: "Run sheets + notes",
    note: "Instructor sequencing, file index, and bridge-use guidance.",
    links: [
      {
        label: "Instructor guide · M01–M03",
        url: `${RAW}teaching-pack/00-INSTRUCTOR/INSTRUCTOR-GUIDE-M01-M03.docx`,
      },
      {
        label: "Instructor file index",
        url: `${RAW}teaching-pack/00-INSTRUCTOR/FILE-INDEX.docx`,
      },
      {
        label: "Bridge visuals instructor notes",
        url: `${RAW}teaching-pack/00-INSTRUCTOR/BRIDGE-VISUALS.txt`,
      },
      {
        label: "Bridge asset README",
        url: `${RAW}teaching-pack/06-BRIDGE/README.txt`,
      },
    ],
  },
];

function matches(input: string, expected: string) {
  const inputBuffer = Buffer.from(input);
  const expectedBuffer = Buffer.from(expected);
  return (
    inputBuffer.length === expectedBuffer.length &&
    timingSafeEqual(inputBuffer, expectedBuffer)
  );
}

export default function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("X-Content-Type-Options", "nosniff");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const expected =
    process.env.INSTRUCTOR_PASSWORD ||
    (process.env.VERCEL_ENV ? undefined : "otterbend-local");

  if (!expected) {
    return response.status(503).json({
      error: "Instructor access is not configured. Set INSTRUCTOR_PASSWORD.",
    });
  }

  const supplied =
    typeof request.body?.password === "string" ? request.body.password : "";

  if (!matches(supplied, expected)) {
    return response.status(401).json({ error: "That course password is not valid." });
  }

  return response.status(200).json({ groups: instructorGroups });
}
