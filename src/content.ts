import { studentAllowlist, studentLinks } from "./data/linkMap";

export type Asset = {
  label: string;
  url: string;
  kind: "brief" | "field file" | "data" | "slides" | "visual" | "tool";
  machine?: boolean;
};

export type Meeting = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  status: "open" | "next" | "planned";
  summary: string;
  assignment?: string;
  assets: Asset[];
};

export type Unit = {
  id: "01-hired" | "02-doubt" | "03-build" | "04-own" | "05-sign";
  number: string;
  title: string;
  subtitle: string;
  motto: string;
  phase: string;
  meetings: Meeting[];
};

const asset = (
  label: string,
  url: string,
  kind: Asset["kind"],
  machine = false,
): Asset => {
  if (!studentAllowlist.has(url)) {
    throw new Error(`Student asset is not in the canonical allowlist: ${url}`);
  }
  return { label, url, kind, machine };
};

export const units: Unit[] = [
  {
    id: "01-hired",
    number: "01",
    title: "Hired",
    subtitle:
      "You measure the Otter Bend Lift Bridge’s movement, but FOREMAN’s outputs flicker with uncertainty. Diane PE asks how you know—your raw data analysis reveals the machine’s limits.",
    motto: "First weeks: measurement meets machine.",
    phase: "M01–M06 · First days",
    meetings: [
      {
        id: "m01",
        number: "M01",
        title: "First day at ACMEJOB.Ai",
        kicker: "Orientation / Otter Bend",
        status: "open",
        summary:
          "Meet Diane, Wes, and FOREMAN v4.2. Enter the Otter Bend record and establish who is responsible for the work.",
        assets: [
          asset(
            "M01 student deck",
            studentLinks.orientation.m01Deck,
            "slides",
          ),
        ],
      },
      {
        id: "m02",
        number: "M02",
        title: "The gauge array",
        kicker: "Field trailer / Measurement",
        status: "open",
        summary:
          "Move from a polished output to the conditions under which the measurements were made.",
        assignment: "Case B unlocks after this meeting.",
        assets: [
          asset(
            "M02 student deck",
            studentLinks.measurement.m02StudentDeck,
            "slides",
          ),
        ],
      },
      {
        id: "case-b",
        number: "HW1B",
        title: "Oak Street startup",
        kicker: "Transfer assignment / Lift station",
        status: "next",
        summary:
          "A new site and the same professional obligation. Audit a machine-issued PASS using startup records and 96 pressure readings.",
        assets: [
          asset(
            "Student assignment · DOCX",
            studentLinks.caseB.studentAskDocx,
            "brief",
          ),
          asset(
            "Student assignment · accessible Markdown",
            studentLinks.caseB.studentAskMarkdown,
            "brief",
          ),
          asset(
            "Sensor startup data",
            studentLinks.caseB.sensorData,
            "data",
          ),
          asset(
            "FOREMAN initial PASS report",
            studentLinks.caseB.foremanPassReport,
            "field file",
            true,
          ),
          asset(
            "Installation / startup note",
            studentLinks.caseB.startupNote,
            "field file",
          ),
        ],
      },
      {
        id: "u1-next",
        number: "M03–M06",
        title: "The evidence develops",
        kicker: "Coming to the job board",
        status: "planned",
        summary:
          "LLM generation, descriptive statistics, agentic AI, distributions, and the first data audits.",
        assets: [],
      },
    ],
  },
  {
    id: "02-doubt",
    number: "02",
    title: "Doubt",
    subtitle:
      "FOREMAN’s charts hide flaws in decimal precision. Wes EIT questions partial handoffs—should the AI’s “certainty” override your doubt? You trace errors in its logic.",
    motto: "When data dazzles, doubt is your compass.",
    phase: "M07–M14 · Investigation",
    meetings: [],
  },
  {
    id: "03-build",
    number: "03",
    title: "Build",
    subtitle:
      "You draft tight specs for the lift bridge, verifying AI code against known answers. Only you ensure the math aligns with reality—FOREMAN follows your rules, not its own.",
    motto: "Code is a conversation, not a command.",
    phase: "M15–M20 · Fabrication",
    meetings: [],
  },
  {
    id: "04-own",
    number: "04",
    title: "Own",
    subtitle:
      "Rehab or replace? Kinnick County’s budget hinges on your analysis. You own the recommendation—FOREMAN’s numbers are tools, not verdicts.",
    motto: "Your name carries the weight of choice.",
    phase: "M21–M23 · Design development",
    meetings: [],
  },
  {
    id: "05-sign",
    number: "05",
    title: "Sign",
    subtitle:
      "You meticulously prepare the county board briefing for the Otter Bend recommendation, ensuring that independent verification and the record are prioritized over a polished draft. You sign only what you can defend.",
    motto: "Accuracy and integrity are paramount in your documentation.",
    phase: "M24–M28 + finals · Final review",
    meetings: [],
  },
];

export const resourceGroups = [
  {
    title: "Firm kit",
    note: "Approved ACMEJOB student identity assets",
    links: [
      asset(
        "ACMEJOB student brand kit",
        studentLinks.orientation.brandKit,
        "tool",
      ),
    ],
  },
  {
    title: "Bridge desk",
    note: "Fictional, schematic course visuals",
    links: [
      asset(
        "Otter Bend flat bridge illustration",
        studentLinks.bridge.flatIllustration,
        "visual",
      ),
      asset(
        "General elevation · dimensions not verified",
        studentLinks.bridge.generalElevation,
        "visual",
      ),
      asset(
        "Primary site map · fictional place names",
        studentLinks.bridge.primarySiteMap,
        "visual",
      ),
      asset(
        "Backup locator · fictional course site",
        studentLinks.bridge.backupLocator,
        "visual",
      ),
      asset(
        "Strain-gauge array G1–G8",
        studentLinks.bridge.strainGaugeArray,
        "visual",
      ),
    ],
  },
];

export const hrefFor = (item: Asset) => item.url;
