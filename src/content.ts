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
        id: "m03",
        number: "M03",
        title: "The section that does not exist",
        kicker: "LLM generation / Hallucination",
        status: "open",
        summary:
          "Model next-word generation by hand, then check FOREMAN’s specification summary against the county source to find what is altered or invented.",
        assets: [
          asset(
            "M03 hallucination deck",
            studentLinks.hallucination.m03Deck,
            "slides",
          ),
          asset(
            "KC-MB-12 movable bridge inspection specification",
            studentLinks.hallucination.countySpecification,
            "field file",
          ),
          asset(
            "Next-word dice activity",
            studentLinks.hallucination.nextWordDice,
            "tool",
          ),
          asset(
            "Source-check worksheet",
            studentLinks.hallucination.sourceCheck,
            "tool",
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
        id: "m04",
        number: "M04",
        title: "One Number",
        kicker: "Descriptive statistics / Diane’s ask",
        status: "open",
        summary:
          "Use the core data to choose one defensible number for Diane and explain what that number does—and does not—say.",
        assets: [
          asset(
            "M04 student deck",
            studentLinks.oneNumber.m04StudentDeck,
            "slides",
          ),
          asset(
            "2027 core data",
            studentLinks.oneNumber.coresData,
            "data",
          ),
          asset(
            "Diane’s one-number ask",
            studentLinks.oneNumber.dianeAsk,
            "brief",
          ),
          asset(
            "Spreadsheet hunt",
            studentLinks.oneNumber.spreadsheetHunt,
            "tool",
          ),
          asset(
            "Three-sentence brief",
            studentLinks.oneNumber.threeSentenceBrief,
            "brief",
          ),
        ],
      },
      {
        id: "m05",
        number: "M05",
        title: "The 3 a.m. alarm",
        kicker: "Agentic AI / Overnight run",
        status: "open",
        summary:
          "Trace FOREMAN’s overnight path from a recorded warning to an unsupported closure recommendation, separating data, rules, and action.",
        assets: [
          asset(
            "M05 student deck",
            studentLinks.overnightAlarm.m05StudentDeck,
            "slides",
          ),
          asset(
            "Diane’s overnight dispatch",
            studentLinks.overnightAlarm.dianeDispatch,
            "brief",
          ),
          asset(
            "Agent-loop audit",
            studentLinks.overnightAlarm.agentLoopAudit,
            "tool",
          ),
          asset(
            "Note v1 + HW3",
            studentLinks.overnightAlarm.noteAndHomework,
            "brief",
          ),
          asset(
            "Overnight feed",
            studentLinks.overnightAlarm.feed,
            "data",
          ),
          asset(
            "Threshold configuration",
            studentLinks.overnightAlarm.thresholdConfig,
            "data",
            true,
          ),
        ],
      },
      {
        id: "m06",
        number: "M06",
        title: "Real—or an outlier? / alarm audit",
        kicker: "Alarm audit / Wes handoff",
        status: "open",
        summary:
          "Audit FOREMAN’s alarm disposition against the traffic distribution and chain of evidence, then hand Wes a gauge file with a defensible decision record.",
        assets: [
          asset(
            "M06 student deck",
            studentLinks.alarmAudit.m06StudentDeck,
            "slides",
          ),
          asset(
            "FOREMAN alarm disposition",
            studentLinks.alarmAudit.foremanDisposition,
            "field file",
            true,
          ),
          asset(
            "Distribution + chain audit",
            studentLinks.alarmAudit.distributionAudit,
            "tool",
          ),
          asset(
            "Decision log + Unit 1 debrief",
            studentLinks.alarmAudit.decisionLog,
            "brief",
          ),
          asset(
            "Wes gauge-file handoff",
            studentLinks.alarmAudit.wesHandoff,
            "brief",
          ),
          asset(
            "Gauge audit + handoff workbook",
            studentLinks.alarmAudit.gaugeAudit,
            "tool",
          ),
          asset(
            "Traffic counts",
            studentLinks.alarmAudit.trafficCounts,
            "data",
          ),
        ],
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
    meetings: [
      {
        id: "m07",
        number: "M07",
        title: "Does the confidence travel?",
        kicker: "Training-data bias / Distribution shift",
        status: "open",
        summary:
          "Compare FOREMAN’s disclosed training archive with Otter Bend before deciding which ratings—and which claims—can travel into the interim report.",
        assets: [
          asset(
            "M07 student deck",
            studentLinks.trainingMismatch.m07StudentDeck,
            "slides",
          ),
          asset(
            "Vendor training summary",
            studentLinks.trainingMismatch.vendorTrainingSummary,
            "field file",
          ),
          asset(
            "Otter Bend site + exposure",
            studentLinks.trainingMismatch.siteAndExposure,
            "field file",
          ),
          asset(
            "Inspection photo set",
            studentLinks.trainingMismatch.inspectionPhotoSet,
            "field file",
          ),
          asset(
            "Confidence-score log",
            studentLinks.trainingMismatch.confidenceScoreLog,
            "field file",
          ),
          asset(
            "Training-to-deployment audit",
            studentLinks.trainingMismatch.trainingToDeploymentAudit,
            "tool",
          ),
          asset(
            "Note v2 + decision log",
            studentLinks.trainingMismatch.noteAndDecisionLog,
            "brief",
          ),
          asset(
            "FOREMAN damage screen",
            studentLinks.trainingMismatch.foremanDamageScreen,
            "field file",
            true,
          ),
          asset(
            "Wes accepted-screen memo",
            studentLinks.trainingMismatch.wesAcceptedScreenMemo,
            "brief",
          ),
          asset(
            "Inspection inventory + output",
            studentLinks.trainingMismatch.inspectionInventory,
            "data",
          ),
        ],
      },
      {
        id: "m08",
        number: "M08",
        title: "A strong fit can still mislead.",
        kicker: "Spurious correlation / Thermal confound",
        status: "open",
        summary:
          "Diane believes FOREMAN’s strong date fit supports deterioration. Reproduce the relationship, hunt for a hidden driver, and bound what the evidence can support.",
        assignment: "HW4 begins at M08; Unit 2 Note v2 continues from M07.",
        assets: [
          asset(
            "M08 student deck",
            studentLinks.spuriousCorrelation.m08StudentDeck,
            "slides",
          ),
          asset(
            "FOREMAN deterioration report",
            studentLinks.spuriousCorrelation.foremanDeteriorationReport,
            "field file",
            true,
          ),
          asset(
            "Evidence register + data dictionary",
            studentLinks.spuriousCorrelation.dataGuide,
            "field file",
          ),
          asset(
            "Regression hunt",
            studentLinks.spuriousCorrelation.regressionHunt,
            "tool",
          ),
          asset(
            "Correlation, mechanism + claim boundary",
            studentLinks.spuriousCorrelation.conceptsAndMechanism,
            "tool",
          ),
          asset(
            "G4 strain feed",
            studentLinks.spuriousCorrelation.feed,
            "data",
          ),
          asset(
            "Weather-station record",
            studentLinks.spuriousCorrelation.weatherStation,
            "data",
          ),
          asset(
            "Regression summary",
            studentLinks.spuriousCorrelation.regressionSummary,
            "data",
          ),
          asset(
            "Strain-temperature analysis",
            studentLinks.spuriousCorrelation.strainTemperatureAnalysis,
            "data",
          ),
          asset(
            "HW4 · Temperature-corrected strain",
            studentLinks.spuriousCorrelation.homeworkTemperatureCorrection,
            "brief",
          ),
          asset(
            "Unit 2 Note v2 + decision log",
            studentLinks.spuriousCorrelation.noteAndDecisionLog,
            "brief",
          ),
        ],
      },
      {
        id: "m09",
        number: "M09",
        title: "To the single cycle.",
        kicker: "False precision / Sampling",
        status: "open",
        summary:
          "FOREMAN reports 41,872,316 cycles with no range. Trace the digits, compare spread with display resolution, and audit what the sampling frame can support.",
        assignment: "Unit 2 Note v2 continues; no new numbered homework.",
        assets: [
          asset(
            "M09 student deck",
            studentLinks.falsePrecision.m09StudentDeck,
            "slides",
          ),
          asset(
            "FOREMAN fatigue-life output",
            studentLinks.falsePrecision.foremanFatigueLifeOutput,
            "field file",
            true,
          ),
          asset(
            "Fatigue evidence guide",
            studentLinks.falsePrecision.fatigueEvidenceGuide,
            "field file",
          ),
          asset(
            "Precision audit",
            studentLinks.falsePrecision.precisionAudit,
            "tool",
          ),
          asset(
            "Concepts + reporting boundary",
            studentLinks.falsePrecision.conceptsAndReporting,
            "tool",
          ),
          asset(
            "Random sampling lab",
            studentLinks.falsePrecision.randomSamplingLab,
            "tool",
          ),
          asset(
            "Core sampling-frame audit",
            studentLinks.falsePrecision.coreSamplingFrameAudit,
            "tool",
          ),
          asset(
            "Fatigue summary",
            studentLinks.falsePrecision.fatigueSummary,
            "data",
          ),
          asset(
            "Random samples · n = 8",
            studentLinks.falsePrecision.randomSamples,
            "data",
          ),
          asset(
            "Simulated core population",
            studentLinks.falsePrecision.corePopulation,
            "data",
          ),
          asset(
            "Otter Bend cores",
            studentLinks.falsePrecision.cores,
            "data",
          ),
          asset(
            "Fatigue tests",
            studentLinks.falsePrecision.fatigueTests,
            "data",
          ),
          asset(
            "Unit 2 Note v2 + decision log",
            studentLinks.falsePrecision.noteAndDecisionLog,
            "brief",
          ),
        ],
      },
      {
        id: "m10",
        number: "M10",
        title: "Did the deck get worse?",
        kicker: "Deterioration vs. noise / Confidence intervals",
        status: "open",
        summary:
          "FOREMAN turns a 6% paired increase and p = 0.04 into “deterioration confirmed.” Build intervals, audit matched controls, and defend what the evidence supports.",
        assignment: "HW5 · Peak strain confidence interval; Unit 2 Note v2 continues.",
        assets: [
          asset(
            "M10 student deck",
            studentLinks.deteriorationVsNoise.m10StudentDeck,
            "slides",
          ),
          asset(
            "FOREMAN deterioration claim",
            studentLinks.deteriorationVsNoise.foremanDeteriorationClaim,
            "field file",
            true,
          ),
          asset(
            "Coupon interval warm-up",
            studentLinks.deteriorationVsNoise.couponIntervalWarmup,
            "tool",
          ),
          asset(
            "Paired load-test guide",
            studentLinks.deteriorationVsNoise.pairedLoadTestGuide,
            "field file",
          ),
          asset(
            "Signal vs. noise worksheet",
            studentLinks.deteriorationVsNoise.signalVsNoiseWorksheet,
            "tool",
          ),
          asset(
            "Concepts + language reference",
            studentLinks.deteriorationVsNoise.conceptsAndLanguage,
            "tool",
          ),
          asset(
            "Coupons",
            studentLinks.deteriorationVsNoise.coupons,
            "data",
          ),
          asset(
            "Paired load tests · 2019–2027",
            studentLinks.deteriorationVsNoise.loadTest,
            "data",
          ),
          asset(
            "Interval summary",
            studentLinks.deteriorationVsNoise.intervalSummary,
            "data",
          ),
          asset(
            "Paired-location summary",
            studentLinks.deteriorationVsNoise.pairedLocationSummary,
            "data",
          ),
          asset(
            "Test-control check",
            studentLinks.deteriorationVsNoise.testControlCheck,
            "data",
          ),
          asset(
            "HW5 · Peak strain interval",
            studentLinks.deteriorationVsNoise.homeworkPeakStrainInterval,
            "brief",
          ),
          asset(
            "Unit 2 Note v2 + decision log",
            studentLinks.deteriorationVsNoise.noteAndDecisionLog,
            "brief",
          ),
        ],
      },
    ],
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
    title: "Prerequisite review",
    note: "Student self-check guides for foundational concepts",
    links: [
      asset(
        "Probability and sampling",
        studentLinks.prerequisiteReview.probabilityAndSampling,
        "tool",
      ),
      asset(
        "Code reading primer",
        studentLinks.prerequisiteReview.codeReadingPrimer,
        "tool",
      ),
      asset(
        "Engineering reference cards",
        studentLinks.prerequisiteReview.engineeringReferenceCards,
        "tool",
      ),
      asset(
        "Optional concepts",
        studentLinks.prerequisiteReview.optionalConcepts,
        "tool",
      ),
    ],
  },
  {
    title: "Vocabulary",
    note: "Interactive course terminology practice",
    links: [
      asset(
        "Vocab lab · 163 terms",
        studentLinks.vocabulary.vocabLab,
        "tool",
      ),
    ],
  },
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
