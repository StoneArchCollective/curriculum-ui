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
const BLOB =
  "https://github.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/blob/main/";
const TREE =
  "https://github.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/tree/main/";

const instructorGroups = [
  {
    title: "Instructor guide",
    note: "Facilitation notes and the complete M01–M03 teaching file.",
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
        label: "Browse instructor folder",
        url: `${TREE}teaching-pack/00-INSTRUCTOR`,
      },
    ],
  },
  {
    title: "Meeting keys",
    note: "Answer keys for the three currently built meetings.",
    links: [
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
    ],
  },
  {
    title: "Case B key",
    note: "Planted condition and expected analysis for Oak Street.",
    links: [
      {
        label: "Instructor key · readable copy",
        url: `${BLOB}teaching-pack/07-HW-CASE-B-LIFT-STATION/instructor/INSTRUCTOR_KEY.md`,
      },
      {
        label: "Browse Case B instructor folder",
        url: `${TREE}teaching-pack/07-HW-CASE-B-LIFT-STATION/instructor`,
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
