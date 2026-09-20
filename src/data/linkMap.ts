/**
 * Public STUDENT allowlist.
 *
 * Canonical source: content/link-map.md, verified 2026-09-20.
 * Do not derive links by crawling the upstream repository. Every URL exposed
 * by the learner shell must be present in this object.
 */
export const studentLinks = {
  orientation: {
    m01Deck:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/02-M01-first-day/M01-slides-first-day.pptx",
    brandKit:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/01-BRAND-KIT/ACMEJOB-brand-kit.zip",
  },
  measurement: {
    m02StudentDeck:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/03-M02-measurement/M02-student.pptx",
  },
  caseB: {
    studentAskDocx:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.docx",
    studentAskMarkdown:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.md",
    sensorData:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/sensors_startup.csv",
    foremanPassReport:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/FOREMAN_PASS_report.md",
    startupNote:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/install_startup_note.md",
  },
  bridge: {
    flatIllustration:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-lift-bridge-flat-claude.png",
    generalElevation:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-general-elevation.png",
    primarySiteMap:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-site-location.png",
    backupLocator:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-location-map.png",
    strainGaugeArray:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Engineering-Design-and-AI-Simulation/main/teaching-pack/06-BRIDGE/otter-bend-strain-gauge-array.png",
  },
} as const;

export const studentAllowlist = new Set<string>(
  Object.values(studentLinks).flatMap((group) => Object.values(group)),
);
