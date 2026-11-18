import React from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import ExternalLink from "../../components/ExternalLink";
import { ArrowRight } from "../../components/Icons";
import { clientCases, projectsData } from "../../data/projects";
import { gamesData } from "../../data/games";
import { gameThumb } from "../games/gameThumb";
import { slugify } from "../../utils/slug";

const TICKER = [
  "Definitions",
  "Specification",
  "Architecture",
  "Development",
  "Code review",
  "Continuous Integration",
  "Continuous Delivery",
  "Automated testing",
  "Deployment",
  "Accessibility",
  "Maintenance",
];

const STAGES = [
  { title: "Define", text: "Requirements, scope, specs and architecture worked out with customers and stakeholders.", tags: ["Specs", "Architecture"] },
  { title: "Build", text: "Frontend, backend and mobile — full-stack across web and native apps.", tags: ["Web", "Mobile", "APIs"] },
  { title: "Test", text: "Unit, frontend and E2E automation built in from day one.", tags: ["Unit", "E2E"] },
  { title: "Ship", text: "CI/CD pipelines, Azure cloud deployments and app store releases.", tags: ["CI/CD", "Azure"] },
  { title: "Maintain", text: "Monitoring, updates and iteration long after launch.", tags: ["Support", "Iteration"] },
];

const FEATURED_GAMES = ["Squiggly Now!", "Untitled Box Challenge", "Steam Machine", "Monster Twins"];

const LandingPage = () => {
  const [lead, ...otherCases] = clientCases;
  const personal = projectsData.filter((p) => p.image).slice(0, 3);
  const jams = FEATURED_GAMES.map((title) => gamesData.find((g) => g.title === title)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g)
  );

  return (
    <div className="p-home">
      <PageMeta
        title="Juho Heikkinen | Software Developer – Web, Mobile & Cloud"
        description="Portfolio of Juho Heikkinen – full-stack software developer from Finland covering the whole lifecycle: specs, web, mobile, backend, Azure cloud, CI/CD and maintenance."
        path="/"
      />

      <section className="hero" aria-labelledby="home-h">
        <div className="wrap herogrid">
          <div>
            <p className="kick fade" style={{ margin: 0 }}>
              <span className="acc" aria-hidden="true">●</span>  Full-stack software developer from Finland — since 2017
            </p>
            <h1 className="h1" id="home-h">
              <span className="ln"><span style={{ animationDelay: ".05s" }}>Software, end to end.</span></span>{" "}
              <span className="ln"><span style={{ animationDelay: ".17s" }}>From first idea</span></span>{" "}
              <span className="ln"><span style={{ animationDelay: ".29s" }}>to <em>production.</em></span></span>
            </h1>
            <p className="lede fade" style={{ animationDelay: ".5s" }}>
              Requirements and specs, frontend and backend, web and mobile, cloud and CI/CD, testing, release and
              maintenance — I cover the whole lifecycle. Nine years across three companies, for 15+ customers in the
              private and public sectors.
            </p>
            <div className="btns fade" style={{ animationDelay: ".65s" }}>
              <Link className="btn pri" to="/projects">
                View projects <ArrowRight />
              </Link>
              <Link className="btn" to="/about">How I work</Link>
              <Link className="btn" to="/contact">Get in touch</Link>
            </div>
          </div>

          <div className="visual">
            <figure className="portrait fade" style={{ animationDelay: ".25s" }}>
              <img src="/images/juho-profile-photo.jpg" alt="Portrait of Juho Heikkinen" width={800} height={800} />
              <figcaption className="mono" aria-hidden="true">
                JUHO HEIKKINEN<span>FULL-STACK · FI</span>
              </figcaption>
            </figure>
            <div
              className="term fade"
              style={{ animationDelay: ".4s" }}
              role="img"
              aria-label="Terminal summary: Juho Heikkinen, software developer in Finland. 9 years, 3 companies, 15+ customers. Stack: frontend, backend, mobile, cloud, CI/CD. Covers the whole lifecycle from spec to maintenance."
            >
              <div className="termbar" aria-hidden="true">
                <span className="dots"><i /><i /><i /></span>
                <span>~/juho — zsh</span>
                <span>80×24</span>
              </div>
              <div className="termbody" aria-hidden="true">
                <span className="tl" style={{ animationDelay: "1s" }}><span className="pr">$</span> whoami</span>
                <span className="tout" style={{ animationDelay: "1.7s" }}>juho heikkinen — full-stack developer, finland</span>
                <span className="tl" style={{ animationDelay: "2.1s", marginTop: 12 }}><span className="pr">$</span> cat experience.txt</span>
                <span className="tout" style={{ animationDelay: "2.8s" }}>09 yrs · 03 companies · 15+ customers</span>
                <span className="tl" style={{ animationDelay: "3.2s", marginTop: 12 }}><span className="pr">$</span> ls ./stack</span>
                <span className="tout" style={{ animationDelay: "3.9s" }}>
                  <span className="acc">frontend/</span>  <span className="acc">backend/</span>  <span className="acc">mobile/</span>  <span className="acc">cloud/</span>  <span className="acc">ci-cd/</span>
                </span>
                <span className="tl" style={{ animationDelay: "4.3s", marginTop: 12 }}><span className="pr">$</span> ./ship --from idea --to prod</span>
                <span className="tout" style={{ animationDelay: "5s" }}>spec → build → test → deploy → maintain <span className="acc">✓</span></span>
                <span className="tout" style={{ animationDelay: "5.4s", marginTop: 12 }}><span className="pr">$</span> <span className="caret" /></span>
              </div>
              <div className="termfoot" aria-hidden="true"><span>main ✓</span><span>reliable delivery · fast iteration</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <p className="visually-hidden">What I do: {TICKER.join(", ")}.</p>
        <div className="track" aria-hidden="true">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <section aria-label="Highlights">
        <div className="wrap" style={{ padding: 0 }}>
          <div className="stats">
            <div className="stat"><p className="kick" style={{ margin: 0 }}>[01] Years in industry</p><div className="num">09</div><p>Professional software work since 2017 across multiple product teams.</p></div>
            <div className="stat"><p className="kick" style={{ margin: 0 }}>[02] Companies</p><div className="num">03</div><p>Delivered projects for customers in both the private and public sectors.</p></div>
            <div className="stat"><p className="kick" style={{ margin: 0 }}>[03] Projects delivered</p><div className="num">15<sup>+</sup></div><p>Production apps and platforms shipped for customers across Finland.</p></div>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="work-h">
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick" style={{ margin: 0 }}>Professional work / customer projects</p><h2 className="h2" id="work-h">Selected client work</h2></div>
            <Link className="more" to="/projects">See all projects <ArrowRight size={16} /></Link>
          </div>
          <div className="cases">
            <Link className="case lead" to="/projects#cases" state={{ caseIndex: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="top"><span className="client">01 — {lead.client} · Healthcare &amp; public services</span></div>
                <h3>{lead.product}</h3>
                <p>{lead.description}</p>
                <p className="role"><b>Role</b>{lead.role}</p>
                <div className="tags">{lead.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
              <div className="kpis">
                {lead.figures.map((f) => (
                  <div className="kpi" key={f.label}><strong>{f.value}</strong><span>{f.label}</span></div>
                ))}
              </div>
            </Link>
            {otherCases.map((c, i) => (
              <Link className="case" to="/projects#cases" state={{ caseIndex: i + 1 }} key={c.client}>
                <div className="top"><span className="client">0{i + 2} — {c.client} · {c.sector}</span></div>
                <h3>{c.product}</h3>
                <p>{c.description}</p>
                <p className="role"><b>Role</b>{c.role}</p>
                <div className="kpis">
                  {c.figures.slice(0, 2).map((f) => (
                    <div className="kpi" key={f.label}><strong>{f.value}</strong><span>{f.label}</span></div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="life-h">
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick" style={{ margin: 0 }}>How I work / the whole lifecycle</p><h2 className="h2" id="life-h">One developer, every stage.</h2></div>
            <p style={{ margin: 0, maxWidth: 420, color: "var(--mu)" }}>
              No hand-offs lost between specialists — I take a product from the first conversation to the long tail of updates.
            </p>
          </div>
          <ol className="life">
            {STAGES.map((s, i) => (
              <li className="stage" key={s.title}>
                <span className="sn">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="side-h">
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick" style={{ margin: 0 }}>Personal projects / side quests</p><h2 className="h2" id="side-h">Built for fun, kept for real</h2></div>
            <Link className="more" to="/projects#side">See all projects <ArrowRight size={16} /></Link>
          </div>
          <div className="cards">
            {personal.map((p) => (
              <ExternalLink className="card" href={p.link} trackingLabel={p.title} trackingLocation="home" key={p.title}>
                <div className="shot">
                  <img src={p.image} alt={p.imageAlt ?? ""} loading="lazy" />
                  <span className="lab">{p.category.toUpperCase()}</span>
                </div>
                <div className="cbody">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="games-h">
        <div className="wrap">
          <div className="hobby">
            <div className="hobbyhead">
              <div>
                <p className="kick" style={{ margin: 0 }}>Off the clock / hobby</p>
                <h2 id="games-h">Game jams on the side <span className="start" aria-hidden="true">PRESS START</span></h2>
                <p>Weekend-sized games built against the clock — Godot, GameMaker and friends.</p>
              </div>
              <Link className="more" to="/games">All games <ArrowRight size={16} /></Link>
            </div>
            <ul className="jams">
              {jams.map((g) => (
                <li key={g.title}>
                  <Link className="jam" to="/games#level-select" state={{ game: slugify(g.title) }}>
                    <span className="thumb"><img src={gameThumb(g)} alt="" loading="lazy" /></span>
                    <b>{g.title}</b>
                    <small><span>{g.event}</span><em>{g.dateSort.slice(0, 4)}</em></small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap" aria-labelledby="cta-h">
        <div className="cta">
          <p className="kick" style={{ margin: 0 }}><span className="acc" aria-hidden="true">●</span>  Next step</p>
          <p className="big" id="cta-h"><Link to="/contact">Let&apos;s build something practical.</Link></p>
          <div className="btns">
            <Link className="btn pri" to="/contact">Contact me <ArrowRight /></Link>
            <Link className="btn" to="/about">About me</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
