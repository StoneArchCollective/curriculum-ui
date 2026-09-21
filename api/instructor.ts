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
const M07_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M08_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M09_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M10_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M11_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M12_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M13_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/";
const M14_RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m14-exam-1-e69f/";
const INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M04_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M05_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M06_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M07_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M08_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M09_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M10_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M11_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M12_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M13_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/00-INSTRUCTOR/run-of-day/";
const M14_INSTRUCTOR_HTML =
  "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m14-exam-1-e69f/teaching-pack/00-INSTRUCTOR/run-of-day/";

const instructorGroups = [
  {
    unit: "01-hired",
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
    unit: "02-doubt",
    title: "Run of day",
    note: "Browser-ready day plans from the instructor teaching pack.",
    links: [
      {
        label: "M07 · DOES THE CONFIDENCE TRAVEL?",
        url: `${M07_INSTRUCTOR_HTML}M07-run-of-day.html`,
      },
      {
        label: "M08 · A STRONG FIT CAN STILL MISLEAD",
        url: `${M08_INSTRUCTOR_HTML}M08-run-of-day.html`,
      },
      {
        label: "M09 · TO THE SINGLE CYCLE",
        url: `${M09_INSTRUCTOR_HTML}M09-run-of-day.html`,
      },
      {
        label: "M10 · DID THE DECK GET WORSE?",
        url: `${M10_INSTRUCTOR_HTML}M10-run-of-day.html`,
      },
      {
        label: "M11 · PERMISSION TO PUBLISH",
        url: `${M11_INSTRUCTOR_HTML}M11-run-of-day.html`,
      },
      {
        label: "M12 · THE COUNTY READS CHARTS, NOT APPENDICES",
        url: `${M12_INSTRUCTOR_HTML}M12-run-of-day.html`,
      },
      {
        label: "M13 · WES’S HANDOFF",
        url: `${M13_INSTRUCTOR_HTML}M13-run-of-day.html`,
      },
      {
        label: "M14 · EXAM 1 · OVERWEIGHT PERMIT",
        url: `${M14_INSTRUCTOR_HTML}M14-run-of-day.html`,
      },
    ],
  },
  {
    unit: "01-hired",
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
    unit: "02-doubt",
    title: "Reveal + answer keys",
    note: "Spoiler-bearing decks and solutions for the currently built work.",
    links: [
      {
        label: "M07 instructor reveal",
        url: `${M07_RAW}teaching-pack/11-M07-training-mismatch/M07-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M07",
        url: `${M07_RAW}teaching-pack/11-M07-training-mismatch/KEY-M07-answer-key.docx`,
      },
      {
        label: "M08 instructor reveal",
        url: `${M08_RAW}teaching-pack/12-M08-spurious-correlation/M08-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M08",
        url: `${M08_RAW}teaching-pack/12-M08-spurious-correlation/KEY-M08-answer-key.docx`,
      },
      {
        label: "M09 instructor reveal",
        url: `${M09_RAW}teaching-pack/13-M09-false-precision/M09-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M09",
        url: `${M09_RAW}teaching-pack/13-M09-false-precision/KEY-M09-answer-key.docx`,
      },
      {
        label: "M10 instructor reveal",
        url: `${M10_RAW}teaching-pack/14-M10-deterioration-v-noise/M10-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M10",
        url: `${M10_RAW}teaching-pack/14-M10-deterioration-v-noise/KEY-M10-answer-key.docx`,
      },
      {
        label: "M11 instructor reveal",
        url: `${M11_RAW}teaching-pack/15-M11-dashboard-publish/M11-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M11",
        url: `${M11_RAW}teaching-pack/15-M11-dashboard-publish/KEY-M11-answer-key.docx`,
      },
      {
        label: "M12 instructor reveal",
        url: `${M12_RAW}teaching-pack/16-M12-misleading-charts/M12-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M12",
        url: `${M12_RAW}teaching-pack/16-M12-misleading-charts/KEY-M12-answer-key.docx`,
      },
      {
        label: "M13 instructor reveal",
        url: `${M13_RAW}teaching-pack/17-M13-wes-handoff/M13-instructor-reveal.pptx`,
      },
      {
        label: "KEY · M13",
        url: `${M13_RAW}teaching-pack/17-M13-wes-handoff/KEY-M13-answer-key.docx`,
      },
      {
        label: "M14 instructor rubric",
        url: `${M14_RAW}teaching-pack/18-M14-exam-1-overweight-permit/EX1-03-instructor-rubric.docx`,
      },
      {
        label: "KEY · M14",
        url: `${M14_RAW}teaching-pack/18-M14-exam-1-overweight-permit/KEY-M14-answer-key.docx`,
      },
      {
        label: "M14 later review · NEVER OPEN ON EXAM DAY",
        url: `${M14_RAW}teaching-pack/18-M14-exam-1-overweight-permit/M14-instructor-later-review.pptx`,
      },
    ],
  },
  {
    unit: "01-hired",
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
    unit: "01-hired",
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
