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
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/02-M01-first-day/M01-slides-first-day.pptx",
    brandKit:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/01-BRAND-KIT/ACMEJOB-brand-kit.zip",
  },
  measurement: {
    m02StudentDeck:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/03-M02-measurement/M02-student.pptx",
  },
  oneNumber: {
    m04StudentDeck:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m04-one-number-6a74/teaching-pack/08-M04-one-number/M04-student.pptx",
    coresData:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m04-one-number-6a74/teaching-pack/08-M04-one-number/cores_2027.csv",
    dianeAsk:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m04-one-number-6a74/teaching-pack/08-M04-one-number/H4-01-diane-one-number-ask.docx",
    spreadsheetHunt:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m04-one-number-6a74/teaching-pack/08-M04-one-number/H4-02-spreadsheet-hunt.docx",
    threeSentenceBrief:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/cursor/build-m04-one-number-6a74/teaching-pack/08-M04-one-number/H4-04-three-sentence-brief.docx",
  },
  caseB: {
    studentAskDocx:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.docx",
    studentAskMarkdown:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/HW1B-student-ask.md",
    sensorData:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/sensors_startup.csv",
    foremanPassReport:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/FOREMAN_PASS_report.md",
    startupNote:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/07-HW-CASE-B-LIFT-STATION/student/install_startup_note.md",
  },
  bridge: {
    flatIllustration:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/06-BRIDGE/otter-bend-lift-bridge-flat-claude.png",
    generalElevation:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/06-BRIDGE/otter-bend-general-elevation.png",
    primarySiteMap:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/06-BRIDGE/otter-bend-site-location.png",
    backupLocator:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/06-BRIDGE/otter-bend-location-map.png",
    strainGaugeArray:
      "https://raw.githubusercontent.com/Stone-Arch-Collective/Design-and-AI/main/teaching-pack/06-BRIDGE/otter-bend-strain-gauge-array.png",
  },
} as const;

export const studentAllowlist = new Set<string>(
  Object.values(studentLinks).flatMap((group) => Object.values(group)),
);
