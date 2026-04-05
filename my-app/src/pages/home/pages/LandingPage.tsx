import { Container } from "@mui/material";
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { gamesData } from "../data/games";
import { projectsData } from "../data/projects";

const toAnchorId = (prefix: string, title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${prefix}-${slug}`;
};

const LandingPage = () => {
  const experienceYears = Math.max(new Date().getFullYear() - 2017, 0);

  const latestGames = useMemo(
    () => [...gamesData].sort((a, b) => b.dateSort.localeCompare(a.dateSort)).slice(0, 3),
    []
  );

  const featuredProjects = useMemo(() => projectsData.slice(0, 3), []);

  const highlights = [
    {
      label: "Years in Industry",
      value: String(experienceYears).padStart(2, "0"),
      description: "Professional software work since 2017 across multiple product teams.",
    },
    {
      label: "Companies",
      value: "03",
      description: "Across three companies, delivered projects for many customers in private and public sectors.",
    },
    {
      label: "Projects Delivered",
      value: "15+",
      description: "Delivered for many customers across private and public sector engagements.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Juho Heikkinen | Software Developer – Web, Mobile &amp; Cloud</title>
        <meta name="description" content="Portfolio of Juho Heikkinen – software developer from Finland with 8+ years of experience in web, mobile, Azure cloud, and game development." />
        <meta property="og:title" content="Juho Heikkinen | Software Developer – Web, Mobile & Cloud" />
        <meta property="og:description" content="Portfolio of Juho Heikkinen – software developer from Finland with 8+ years of experience in web, mobile, Azure cloud, and game development." />
        <meta property="og:url" content="https://crare.github.io/" />
        <link rel="canonical" href="https://crare.github.io/" />
      </Helmet>
      <section className="landing-hero">
        <Container maxWidth="lg">
          <div className="landing-hero-grid">
            <div className="landing-hero-copy">
              <p className="landing-eyebrow">Software developer from Finland</p>
              <h1 className="landing-title">
                Building practical software across cloud, web, mobile and game development.
              </h1>
              <p className="landing-summary">
                I studied at Haaga-Helia University of Applied Sciences for Bachelor's Degree in ICT 2015-2018 and have worked in software since
                2017 across three companies, contributing to projects in both private and public
                sectors for 15+ customers. This site is the front door to that work.
              </p>
              <div className="landing-actions">
                <RouterLink to="/projects" className="landing-button landing-button-primary">
                  View Projects
                </RouterLink>
                <RouterLink to="/games" className="landing-button landing-button-secondary">
                  Browse Games
                </RouterLink>
                <RouterLink to="/contact" className="landing-inline-link">
                  Contact
                </RouterLink>
              </div>
            </div>

            <aside className="landing-focus-card" aria-label="Current focus">
              <p className="landing-focus-label">Current Focus</p>
              <h3>Reliable delivery, practical products, fast iteration.</h3>
              <ul className="landing-focus-list">
                <li>{experienceYears} years of professional development experience since 2017</li>
                <li>Azure and mobile app work with production constraints in mind</li>
                <li>Test-focused delivery with unit, frontend, and E2E automation in CI pipelines</li>
                <li>Hands-on experiments in games, tooling, and automation</li>
                <li>Delivery experience across both private and public sectors for 15+ customers</li>
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <section className="landing-highlights">
        <Container maxWidth="lg">
          <div className="landing-highlights-grid">
            {highlights.map((item) => (
              <article key={item.label} className="landing-highlight-card">
                <p className="landing-highlight-value">{item.value}</p>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="landing-section">
        <Container maxWidth="lg">
          <div className="landing-section-heading">
            <div>
              <p className="landing-section-kicker">Selected Work</p>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <RouterLink to="/projects" className="landing-section-link">
              See all projects
            </RouterLink>
          </div>

          <div className="landing-feature-grid">
            {featuredProjects.map((project) => (
              <RouterLink
                key={project.title}
                to={`/projects#${toAnchorId("project", project.title)}`}
                className="landing-card-link"
                aria-label={`Open projects page from ${project.title}`}
              >
                <article className="landing-feature-card">
                  <div className="landing-feature-topline">
                    <span className="landing-feature-category">{project.category}</span>
                    <div className="landing-feature-icon">{project.icon}</div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="landing-chip-row">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </RouterLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="landing-section landing-section-alt">
        <Container maxWidth="lg">
          <div className="landing-section-heading">
            <div>
              <p className="landing-section-kicker">Latest Releases</p>
              <h2 className="section-title">Recent Game Work</h2>
            </div>
            <RouterLink to="/games" className="landing-section-link">
              Explore the archive
            </RouterLink>
          </div>

          <div className="landing-game-list">
            {latestGames.map((game) => (
              <RouterLink
                key={game.title}
                to={`/games#${toAnchorId("game", game.title)}`}
                className="landing-card-link"
                aria-label={`Open games page from ${game.title}`}
              >
                <article className="landing-game-card">
                  <div className="landing-game-header">
                    <h3>{game.title}</h3>
                    <span className="game-date-chip">{game.dateLabel}</span>
                  </div>
                  <p className="landing-game-description">{game.description}</p>
                  <p className="landing-game-details">{game.details}</p>
                  <div className="landing-chip-row">
                    {game.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </RouterLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;