import React, { useRef, useState } from "react";
import ExternalLink from "../../components/ExternalLink";
import { ArrowUp } from "../../components/Icons";
import { clientCases, projectsData } from "../../data/projects";
import { aiTools, familiarSkillsData, skillsData } from "../../data/skills";
import { certificates, education, workExperiences } from "../../data/work-experience";
import { contacts } from "../../data/contacts";
import { gamesData } from "../../data/games";
import { gameThumb } from "../../utils/gameThumb";
import { trackEvent } from "../../utils/analytics";

export const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "side", label: "Side projects" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact" },
];

const FEATURED_GAMES = ["Squiggly Now!", "Untitled Box Challenge", "Steam Machine", "Monster Twins"];

/** Shown at about 230px on desktop; full column width (capped at 440px) on phones. */
const SCREENSHOT_SIZES = "(max-width: 900px) min(440px, calc(100vw - 60px)), 230px";

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
/** Small counts read better as words in running text. */
const countInWords = (n: number) => NUMBER_WORDS[n] ?? String(n);

/** "a, b and c" */
const listToText = (items: string[]) =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const featured = projectsData.filter((p) => p.image);
  const others = projectsData.filter((p) => !p.image);
  const jams = FEATURED_GAMES.map((title) => gamesData.find((g) => g.title === title)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g)
  );
  const firstJamYear = gamesData.map((g) => g.dateSort.slice(0, 4)).sort()[0];

  const goTo = (id: string) => {
    setMenuOpen(false);
    trackEvent("navigation_click", { section: id });
  };

  return (
    <div className="col">
      <header className="mast">
        <a className="name" href="#top" onClick={() => goTo("top")}>
          Juho Heikkinen<span>Software developer, Finland</span>
        </a>
        <nav
          aria-label="On this page"
          onKeyDown={(e) => {
            if (e.key === "Escape" && menuOpen) {
              setMenuOpen(false);
              // The focused link is about to be hidden; move focus back to the button.
              burgerRef.current?.focus();
            }
          }}
        >
          <button
            type="button"
            ref={burgerRef}
            className="burger"
            aria-controls="menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="l1" />
            <span className="l2" />
            <span className="l3" />
          </button>
          <ul className={menuOpen ? "menu open" : "menu"} id="menu">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={s.id === "contact" ? "menucta" : undefined}
                  onClick={() => goTo(s.id)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="open" id="top" aria-labelledby="intro">
          <div>
            <h1 id="intro">I build web and mobile apps, and the cloud services behind them.</h1>
            <p className="lede">
              I’m Juho, a software developer in Finland. I’ve worked in the field since 2017, at three companies and
              for more than 15 customers in the private and public sectors. I usually stay with a project from the first
              requirements until long after it’s released.
            </p>
            <p className="now">Right now I’m a full-stack developer at Zure, mostly on Microsoft Azure.</p>
            <div className="go">
              <a className="cta" href="#contact" onClick={() => goTo("contact")}>
                Get in touch
              </a>
              <a href="#work" onClick={() => goTo("work")}>
                See my client work
              </a>
            </div>
          </div>
          <figure className="portrait">
            <span className="frame">
              <img
                src="/images/juho-profile-photo.jpg"
                alt="Juho Heikkinen, smiling, in a library with wooden bookshelves"
                width={800}
                height={800}
              />
            </span>
          </figure>
        </section>

        <section className="sec" id="work" aria-labelledby="work-h">
          <h2 id="work-h">Client work</h2>
          <div>
            <p className="intro">Three projects from my time at Zure. Each has a public case study with more detail.</p>
            <ol className="work">
              {clientCases.map((c) => (
                <li className="entry" key={c.client}>
                  <div className="who">
                    <b>{c.client}</b>
                    {c.sector}
                  </div>
                  <div>
                    <h3>{c.headline}</h3>
                    <p>{c.description}</p>
                    <p className="facts">{c.facts}</p>
                    <ExternalLink href={c.link} trackingLabel={`${c.client} case`} trackingLocation="work">
                      Read the case study at zure.com<span className="visually-hidden"> ({c.client})</span>
                    </ExternalLink>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec" id="about" aria-labelledby="about-h">
          <h2 id="about-h">A bit about me</h2>
          <div className="body">
            <p className="first">
              I like software that people can rely on in their working day, and that the next developer can still make
              sense of a few years later.
            </p>
            <p>
              I got into the field by studying IT at Haaga-Helia, and I was already working as a developer in 2017, a
              year before I graduated. I’ve been learning on the job ever since, and I still enjoy that part the most.
            </p>
            <p>
              I learn best by building things. That’s why my evenings and weekends often go into small games, web and
              mobile apps, or tinkering with IoT and home automation at home. When I’m away from the screen, I’m usually
              running, cycling or at the gym.
            </p>

            <h3 className="sub">Where I’ve worked</h3>
            <ol className="career">
              {workExperiences.map((job) => (
                <li className="job" key={job.company}>
                  <span className="when">{job.dateRange}</span>
                  <div>
                    <h4>{job.company}</h4>
                    <p>{job.summary}</p>
                  </div>
                </li>
              ))}
              <li className="job">
                <span className="when">{education.years}</span>
                <div>
                  <h4>{education.school}</h4>
                  <p>{education.degree}</p>
                </div>
              </li>
            </ol>

            <h3 className="sub">Certificates</h3>
            <ul className="certs">
              {certificates.map((c) => (
                <li key={c.name}>
                  {c.name}
                  <span>
                    {c.issuer}. Issued {c.issued}
                    {c.expires ? `, expires ${c.expires}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec" id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h">Skills</h2>
          <div className="body">
            <p>
              I’m a generalist on purpose. On a typical project I help define the requirements and the architecture,
              build the frontend, backend and mobile app, set up CI/CD and automated tests, ship it, and then keep it
              running and up to date.
            </p>
            <dl className="skills" style={{ marginTop: 32 }}>
              {skillsData.map((s) => (
                <div key={s.title}>
                  <dt>{s.title}</dt>
                  <dd>
                    <p>{s.description}</p>
                    <span className="tools">{s.toolkit.join(", ")}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="sub">How I use AI</h3>
            <p>
              AI tools are part of almost every step of my work now: planning, design, development and maintenance, both
              at work and in my own projects. I work with {listToText(aiTools)}.
            </p>

            <h3 className="sub">Other tools I’ve used</h3>
            <dl className="also">
              {familiarSkillsData.map((cat) => (
                <div key={cat.title}>
                  <dt>{cat.title}</dt>
                  <dd>{cat.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="sec" id="side" aria-labelledby="side-h">
          <h2 id="side-h">Side projects</h2>
          <div>
            <p className="intro">Small things I’ve built to learn something new, or because I needed them.</p>
            <ul className="made">
              {featured.map((p) => (
                <li key={p.title}>
                  <ExternalLink href={p.link} trackingLabel={p.title} trackingLocation="side-projects">
                    {p.image && (
                      <span className="frame">
                        <img
                          src={p.image.small}
                          srcSet={`${p.image.small} ${p.image.smallWidth}w, ${p.image.large} ${p.image.largeWidth}w`}
                          sizes={SCREENSHOT_SIZES}
                          alt={p.imageAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    )}
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </ExternalLink>
                </li>
              ))}
            </ul>
            {others.length > 0 && (
              <ul className="index" style={{ marginTop: 32 }}>
                {others.map((p) => (
                  <li key={p.title}>
                    <b>{p.title}</b>
                    <p>{p.description}</p>
                    <ExternalLink href={p.link} trackingLabel={p.title} trackingLocation="side-projects">
                      Code on GitHub<span className="visually-hidden"> ({p.title})</span>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="sec" id="games" aria-labelledby="games-h">
          <h2 id="games-h">Game jams</h2>
          <div className="body">
            <p>
              Since {firstJamYear} I’ve made {countInWords(gamesData.length)} small games, mostly
              at weekend game jams, in Godot, Unity and GameMaker. It’s a hobby, and a good way to practise finishing
              things on a deadline. They’re all free to play on itch.io.
            </p>
            <ul className="strip">
              {jams.map((g) => (
                <li key={g.title}>
                  <span className="frame">
                    <img src={gameThumb(g)} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span>
                    <b>{g.title}</b>
                    {g.event}, {g.dateSort.slice(0, 4)}
                  </span>
                </li>
              ))}
            </ul>
            <ExternalLink className="more" href="https://jukepoks1.itch.io/" trackingLabel="itch.io" trackingLocation="games">
              See all my games on itch.io
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer>
        <section className="end" id="contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Get in touch</h2>
          <div>
            <p>For work, email me or message me on LinkedIn. My code is on GitHub, and my games are on itch.io.</p>
            <ul className="links">
              {contacts.map((c) => (
                <li key={c.id}>
                  {c.link.startsWith("mailto:") ? (
                    <a href={c.link} onClick={() => trackEvent("contact_click", { channel: c.label })}>
                      {c.label}
                    </a>
                  ) : (
                    <ExternalLink href={c.link} trackingLabel={c.label} trackingLocation="contact">
                      {c.label}
                    </ExternalLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div className="colophon">
          <p>© Juho Heikkinen</p>
          <p>Anonymous analytics are collected.</p>
        </div>
      </footer>

      <a className="totop" href="#top" aria-label="Back to top" onClick={() => goTo("top")}>
        <ArrowUp />
      </a>
    </div>
  );
};

export default HomePage;
