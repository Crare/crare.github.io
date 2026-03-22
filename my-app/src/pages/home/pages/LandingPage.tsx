import { Container } from "@mui/material";
import React, { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gamesData } from "../data/games";
import { projectsData } from "../data/projects";

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
      description: "Experience across three companies in both private and public sector work.",
    },
    {
      label: "Projects",
      value: String(projectsData.length).padStart(2, "0"),
      description: "Web, mobile, automation, and engine-side builds alongside game projects.",
    },
  ];

  return (
    <>
      <section className="landing-hero">
        <Container maxWidth="lg">
          <div className="landing-hero-grid">
            <div className="landing-hero-copy">
              <p className="landing-eyebrow">Software developer from Finland</p>
              <h2 className="landing-title">
                Building practical software across cloud, mobile, and game development.
              </h2>
              <p className="landing-summary">
                I studied at Haaga-Helia from 2015 to 2018 and have worked in software since
                2017 across three companies, contributing to projects in both private and public
                sectors. This site is the front door to that work.
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
                <li>Hands-on experiments in games, tooling, and automation</li>
                <li>Delivery experience across both private and public sector projects</li>
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
              <article key={project.title} className="landing-feature-card">
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
              <article key={game.title} className="landing-game-card">
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
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;