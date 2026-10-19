import { studentAllowlist } from "./linkMap";

/**
 * Open Model LLMs learner links.
 *
 * The five session source files are currently verified on `main`. Change this
 * single ref when the upstream learner-page PR is available, then change it
 * back to `main` after that PR merges.
 */
export const OPEN_LLMS_CURRICULUM_REF = "main";

const curriculumSourceRoot =
  `https://github.com/StoneArchCollective/curriculum/blob/${OPEN_LLMS_CURRICULUM_REF}` +
  "/docs/curricula/open-llms";
const curriculumPagesRoot =
  "https://stonearchcollective.github.io/curriculum/curricula/open-llms";

const sourcePage = (path: string) => `${curriculumSourceRoot}/${path}`;
const publishedPage = (path: string) => `${curriculumPagesRoot}/${path}`;
const learnerPage = (publishedPath: string, sourcePath: string) =>
  OPEN_LLMS_CURRICULUM_REF === "main"
    ? publishedPage(publishedPath)
    : sourcePage(sourcePath);

export const openLlmsLinks = {
  // The dated preparation page has not been found on main. Keep this null
  // until its exact path and branch are verified.
  beforeSunday: null,
  sessions: [
    learnerPage("sessions/01/", "sessions/01.md"),
    learnerPage("sessions/02/", "sessions/02.md"),
    learnerPage("sessions/03/", "sessions/03.md"),
    learnerPage("sessions/04/", "sessions/04.md"),
    learnerPage("sessions/05/", "sessions/05.md"),
  ],
  resources: {
    guide: publishedPage("guide/"),
    glossary: publishedPage("glossary/"),
    learningGraph: publishedPage("learning-graph/"),
    deck: publishedPage("deck/deck.html"),
  },
} as const;

const openLlmsCanonicalUrls = [
  ...openLlmsLinks.sessions,
  ...Object.values(openLlmsLinks.resources),
] as const;

// Extend, rather than replace or bypass, the learner allowlist used by the
// existing shell.
openLlmsCanonicalUrls.forEach((url) => studentAllowlist.add(url));

export const openLlmsAllowlist = studentAllowlist;

export function allowOpenLlmsLink(url: string) {
  const canonical = url.split("#", 1)[0];
  if (!openLlmsAllowlist.has(canonical)) {
    throw new Error(`Open Model LLMs asset is not in the canonical allowlist: ${url}`);
  }
  return url;
}
