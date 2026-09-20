const RAW =
  "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/";
const BLOB =
  "https://github.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/blob/main/";

export type Asset = {
  label: string;
  path: string;
  kind: "brief" | "field file" | "data" | "slides" | "visual" | "tool";
  view?: boolean;
  folder?: boolean;
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
  id: string;
  number: string;
  title: string;
  subtitle: string;
  phase: string;
  meetings: Meeting[];
};

const asset = (
  label: string,
  path: string,
  kind: Asset["kind"],
  view = false,
): Asset => ({ label, path, kind, view });

const handouts = (folder: string, files: string[]): Asset[] =>
  files.map((file) =>
    asset(
      file.replace(/\.(docx|md|csv)$/i, "").replace(/-/g, " "),
      `${folder}/${file}`,
      file.endsWith(".csv") ? "data" : "field file",
    ),
  );

export const units: Unit[] = [
  {
    id: "unit-1",
    number: "01",
    title: "Report to the bridge",
    subtitle: "AI foundations, measurement, and the first hard questions",
    phase: "Mobilization",
    meetings: [
      {
        id: "m01",
        number: "M01",
        title: "First day at ACMEJOB.Ai",
        kicker: "Orientation / Otter Bend",
        status: "open",
        summary:
          "Meet Diane, Wes, and FOREMAN v4.2. Review the inherited bridge record and decide what belongs to a person, a machine, or both.",
        assets: [
          asset(
            "M01 briefing deck",
            "teaching-pack/02-M01-first-day/M01-slides-first-day.pptx",
            "slides",
          ),
          ...handouts("teaching-pack/02-M01-first-day", [
            "H1-01-orientation-memo-halvorsen.docx",
            "H1-02-load-rating-sheet.docx",
            "H1-03-foreman-deck-assessment.docx",
            "H1-04-deck-panel-history-2019.docx",
            "H1-05-task-sort-activity.docx",
            "H1-06-note-v1-template-rubric.docx",
          ]),
        ],
      },
      {
        id: "m02",
        number: "M02",
        title: "The gauge array",
        kicker: "Field trailer / Measurement",
        status: "open",
        summary:
          "The numbers are real; the question is whether the summary is useful. Inspect the installation record, work the measurements, and document a defensible call.",
        assignment: "Case B unlocks after this meeting.",
        assets: [
          asset(
            "M02 measurement deck",
            "teaching-pack/03-M02-measurement/M02-slides-measurement.pptx",
            "slides",
          ),
          ...handouts("teaching-pack/03-M02-measurement", [
            "H2-01-measurement-lab.docx",
            "H2-02-sensor-installation-record.docx",
            "H2-03-foreman-baseline-check.docx",
            "H2-04-HW1-gauge-baseline.docx",
            "H2-05-hours-and-decision-log.docx",
            "gauges_install.csv",
            "pin_measurements_backup.csv",
          ]),
        ],
      },
      {
        id: "m03",
        number: "M03",
        title: "The citation that wasn't",
        kicker: "County file room / Source check",
        status: "open",
        summary:
          "FOREMAN sounds certain. The specification is on the table. Trace each claim to its source before the team sends anything outside the firm.",
        assets: [
          asset(
            "M03 source-check deck",
            "teaching-pack/04-M03-hallucination/M03-slides-hallucination.pptx",
            "slides",
          ),
          ...handouts("teaching-pack/04-M03-hallucination", [
            "H3-01-KC-MB-12-county-spec.docx",
            "H3-02-foreman-spec-summary.docx",
            "H3-03-next-word-dice-activity.docx",
            "H3-04-source-check-worksheet.docx",
            "H3-05-HW2-spec-summary-check.docx",
          ]),
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
            "teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.docx",
            "brief",
          ),
          asset(
            "Student assignment · readable copy",
            "teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.md",
            "brief",
            true,
          ),
          asset(
            "FOREMAN PASS report",
            "teaching-pack/07-HW-CASE-B-LIFT-STATION/student/FOREMAN_PASS_report.md",
            "field file",
            true,
          ),
          asset(
            "Installation startup note",
            "teaching-pack/07-HW-CASE-B-LIFT-STATION/student/install_startup_note.md",
            "field file",
            true,
          ),
          asset(
            "Sensor readings",
            "teaching-pack/07-HW-CASE-B-LIFT-STATION/student/sensors_startup.csv",
            "data",
            true,
          ),
        ],
      },
      {
        id: "u1-next",
        number: "M04–M06",
        title: "The analysis develops",
        kicker: "Coming to the job board",
        status: "planned",
        summary:
          "Descriptive statistics, agentic AI, distributions, and auditing an agent's analysis.",
        assets: [],
      },
    ],
  },
  {
    id: "unit-2",
    number: "02",
    title: "Audit the machine",
    subtitle: "Bias, uncertainty, dashboards, and data pipelines",
    phase: "Investigation",
    meetings: [],
  },
  {
    id: "unit-3",
    number: "03",
    title: "Read what it built",
    subtitle: "Code generation, tests, verification, and debugging",
    phase: "Fabrication",
    meetings: [],
  },
  {
    id: "unit-4",
    number: "04",
    title: "Design with it",
    subtitle: "Iterative workflows, engineering tools, and research",
    phase: "Design development",
    meetings: [],
  },
  {
    id: "unit-5",
    number: "05",
    title: "Put your name on it",
    subtitle: "Ethics, verification, safety, and professional responsibility",
    phase: "Final review",
    meetings: [],
  },
];

export const resourceGroups = [
  {
    title: "Field desk",
    note: "Project visuals and the firm kit",
    links: [
      asset(
        "Otter Bend general elevation",
        "teaching-pack/06-BRIDGE/otter-bend-general-elevation.png",
        "visual",
        true,
      ),
      asset(
        "Strain gauge array",
        "teaching-pack/06-BRIDGE/otter-bend-strain-gauge-array.png",
        "visual",
        true,
      ),
      asset(
        "Project location map",
        "teaching-pack/06-BRIDGE/otter-bend-location-map.png",
        "visual",
        true,
      ),
      asset(
        "ACMEJOB brand kit",
        "teaching-pack/01-BRAND-KIT/ACMEJOB-brand-kit.zip",
        "tool",
      ),
      {
        ...asset("Course chart set", "teaching-pack/05-CHARTS", "visual"),
        folder: true,
      },
    ],
  },
  {
    title: "Reference shelf",
    note: "Self-paced guides for the work ahead",
    links: [
      asset("Probability + sampling", "guides/probability-and-sampling.html", "tool", true),
      asset("Code-reading primer", "guides/code-reading-primer.html", "tool", true),
      asset(
        "Engineering reference cards",
        "guides/engineering-reference-cards.html",
        "tool",
        true,
      ),
      asset("Optional concepts", "guides/optional-concepts.html", "tool", true),
    ],
  },
  {
    title: "Curriculum map",
    note: "See where each idea enters the job",
    links: [
      asset("Learning graph", "learning-graph-v2/graph-viewer.html", "tool", true),
      asset("Concept list", "learning-graph-v2/concept-list.md", "tool", true),
      asset("Vocabulary lab", "vocab-lab/vocab-lab.html", "tool", true),
    ],
  },
];

export const hrefFor = (item: Asset) =>
  `${
    item.folder
      ? "https://github.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/tree/main/"
      : item.view
        ? BLOB
        : RAW
  }${item.path}`;
