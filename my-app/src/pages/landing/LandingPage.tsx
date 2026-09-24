import { Container } from "@mui/material";
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { gamesData } from "../../data/games";
import { projectsData, customerProjectsData } from "../../data/projects";
import NavLink from "../../components/NavLink";
import HighlightCard from "./HighlightCard";
import FeatureCard from "./FeatureCard";
import GameCard from "./GameCard";

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

  const featuredPersonalProjects = useMemo(() => projectsData.slice(0, 3), []);

  const featuredProjects = useMemo(() => customerProjectsData.slice(0, 3), []);

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
        <link referrerPolicy="origin" rel="canonical" href="https://crare.github.io/" />
      </Helmet>
      <section className="landing-hero">
        <Container maxWidth="lg">
          <div className="landing-hero-grid">
            <div className="landing-hero-copy">
              <p className="landing-eyebrow">Software developer from Finland</p>
              <h1 className="landing-title">
                {Array.from("Building practical software across cloud, web, mobile and game development.").map((char, idx) => (
                  <span
                    key={idx}
                    className="landing-title-char"
                    style={{ animationDelay: `${idx * 0.03}s` }}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <p className="landing-summary">
                I studied at Haaga-Helia University of Applied Sciences for Bachelor's Degree in ICT 2015-2018 and have worked in software since
                2017 across three companies, contributing to projects in both private and public
                sectors for 15+ customers. This site is the front door to that work.
              </p>
              <div className="landing-actions">
                <NavLink to="/projects" className="landing-button landing-button-primary" trackingPage="Projects">
                  View Projects
                </NavLink>
                <NavLink to="/games" className="landing-button landing-button-secondary" trackingPage="Games">
                  Browse Games
                </NavLink>
                <NavLink to="/contact" className="landing-button landing-button-secondary" trackingPage="Contact">
                  Contact
                </NavLink>
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
              <HighlightCard key={item.label} item={item} />
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
            <NavLink to="/projects" className="landing-section-link" trackingPage="Projects" trackingSource="featured_projects">
              See all projects
            </NavLink>
          </div>

          <div className="landing-feature-grid">
            {featuredProjects.map((project) => (
              <FeatureCard key={project.title} project={project} toAnchorId={toAnchorId} />
            ))}
          </div>
        </Container>
      </section>

      <section className="landing-section">
        <Container maxWidth="lg">
          <div className="landing-section-heading">
            <div>
              <p className="landing-section-kicker">Personal Projects</p>
              <h2 className="section-title">Featured Works</h2>
            </div>
            <NavLink to="/projects" className="landing-section-link" trackingPage="Projects" trackingSource="featured_personal_projects">
              See all works
            </NavLink>
          </div>

          <div className="landing-feature-grid">
            {featuredPersonalProjects.map((project) => (
              <FeatureCard key={project.title} project={project} toAnchorId={toAnchorId} />
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
            <NavLink to="/games" className="landing-section-link" trackingPage="Games" trackingSource="latest_games">
              Explore the archive
            </NavLink>
          </div>

          <div className="landing-game-list">
            {latestGames.map((game) => (
              <GameCard key={game.title} game={game} toAnchorId={toAnchorId} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
