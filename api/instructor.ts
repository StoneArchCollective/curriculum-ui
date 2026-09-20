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
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M04_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M05_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M06_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M04_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M05_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M06_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";

const instructorGroups = [
  {
    title: "Run of day",
    note: "Browser-ready day plans from the instructor teaching pack.",
    links: [
      {
        label: "WHY TEACH THIS WAY · FACULTY BRIEF",
        url: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/why-this-way.html",
      },
      {
        label: "RUN OF DAY · CONTENTS",
        url: `${INSTRUCTOR_HTML}index.html`,
      },
      {
        label: "M01 · FIRST DAY",
        url: `${INSTRUCTOR_HTML}M01-run-of-day.html`,
      },
      {
        label: "M02 · MEASURE FIRST",
        url: `${INSTRUCTOR_HTML}M02-run-of-day.html`,
      },
      {
        label: "M03 · RUN OF DAY",
        url: `${INSTRUCTOR_HTML}M03-run-of-day.html`,
      },
      {
        label: "M04 · ONE NUMBER",
        url: `${M04_INSTRUCTOR_HTML}M04-run-of-day.html`,
      },
      {
        label: "M05 · THE 3 A.M. ALARM",
        url: `${M05_INSTRUCTOR_HTML}M05-run-of-day.html`,
      },
      {
        label: "M06 · REAL—OR AN OUTLIER? / ALARM AUDIT",
        url: `${M06_INSTRUCTOR_HTML}M06-run-of-day.html`,
      },
    ],
  },
  {
    title: "Reveal + answer keys",
    note: "Spoiler-bearing decks and solutions for the currently built work.",
    links: [
      {
        label: "M02 instructor reveal",
        url: `${RAW}teaching-pack/03-M02-measurement/M02-instructor-reveal.pptx`,
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
        label: "M04 instructor reveal",
        url: `${M04_RAW}teaching-pack/08-M04-one-number/M04-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M04",
        url: `${M04_RAW}teaching-pack/08-M04-one-number/KEY-M04-answer-key.docx`,
      },
      {
        label: "M05 instructor reveal",
        url: `${M05_RAW}teaching-pack/09-M05-overnight-alarm/M05-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M05",
        url: `${M05_RAW}teaching-pack/09-M05-overnight-alarm/KEY-M05-answer-key.docx`,
      },
      {
        label: "M06 instructor reveal",
        url: `${M06_RAW}teaching-pack/10-M06-alarm-audit/M06-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M06",
        url: `${M06_RAW}teaching-pack/10-M06-alarm-audit/KEY-M06-answer-key.docx`,
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
      {
        label: "M04 FOREMAN core summary",
        url: `${M04_RAW}teaching-pack/08-M04-one-number/H4-03-foreman-core-summary.docx`,
      },
      {
        label: "M05 FOREMAN alarm report",
        url: `${M05_RAW}teaching-pack/09-M05-overnight-alarm/H5-02-FOREMAN-alarm-report.docx`,
      },
      {
        label: "M05 FOREMAN overnight run",
        url: `${M05_RAW}teaching-pack/09-M05-overnight-alarm/FOREMAN-overnight-run.log`,
      },
    ],
  },
  {
    title: "Run sheets + notes",
    note: "Instructor sequencing, file index, and bridge-use guidance.",
    links: [
      {
        label: "Instructor guide · M01–M04",
        url: `${M04_RAW}teaching-pack/00-INSTRUCTOR/INSTRUCTOR-GUIDE-M01-M04.docx`,
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
