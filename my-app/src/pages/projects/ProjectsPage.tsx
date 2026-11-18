import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import CtaStrip from "../../components/CtaStrip";
import ExternalLink from "../../components/ExternalLink";
import { ArrowRight, ArrowUpRight } from "../../components/Icons";
import { clientCases, projectsData } from "../../data/projects";
import { trackEvent } from "../../utils/analytics";

const pad = (n: number) => String(n).padStart(2, "0");
const CATEGORIES = ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];

const ProjectsPage = () => {
  const location = useLocation();
  const requested = (location.state as { caseIndex?: number } | null)?.caseIndex;
  const [tab, setTab] = useState(
    typeof requested === "number" && requested >= 0 && requested < clientCases.length ? requested : 0
  );
  const [category, setCategory] = useState("All");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const current = clientCases[tab];
  const visible = projectsData.filter((p) => category === "All" || p.category === category);

  const selectTab = (index: number, focus = false) => {
    setTab(index);
    trackEvent("case_select", { client: clientCases[index].client });
    if (focus) tabRefs.current[index]?.focus();
  };

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  const onTabKey = (event: React.KeyboardEvent, index: number) => {
    const last = clientCases.length - 1;
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowUp" || event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next !== null) {
      event.preventDefault();
      selectTab(next, true);
    }
  };

  return (
    <div className="p-projects">
      <PageMeta
        title="Projects – Juho Heikkinen | Software Developer"
        description="Client case studies (Seure, Keva, Kuusakoski) and personal side projects by Juho Heikkinen across web, mobile and cloud."
        path="/projects"
      />

      <section className="prhead" aria-labelledby="proj-h">
        <div className="wrap prgrid">
          <div>
            <p className="kick fade"><span className="acc" aria-hidden="true">●</span>  [04] Projects</p>
            <h1 className="ph1" id="proj-h">
              <span className="visually-hidden">Projects: </span>
              <span className="ln"><span style={{ animationDelay: ".05s" }}>Shipped for clients.</span></span>{" "}
              <span className="ln"><span style={{ animationDelay: ".17s" }}><em>Built for fun.</em></span></span>
            </h1>
            <p className="lede fade" style={{ animationDelay: ".45s" }}>
              Production apps used by thousands every day, and the side projects where I try out new ideas and tools.
            </p>
          </div>
          <nav aria-label="Project index">
            <ul className="toc">
              <li className="grp" style={{ animationDelay: ".3s" }}>Client work</li>
              {clientCases.map((c, i) => (
                <li key={c.client} style={{ animationDelay: `${0.35 + i * 0.05}s` }}>
                  <a href="#cases" onClick={() => selectTab(i)}>
                    <span className="k">{pad(i + 1)}</span>
                    <span>{c.client} — {c.product}</span>
                    <span className="g">{c.tech.includes("Web") ? "Web" : "Mobile"}</span>
                  </a>
                </li>
              ))}
              <li className="grp" style={{ animationDelay: ".5s" }}>Personal</li>
              <li style={{ animationDelay: ".55s" }}>
                <a href="#side">
                  <span className="k">{pad(clientCases.length + 1)}–{pad(clientCases.length + projectsData.length)}</span>
                  <span>Side projects</span>
                  <span className="g">Mixed</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="sec" id="cases" aria-labelledby="cases-h" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick">Client work / via Zure</p><h2 className="h2" id="cases-h">Case studies</h2></div>
            <p className="kick">{pad(clientCases.length)} cases</p>
          </div>
          <div className="viewer">
            <div className="rail" role="tablist" aria-label="Client case studies" aria-orientation="vertical">
              {clientCases.map((c, i) => (
                <button
                  type="button"
                  role="tab"
                  key={c.client}
                  id={`case-tab-${i}`}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  className={i === tab ? "tab sel" : "tab"}
                  aria-selected={i === tab}
                  aria-controls="case-panel"
                  tabIndex={i === tab ? 0 : -1}
                  onClick={() => selectTab(i)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  <span className="tn">{pad(i + 1)}</span>
                  <b>{c.client}</b>
                  <small>{c.product}</small>
                </button>
              ))}
            </div>
            {/* key remounts the panel so its entrance animation replays on every switch */}
            <article
              key={current.client}
              className="panel pa"
              role="tabpanel"
              id="case-panel"
              aria-labelledby={`case-tab-${tab}`}
              tabIndex={0}
            >
              <div className="ptop">
                <div>
                  <p className="kick">{pad(tab + 1)} / {current.sector}</p>
                  <h3 className="cname">{current.client}<em aria-hidden="true">.</em></h3>
                </div>
                <p className="role"><span>My role</span>{current.role}</p>
              </div>
              <p className="cdesc">{current.description}</p>
              <ul className="kpis">
                {current.figures.map((f) => (
                  <li key={f.label}><b>{f.value}</b><span>{f.label}</span></li>
                ))}
              </ul>
              <div className="pfoot">
                <div className="tags">{current.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <ExternalLink className="more" href={current.link} trackingLabel={`${current.client} case`} trackingLocation="projects">
                  Read the full case on zure.com <ArrowUpRight />
                </ExternalLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sec" id="side" aria-labelledby="side-h">
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick">Personal / open source</p><h2 className="h2" id="side-h">Side projects</h2></div>
            <div className="chips" role="group" aria-label="Filter side projects by category">
              {CATEGORIES.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={category === c ? "chip sel" : "chip"}
                  aria-pressed={category === c}
                  onClick={() => {
                    setCategory(c);
                    trackEvent("projects_filter", { category: c });
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <ol className="ledger" key={category}>
            {visible.map((p, i) => (
              <li className="row ra" style={{ animationDelay: `${i * 0.08}s` }} key={p.title}>
                <span className="n">{pad(clientCases.length + projectsData.indexOf(p) + 1)}</span>
                {p.image ? (
                  <span className="shot" style={{ backgroundImage: `url("${p.image}")` }} aria-hidden="true" />
                ) : (
                  <span className="shot mono" aria-hidden="true">{p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                )}
                <div><h3>{p.title}</h3><p>{p.description}</p></div>
                <div className="meta">
                  <span className="cat">{p.category}</span>
                  <div className="tags">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
                <ExternalLink
                  className="more go"
                  href={p.link}
                  ariaLabel={`${p.live ? "Open" : "View on GitHub:"} ${p.title}`}
                  trackingLabel={p.title}
                  trackingLocation="projects"
                >
                  {p.live ? "Open app" : "GitHub"} <ArrowUpRight />
                </ExternalLink>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaStrip text="Have a project that needs shipping?">
        <Link className="btn pri" to="/contact">Get in touch <ArrowRight /></Link>
        <Link className="btn" to="/games">See the games</Link>
      </CtaStrip>
    </div>
  );
};

export default ProjectsPage;
