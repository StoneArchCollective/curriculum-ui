import { FormEvent, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { hrefFor, resourceGroups, units, type Asset, type Meeting } from "./content";
import "./styles.css";

function BridgeMark({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "bridge-mark compact" : "bridge-mark"}
      viewBox="0 0 140 116"
      role="img"
      aria-label="ACMEJOB vertical lift bridge mark"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4">
        <path d="M18 96V14h26v82M96 96V14h26v82M18 34h26M96 34h26M18 58h26M96 58h26" />
        <path d="m18 14 26 20-26 24 26 20M122 14 96 34l26 24-26 20" />
        <path d="M6 96h128M42 72h56M42 72l14-15h28l14 15M49 72v15h42V72M49 87l14-15 14 15 14-15" />
        <path d="M44 22h52M52 22v35M88 22v35M7 106c13-8 24 8 37 0s24 8 37 0 24 8 52 0" />
      </g>
      {!compact && <path className="spark" d="m70 2 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" />}
    </svg>
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`wordmark ${compact ? "wordmark--compact" : ""}`}>
      <BridgeMark compact={compact} />
      <div>
        <div className="brand-name">
          ACMEJOB<span className="ai-sticker">.Ai</span>
        </div>
        <div className="tagline">Engineering · Est. 1967</div>
      </div>
    </div>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function AssetLink({ item }: { item: Asset }) {
  const machine = item.label.toLowerCase().includes("foreman");
  return (
    <a
      className={`asset-link ${machine ? "asset-link--machine" : ""}`}
      href={hrefFor(item)}
      target="_blank"
      rel="noreferrer"
    >
      <span>
        <small>{item.kind}</small>
        {item.label}
      </span>
      <Arrow />
    </a>
  );
}

function MeetingCard({
  meeting,
  index,
  active,
  onOpen,
}: {
  meeting: Meeting;
  index: number;
  active: boolean;
  onOpen: () => void;
}) {
  const planned = meeting.status === "planned";
  return (
    <article
      className={`meeting ${active ? "meeting--active" : ""} ${
        planned ? "meeting--planned" : ""
      }`}
      style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}
    >
      <button
        className="meeting__header"
        onClick={onOpen}
        aria-expanded={active}
        disabled={planned}
      >
        <span className="meeting__number">{meeting.number}</span>
        <span className="meeting__heading">
          <small>{meeting.kicker}</small>
          <strong>{meeting.title}</strong>
        </span>
        <span className="meeting__state" aria-hidden="true">
          {planned ? "Filed for later" : active ? "Close file" : "Open file"}
        </span>
      </button>
      {!planned && (
        <div className="meeting__body" hidden={!active}>
          <div className="meeting__brief">
            <p>{meeting.summary}</p>
            {meeting.assignment && <p className="diane-note">{meeting.assignment}</p>}
          </div>
          <div className="asset-grid">
            {meeting.assets.map((item) => (
              <AssetLink item={item} key={item.path} />
            ))}
          </div>
          <p className="external-note">
            Files open from the public course repository in a new tab.
          </p>
        </div>
      )}
    </article>
  );
}

function ResourceDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open, onClose]);

  return (
    <>
      <button
        className={`drawer-scrim ${open ? "is-open" : ""}`}
        aria-label="Close resources"
        onClick={onClose}
      />
      <aside className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="drawer__top">
          <div>
            <span className="eyebrow">Secondary tray</span>
            <h2>Shop library</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <p className="drawer__intro">
          Guides, reference files, and the curriculum map live here. The project
          storyline stays on the main job board.
        </p>
        {resourceGroups.map((group) => (
          <section className="resource-group" key={group.title}>
            <div>
              <h3>{group.title}</h3>
              <p>{group.note}</p>
            </div>
            <div className="resource-links">
              {group.links.map((item) => (
                <AssetLink item={item} key={item.path} />
              ))}
            </div>
          </section>
        ))}
      </aside>
    </>
  );
}

function StudentShell() {
  const [activeMeeting, setActiveMeeting] = useState("m01");
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState("unit-1");
  const unit = useMemo(
    () => units.find((candidate) => candidate.id === activeUnit) ?? units[0],
    [activeUnit],
  );

  return (
    <div className="site">
      <header className="topbar">
        <a href="/" aria-label="ACMEJOB.Ai home">
          <Wordmark compact />
        </a>
        <nav aria-label="Utility navigation">
          <button className="text-button" onClick={() => setResourcesOpen(true)}>
            Shop library
          </button>
          <a className="text-button" href="/instructor">
            Instructor entrance
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy">
            <div className="project-chip">Project 27-114 · County Road 9</div>
            <p className="eyebrow">SEIS 201 · New-hire field assignment</p>
            <h1>
              Your first job is <br />
              <span>already moving.</span>
            </h1>
            <p className="hero__dek">
              Welcome to Otter Bend. There is a 1962 vertical lift bridge, a county
              deadline, and an AI agent with very good formatting. Your name is going
              on the work.
            </p>
            <div className="hero__actions">
              <a className="primary-button" href="#job-board">
                Enter the field office
                <span aria-hidden="true">↓</span>
              </a>
              <button className="secondary-button" onClick={() => setResourcesOpen(true)}>
                Open shop library
              </button>
            </div>
          </div>

          <div className="hero__scene">
            <div className="scene__skyline">
              <BridgeMark />
            </div>
            <div className="briefing-card">
              <div className="briefing-card__tape" />
              <span className="mono-label">INCOMING / 07:10</span>
              <p className="person-quote">
                “Start with the record. Then look at the bridge. Then tell me what
                you actually know.”
              </p>
              <p className="signature">— Diane Halvorsen, PE</p>
              <div className="crew-row">
                <span>PROJECT LEAD</span>
                <b>Diane Halvorsen, PE</b>
              </div>
              <div className="crew-row">
                <span>PROJECT ENGINEER</span>
                <b>Wes Tanaka, EIT</b>
              </div>
              <div className="crew-row crew-row--machine">
                <span>AUTOMATION</span>
                <b>FOREMAN v4.2</b>
              </div>
            </div>
          </div>
        </section>

        <section className="site-strip" aria-label="Project facts">
          <div>
            <span>01 / Structure</span>
            <strong>Vertical lift span</strong>
          </div>
          <div>
            <span>02 / Crossing</span>
            <strong>Kinnick River</strong>
          </div>
          <div>
            <span>03 / Client</span>
            <strong>Kinnick County Public Works</strong>
          </div>
          <div>
            <span>04 / Status</span>
            <strong>Mobilization</strong>
          </div>
        </section>

        <section className="job-board" id="job-board">
          <div className="section-intro">
            <div>
              <p className="eyebrow">The job board</p>
              <h2>Five units. One continuous assignment.</h2>
            </div>
            <p>
              Work the file in order. Each meeting adds evidence, responsibility,
              and a little less room to hide behind a confident answer.
            </p>
          </div>

          <div className="unit-layout">
            <nav className="unit-rail" aria-label="Course units">
              {units.map((item) => (
                <button
                  key={item.id}
                  className={item.id === activeUnit ? "is-active" : ""}
                  onClick={() => {
                    setActiveUnit(item.id);
                    if (item.meetings[0]) setActiveMeeting(item.meetings[0].id);
                  }}
                >
                  <span>{item.number}</span>
                  <span>
                    <small>{item.phase}</small>
                    <strong>{item.title}</strong>
                  </span>
                </button>
              ))}
            </nav>

            <div className="unit-file" key={unit.id}>
              <div className="unit-file__head">
                <div className="unit-stamp">UNIT {unit.number}</div>
                <div>
                  <span className="eyebrow">{unit.phase}</span>
                  <h3>{unit.title}</h3>
                  <p>{unit.subtitle}</p>
                </div>
              </div>
              {unit.meetings.length ? (
                <div className="meeting-list">
                  {unit.meetings.map((meeting, index) => (
                    <MeetingCard
                      key={meeting.id}
                      meeting={meeting}
                      index={index}
                      active={meeting.id === activeMeeting}
                      onOpen={() =>
                        setActiveMeeting(meeting.id === activeMeeting ? "" : meeting.id)
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="future-file">
                  <span className="future-file__rule" />
                  <p className="mono-label">FILE INDEX RESERVED</p>
                  <h4>This phase is being assembled.</h4>
                  <p>
                    Later meetings will appear here without changing the route through
                    the job. Complete the open field files first.
                  </p>
                  <span className="future-file__stamp">SEQUENCE HOLD</span>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="foreman-callout">
          <div>
            <span className="machine-label">FOREMAN v4.2</span>
            <p>“ALL REQUESTED OUTPUTS COMPLETE.”</p>
            <small>confidence 0.96 · no human review requested</small>
          </div>
          <div className="human-response">
            <span>YOUR MOVE</span>
            <p>Complete is not the same as correct.</p>
          </div>
        </section>
      </main>

      <footer>
        <Wordmark compact />
        <p>
          SEIS 201 · Fictional, schematic, and instructional. Not for design,
          construction, operation, or public-safety decisions.
        </p>
        <button className="text-button" onClick={() => setResourcesOpen(true)}>
          Guides + reference
        </button>
      </footer>
      <ResourceDrawer open={resourcesOpen} onClose={() => setResourcesOpen(false)} />
    </div>
  );
}

type InstructorGroup = {
  title: string;
  note: string;
  links: { label: string; url: string }[];
};

function InstructorShell() {
  const [password, setPassword] = useState("");
  const [groups, setGroups] = useState<InstructorGroup[] | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function authenticate(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/instructor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Access denied");
      setGroups(result.groups);
      setPassword("");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Access denied");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="instructor-site">
      <header className="topbar topbar--light">
        <a href="/" aria-label="Return to student home">
          <Wordmark compact />
        </a>
        <a className="text-button" href="/">
          Return to job board
        </a>
      </header>
      <main className="instructor-main">
        {!groups ? (
          <div className="gate">
            <div className="gate__mark">
              <BridgeMark />
            </div>
            <div className="gate__copy">
              <p className="eyebrow">Instructor entrance · Restricted file</p>
              <h1>Answer keys stay in this room.</h1>
              <p>
                Enter the course password to retrieve instructor-only links. These
                materials are not shipped in the public student application bundle.
              </p>
              <form onSubmit={authenticate}>
                <label htmlFor="instructor-password">Course password</label>
                <div className="password-row">
                  <input
                    id="instructor-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    autoFocus
                  />
                  <button className="primary-button" disabled={busy}>
                    {busy ? "Checking…" : "Open file"}
                  </button>
                </div>
                {error && <p className="form-error" role="alert">{error}</p>}
              </form>
            </div>
          </div>
        ) : (
          <div className="instructor-files">
            <div className="instructor-heading">
              <p className="eyebrow">Instructor file · Authenticated</p>
              <h1>Teaching desk</h1>
              <p>
                Keys and facilitation materials. Keep this screen out of student
                projection and LMS links.
              </p>
            </div>
            <div className="notice">
              <span>PACK STATUS</span>
              <p>
                The M02 instructor-reveal deck is not in the source repository yet.
                Add it here after PR #5 merges; never place it in the student map.
              </p>
            </div>
            <div className="instructor-groups">
              {groups.map((group) => (
                <section key={group.title}>
                  <span className="mono-label">RESTRICTED</span>
                  <h2>{group.title}</h2>
                  <p>{group.note}</p>
                  <div>
                    {group.links.map((link) => (
                      <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const path = window.location.pathname.replace(/\/+$/, "") || "/";
createRoot(document.getElementById("root")!).render(
  path === "/instructor" ? <InstructorShell /> : <StudentShell />,
);
