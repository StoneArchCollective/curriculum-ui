import { useEffect, useState } from "react";
import {
  allowOpenLlmsLink,
  OPEN_LLMS_CURRICULUM_REF,
  openLlmsLinks,
} from "./data/openLlmsLinks";

type LearningTrack = "laptop" | "cloud";

const TRACK_STORAGE_KEY = "open-llms-learning-track-v1";

const sessions = [
  { title: "Hardware", duration: "40 min" },
  { title: "Model types and loading", duration: "45 min" },
  { title: "Open cloud models", duration: "40 min" },
  { title: "Running several models together", duration: "45 min" },
  { title: "Putting them into tools", duration: "40 min" },
] as const;

const resources = [
  { label: "Interactive guide", url: openLlmsLinks.resources.guide },
  { label: "Glossary", url: openLlmsLinks.resources.glossary },
  { label: "Learning graph", url: openLlmsLinks.resources.learningGraph },
  { label: "Deck", url: openLlmsLinks.resources.deck },
] as const;

function readStoredTrack(): LearningTrack {
  try {
    return localStorage.getItem(TRACK_STORAGE_KEY) === "cloud" ? "cloud" : "laptop";
  } catch {
    return "laptop";
  }
}

function Keystone() {
  return <span className="ollm-keystone" aria-hidden="true" />;
}

export function OpenLlmsWorkshop() {
  const [track, setTrack] = useState<LearningTrack>(readStoredTrack);
  const trackLabel = track === "laptop" ? "On my laptop" : "Cloud model";

  useEffect(() => {
    document.title = "Open Model LLMs · Stone Arch";
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Learner hub for the Open Model LLMs workshop on 25 Oct 2026.",
    );
  }, []);

  function chooseTrack(nextTrack: LearningTrack) {
    setTrack(nextTrack);
    try {
      localStorage.setItem(TRACK_STORAGE_KEY, nextTrack);
    } catch {
      // The switch still works for this visit if storage is unavailable.
    }
  }

  return (
    <div className="ollm-site">
      <header className="ollm-header">
        <a className="ollm-wordmark" href="/open-llms" aria-label="Open Model LLMs home">
          <Keystone />
          <span>Stone Arch</span>
        </a>
        <span className="ollm-date">SUN 25 OCT 2026</span>
      </header>

      <main>
        <section className="ollm-hero">
          <p className="ollm-kicker">One-day workshop · 4 hours</p>
          <h1>Open Model LLMs</h1>
          <p className="ollm-intro">
            Choose the route that fits your machine. Your choice follows you through
            every session.
          </p>

          <div className="ollm-track-panel">
            <div>
              <span className="ollm-label">Your route</span>
              <strong>{trackLabel}</strong>
            </div>
            <div className="ollm-switch" role="group" aria-label="Choose a workshop route">
              <button
                type="button"
                className={track === "laptop" ? "is-active" : ""}
                aria-pressed={track === "laptop"}
                onClick={() => chooseTrack("laptop")}
              >
                On my laptop
              </button>
              <button
                type="button"
                className={track === "cloud" ? "is-active" : ""}
                aria-pressed={track === "cloud"}
                onClick={() => chooseTrack("cloud")}
              >
                Cloud model
              </button>
            </div>
          </div>

          <aside className="ollm-cloud-notice">
            <span>No strong laptop?</span>
            <a
              href={allowOpenLlmsLink(`${openLlmsLinks.beforeSunday}#cloud`)}
              target="_blank"
              rel="noreferrer"
            >
              Use a cloud model <span aria-hidden="true">→</span>
            </a>
          </aside>
        </section>

        <section className="ollm-content" aria-labelledby="start-heading">
          <article className="ollm-before-card">
            <div>
              <p className="ollm-step">Start here</p>
              <a
                className="ollm-before-primary"
                href={allowOpenLlmsLink(`${openLlmsLinks.beforeSunday}#${track}`)}
                target="_blank"
                rel="noreferrer"
              >
                <h2 id="start-heading">Before Sunday</h2>
                <span>
                  Open {trackLabel} <span aria-hidden="true">↗</span>
                </span>
              </a>
              <p>Prepare your route and check what to bring before the workshop.</p>
            </div>
            <div className="ollm-before-links">
              <a
                href={allowOpenLlmsLink(`${openLlmsLinks.beforeSunday}#laptop`)}
                target="_blank"
                rel="noreferrer"
              >
                On your laptop
              </a>
              <a
                href={allowOpenLlmsLink(`${openLlmsLinks.beforeSunday}#cloud`)}
                target="_blank"
                rel="noreferrer"
              >
                In the cloud
              </a>
              <a
                href={allowOpenLlmsLink(`${openLlmsLinks.beforeSunday}#bring`)}
                target="_blank"
                rel="noreferrer"
              >
                What to bring
              </a>
            </div>
          </article>

          <div className="ollm-session-heading">
            <div>
              <p className="ollm-step">Workshop sequence</p>
              <h2>Five sessions</h2>
            </div>
            <p>Two 15-minute breaks are built into the day.</p>
          </div>

          <ol className="ollm-sessions">
            {sessions.map((session, index) => {
              const href = allowOpenLlmsLink(
                `${openLlmsLinks.sessions[index]}#${track}`,
              );
              return (
                <li key={session.title}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <span className="ollm-session-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ollm-session-title">{session.title}</span>
                    <span className="ollm-duration">{session.duration}</span>
                    <span className="ollm-route">
                      {trackLabel} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>

          <nav className="ollm-resources" aria-label="Workshop resources">
            <p className="ollm-step">Keep nearby</p>
            <div>
              {resources.map((resource) => (
                <a
                  href={allowOpenLlmsLink(resource.url)}
                  target="_blank"
                  rel="noreferrer"
                  key={resource.url}
                >
                  {resource.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </nav>
        </section>
      </main>

      <footer className="ollm-footer">
        <span>Stone Arch · Practitioner-owned · Twin Cities</span>
        <span>Curriculum source · {OPEN_LLMS_CURRICULUM_REF}</span>
      </footer>
    </div>
  );
}
