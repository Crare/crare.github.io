import { Grid, Link, Typography, Box, Container } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import FadeInText from "./FadeInText";
import { trackEvent, trackPageView } from "../../utils/analytics";
import vocabularyAppImage from "../../img/vocabulary-app.png";
import vocabularyAppImage2 from "../../img/vocabulary-app2.png";
import vocabularyAppImage3 from "../../img/vocabulary-app3.png";
import telegramBotImage from "../../img/telegrambot.png";
import gameEngineImage from "../../img/gameengine.png";
import vocabularyAppThumb from "../../img/vocabulary-app-thumb.jpg";
import vocabularyAppThumb2 from "../../img/vocabulary-app2-thumb.jpg";
import vocabularyAppThumb3 from "../../img/vocabulary-app3-thumb.jpg";
import telegramBotThumb from "../../img/telegrambot-thumb.jpg";
import gameEngineThumb from "../../img/gameengine-thumb.jpg";

const subTitles = [
  "Full-Stack Developer",
  "Mobile Apps",
  "Cloud & Azure",
  ".NET & C#",
  "React & TypeScript",
];

const LazyHoverImage = ({ thumb, full, thumbAlt, wrapperClass, badge }: {
  thumb: string;
  full: string;
  thumbAlt: string;
  wrapperClass: string;
  badge?: React.ReactNode;
}) => {
  const [loaded, setLoaded] = useState(false);
  const isProject = wrapperClass === "project-image-wrapper";
  return (
    <div className={wrapperClass} onMouseEnter={() => setLoaded(true)}>
      {thumb ? (
        <img
          className={isProject ? "project-image" : "game-image-thumb"}
          src={thumb}
          alt={thumbAlt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="game-image-thumb game-empty-thumb" aria-hidden="true" />
      )}
      {badge}
      <div className={isProject ? "project-image-preview" : "game-image-preview"} aria-hidden="true">
        {loaded && (
          <img
            className={isProject ? "project-image-preview-large" : "game-image-preview-large"}
            src={full}
            alt=""
            decoding="async"
          />
        )}
      </div>
    </div>
  );
};

const Home = () => {

    // Track page view
  useEffect(() => {
    trackPageView("home");
    trackEvent("page_view", { page: "home" });
  }, []);
  
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href;
      const gc = (window as any).goatcounter;

      if (gc && typeof gc.count === 'function') {
        const path = `/link-click${new URL(href).pathname}`;
        gc.count({ path, title: `Link to ${href}`, event: true });
      }
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  const projects = useMemo(() => [
    {
      title: "Vocabulary Trainer",
      category: "Web",
      tech: ["React", "TypeScript"],
      description: "React TypeScript website to memorize new vocabulary in any language with interactive learning.",
      link: "https://crare.github.io/vocabulary-app?ref=githubpages",
      images: [
        { thumb: vocabularyAppThumb, full: vocabularyAppImage },
        { thumb: vocabularyAppThumb2, full: vocabularyAppImage2 },
        { thumb: vocabularyAppThumb3, full: vocabularyAppImage3 },
      ],
      icon: <MenuBookIcon className="project-title-icon" />,
    },
    {
      title: "Telegram Bot",
      category: "Cloud",
      tech: ["APIs", "Automation"],
      description: "Bot for mobile chat-apps with API calls to news, trains, and open-source endpoints.",
      link: "https://github.com/Crare/telegrambot",
      images: [{ thumb: telegramBotThumb, full: telegramBotImage }],
      icon: <SmartToyIcon className="project-title-icon" />,
    },
    {
      title: "Game Engine",
      category: "Systems",
      tech: ["C#", "MonoGame", "XNA"],
      description: "2D Game Engine built with C#, MonoGame and XNA-framework. Pong & Pacman clones included.",
      link: "https://github.com/Crare/GameEnginePublic",
      images: [{ thumb: gameEngineThumb, full: gameEngineImage }],
      icon: <SportsEsportsIcon className="project-title-icon" />,
    },
    {
      title: "Fridge App",
      category: "Mobile",
      tech: ["React Native", "Shopping"],
      description: "React-Native app for shopping and storing food. Track inventory across your devices.",
      link: "https://github.com/Crare/fridge",
      icon: <PhoneAndroidIcon className="project-title-icon" />,
    },
    {
      title: "Organize Files",
      category: "Utilities",
      tech: ["File Management"],
      description: "Organizes files into folders by year & month. Perfect for managing photo libraries.",
      link: "https://github.com/Crare/organizeFiles",
      icon: <FolderOpenIcon className="project-title-icon" />,
    },
  ], []);

  const skills = useMemo(() => [
    {
      title: "Mobile Development",
      icon: <PhoneAndroidIcon />,
      description: "React Native expertise for cross-platform mobile applications",
    },
    {
      title: "Cloud & Azure",
      icon: <CloudIcon />,
      description: "Cloud infrastructure and Azure cloud services deployment",
    },
  ], []);

  const games = useMemo(() => [
    {
      title: "Squiggly Now!",
      description: "Use DNA to evolve and obtain new abilities.",
      details: "Made with Godot game engine. This is a submission entry for Mini Jam 186, held June 7 to 9, 2025. Theme: Evolution. Limitation: Failure is progress.",
      link: "https://jukepoks1.itch.io/squiggly-now",
      collaboration: "solo",
      dateLabel: "Jun 2025",
      dateSort: "2025-06-08",
      media: [
        "https://img.itch.zone/aW1hZ2UvMzYyNTE4Ny8yMTU3NDExMy5wbmc=/original/t6d%2Ffv.png",
        "https://img.itch.zone/aW1hZ2UvMzYyNTE4Ny8yMTU3NDU3OS5wbmc=/original/RSOwFI.png",
        "https://img.itch.zone/aW1hZ2UvMzYyNTE4Ny8yMTU3NDQ4NC5naWY=/original/bKqXHg.gif",
        "https://img.itch.zone/aW1hZ2UvMzYyNTE4Ny8yMTYwMjk0OC5naWY=/original/Vd%2Frbv.gif",
      ],
      tags: ["solo", "godot", "game jam", "evolution"],
    },
    {
      title: "Untitled Box Challenge",
      description: "Get all the lights while the arena gets harder by every move.",
      details: "Made for Godot Wild Jam 72 on 9th - 18th August 2024. Theme was Light and Dark.",
      link: "https://jukepoks1.itch.io/untitled-box-challenge",
      collaboration: "solo",
      dateLabel: "Aug 2024",
      dateSort: "2024-08-13",
      media: [
        "https://img.itch.zone/aW1hZ2UvMjg5NzEwNy8xNzMzNjY0NC5wbmc=/original/TieJ%2Bu.png",
        "https://img.itch.zone/aW1hZ2UvMjg5NzEwNy8xNzMzNjY0Ny5wbmc=/original/F3Canr.png",
        "https://img.itch.zone/aW1hZ2UvMjg5NzEwNy8xNzMzNjY0Ni5wbmc=/original/9ImzCY.png",
        "https://img.itch.zone/aW1hZ2UvMjg5NzEwNy8xNzMzNjY0OC5wbmc=/original/ZQqCIc.png",
      ],
      tags: ["solo", "godot", "game jam", "light and dark"],
    },
    {
      title: "Berry Moon",
      description: "Pokemon-style turn-based top-down game with berry-picking, combat, and a shop.",
      details: "Made for Godot Wild Jam #71 (July 12 to July 21, 2024).",
      link: "https://jukepoks1.itch.io/berry-moon",
      collaboration: "solo",
      dateLabel: "Jul 2024",
      dateSort: "2024-07-16",
      media: [
        "https://img.itch.zone/aW1hZ2UvMjg0MTc1NC8xNjk4MDk0My5wbmc=/original/TXhHKw.png",
        "https://img.itch.zone/aW1hZ2UvMjg0MTc1NC8xNjk4MDk0OS5wbmc=/original/eA4n5%2F.png",
      ],
      tags: ["solo", "godot", "game jam", "turn-based"],
    },
    {
      title: "Steam Machine",
      description: "Prototype about cogs and steam, created as a work-in-progress jam project.",
      details: "Made for Weekly Game Jam - Week 26.",
      link: "https://jukepoks1.itch.io/steam-machine",
      collaboration: "solo",
      dateLabel: "Jan 2018",
      dateSort: "2018-01-18",
      media: [
        "https://img.itch.zone/aW1hZ2UvMjEyOTQxLzEwMTg5MDcuZ2lm/original/iv9KiV.gif",
        "https://img.itch.zone/aW1hZ2UvMjEyOTQxLzEwMTg5MTcuZ2lm/original/eNFTGu.gif",
      ],
      tags: ["solo", "godot", "game jam", "prototype"],
    },
    {
      title: "Shift Shaper!",
      description: "Shape-shifting infinity-runner where you fit through deadly walls.",
      details: "Ludum Dare 35 era prototype with increasing difficulty.",
      link: "https://jukepoks1.itch.io/shift-shaper",
      collaboration: "solo",
      dateLabel: "Apr 2016",
      dateSort: "2016-04-16",
      media: ["https://img.itch.zone/aW1hZ2UvNjMwNDgvMjg0NjM5LnBuZw==/original/rgaVw9.png"],
      tags: ["solo", "unity", "runner", "prototype"],
    },
    {
      title: "Monster Twins",
      description: "Puzzle platformer with two synced monsters and inverse gravity.",
      details: "Made for Ludum Dare 33 (2015).",
      link: "https://jukepoks1.itch.io/monster-twins",
      collaboration: "solo",
      dateLabel: "Aug 2015",
      dateSort: "2015-08-23",
      media: ["https://img.itch.zone/aW1hZ2UvOTU4NjMvNDQ4ODAyLmdpZg==/original/fWfXDL.gif"],
      tags: ["solo", "ludum dare", "puzzle", "platformer"],
    },
    {
      title: "3D bomber",
      description: "Prototype about bombs and blowing out rocks, inspired by Bomberman and Minecraft.",
      details: "Early concept build with inventory and bomb-type experimentation.",
      link: "https://jukepoks1.itch.io/bomber",
      collaboration: "solo",
      dateLabel: "Feb 2018",
      dateSort: "2018-02-10",
      media: ["https://img.itch.zone/aW1hZ2UvMjIzNTg3LzEwNTU1ODEuZ2lm/original/KVOBkv.gif"],
      tags: ["solo", "prototype", "3d", "action"],
    },
    {
      title: "LAG CAN KILL YOU BRO",
      description: "Race against time and your dangerous mirrored brother to collect all coins.",
      details: "Made for Weekly Game Jam - Week 25.",
      link: "https://jukepoks1.itch.io/lag-can-kill-you-bro",
      collaboration: "team",
      dateLabel: "Jan 2018",
      dateSort: "2018-01-12",
      media: [
        "https://img.itch.zone/aW1hZ2UvMjExMzExLzk5NDU3Ni5wbmc=/original/0YHwgy.png",
        "https://img.itch.zone/aW1hZ2UvMjExMzExLzk5NDAyMC5wbmc=/original/gKGRaq.png",
        "https://img.itch.zone/aW1hZ2UvMjExMzExLzk5NDAyMS5wbmc=/original/7rBziE.png",
        "https://img.itch.zone/aW1hZ2UvMjExMzExLzk5NDAyMi5wbmc=/original/PVGly%2F.png",
        "https://img.itch.zone/aW1hZ2UvMjExMzExLzk5NDU3NS5naWY=/original/3iyM3B.gif",
      ],
      tags: ["team", "game jam", "arcade", "co-op"],
    },
    {
      title: "Nuclear meltdown",
      description: "Interactive fiction about shutting down a nuclear reactor without raising alarms.",
      details: "Made for ASM Game Jam 25 at Assembly Summer 2025.",
      link: "https://jukepoks1.itch.io/nuclear-meltdown",
      collaboration: "team",
      dateLabel: "Aug 2025",
      dateSort: "2025-08-01",
      media: [
        "https://img.itch.zone/aW1hZ2UvMzc3MzQ5MS8yMjQ4MDAxMy5wbmc=/original/XJdNRV.png",
        "https://img.itch.zone/aW1hZ2UvMzc3MzQ5MS8yMjQ4MDAxNC5wbmc=/original/5EY4OA.png",
        "https://img.itch.zone/aW1hZ2UvMzc3MzQ5MS8yMjQ4MDAxNS5wbmc=/original/OHqTFo.png",
        "https://img.itch.zone/aW1hZ2UvMzc3MzQ5MS8yMjQ4MDAyMS5wbmc=/original/EtTeoG.png",
        "https://img.itch.zone/aW1hZ2UvMzc3MzQ5MS8yMjQ4MDAyNC5wbmc=/original/WLKHc3.png",
        "https://img.itch.zone/aW1nLzIyNDgwMDA3LnBuZw==/original/VALPrQ.png",
      ],
      tags: ["team", "interactive fiction", "game jam"],
    },
    {
      title: "Excavation: Earth",
      description: "Explore a submerged post-apocalyptic Earth and interpret clues as an alien archeologist.",
      details: "Made for Pride Game Jam HKI 2025 (theme: Under the Surface).",
      link: "https://jukepoks1.itch.io/excavation-earth",
      collaboration: "team",
      dateLabel: "Jun 2025",
      dateSort: "2025-06-28",
      media: [
        "https://img.itch.zone/aW1hZ2UvMzY3OTc0Mi8yMTg5OTUxNi5wbmc=/original/6AQEZx.png",
        "https://img.itch.zone/aW1hZ2UvMzY3OTc0Mi8yMTkwODk5OC5wbmc=/original/jDu8hY.png",
        "https://img.itch.zone/aW1hZ2UvMzY3OTc0Mi8yMTkwOTAwMC5wbmc=/original/tLMKT5.png",
        "https://img.itch.zone/aW1hZ2UvMzY3OTc0Mi8yMTkwODk5OS5wbmc=/original/y4NVXh.png",
        "https://img.itch.zone/aW1nLzIyMTEwMjkxLnBuZw==/original/%2FhAJ2b.png",
      ],
      tags: ["team", "game jam", "narrative", "exploration"],
    },
    {
      title: "The Limited - club",
      description: "Short narrative club story with reflex-based minigames.",
      details: "Story-driven rhythm-leaning experience with team-made credits.",
      link: "https://jukepoks1.itch.io/the-limited",
      collaboration: "team",
      dateLabel: "Oct 2023",
      dateSort: "2023-10-01",
      media: ["https://img.itch.zone/aW1hZ2UvMjI4OTE5MS8xMzYwNTgzOS5wbmc=/original/2Cj5lq.png"],
      tags: ["team", "story", "minigames", "rhythm"],
    },
  ], []);

  const [activeGameTag, setActiveGameTag] = useState("all");

  const gameTags = useMemo(() => {
    const tags = Array.from(new Set(games.flatMap((game) => game.tags))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["all", ...tags];
  }, [games]);

  const filteredGames = useMemo(() => {
    const byDate = [...games].sort((a, b) => b.dateSort.localeCompare(a.dateSort));
    if (activeGameTag === "all") {
      return byDate;
    }
    return byDate.filter((game) => game.tags.includes(activeGameTag));
  }, [games, activeGameTag]);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <Container maxWidth="lg">
          <h1 className="title">Juho Heikkinen</h1>
          <div className="subtitle-container">
            {subTitles.map((skill, idx) => (
              <FadeInText key={idx} subTitle={skill} index={idx} />
            ))}
          </div>
        </Container>
      </div>

      {/* Featured Skills Section */}
      <div className="skills-section">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            {skill.icon}
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      {/* About Me Section */}
      <section className="about-section">
        <Container maxWidth="lg">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p>
              I'm passionate about coding and creating software that makes a difference. I studied ICT at Haaga-Helia University of Applied Sciences, specializing in software development, which gave me a solid foundation in practical programming and systems design.
            </p>
            <p>
              Beyond my professional work, I love exploring game development and building mobile apps in my free time. These projects push me to expand my skills and experiment with new technologies.
            </p>
            <p>
              When I'm not coding, you'll find me staying active outdoors—cycling, running, and working out at the gym keep me balanced and energized. I believe in continuous learning and challenging myself both mentally and physically.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container maxWidth="lg">
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <LinkedInIcon />
              <Link
                href="https://www.linkedin.com/in/juhopmheikkinen/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <div className="contact-description">Connect professionally</div>
            </div>
            <div className="contact-card">
              <GitHubIcon />
              <Link href="https://github.com/Crare" target="_blank">
                GitHub
              </Link>
              <div className="contact-description">View source code</div>
            </div>
            <div className="contact-card">
              <CloudIcon />
              <Link href="https://jukepoks1.itch.io/" target="_blank">
                Itch.io
              </Link>
              <div className="contact-description">Game portfolio</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <Container maxWidth="lg">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                {project.images && (
                  <div className="project-image-row">
                    {project.images.map((img, imageIdx) => (
                      <LazyHoverImage
                        key={imageIdx}
                        thumb={img.thumb}
                        full={img.full}
                        thumbAlt={`${project.title} preview ${imageIdx + 1}`}
                        wrapperClass="project-image-wrapper"
                      />
                    ))}
                  </div>
                )}
                <div className="project-title-row">
                  {project.icon}
                  <h4>
                    <Link href={project.link} target="_blank">
                      {project.title}
                    </Link>
                  </h4>
                </div>
                <p className="project-description">{project.description}</p>
                <div>
                  {project.tech.map((tech, tidx) => (
                    <span key={tidx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Games Section */}
      <section className="games-section">
        <Container maxWidth="lg">
          <h2 className="section-title">Games</h2>
          <div className="game-filters" role="group" aria-label="Filter games by tag">
            {gameTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`game-filter-chip ${activeGameTag === tag ? "active" : ""}`}
                onClick={() => setActiveGameTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="games-grid">
            {filteredGames.map((game, idx) => {
              const hasGif = game.media.some((src) => src.toLowerCase().includes(".gif"));
              const staticMedia = game.media.filter((src) => !src.toLowerCase().includes(".gif"));
              const gifMedia = game.media.filter((src) => src.toLowerCase().includes(".gif"));
              const thumbnailMedia = staticMedia.length > 0 ? staticMedia : [];
              const fallbackThumb = staticMedia[0] || "";

              return (
              <div key={idx} className="game-card">
                <div className="game-media-header">
                  <div className="game-media-column">
                    <div className="game-media-row">
                      {thumbnailMedia.map((imageSrc, imageIdx) => (
                        <LazyHoverImage
                          key={imageIdx}
                          thumb={imageSrc}
                          full={imageSrc}
                          thumbAlt={`${game.title} media ${imageIdx + 1}`}
                          wrapperClass="game-image-wrapper"
                        />
                      ))}
                      {gifMedia.map((gifSrc, gifIdx) => (
                        <LazyHoverImage
                          key={`gif-${gifIdx}`}
                          thumb={fallbackThumb}
                          full={gifSrc}
                          thumbAlt={`${game.title} gif preview ${gifIdx + 1}`}
                          wrapperClass="game-image-wrapper game-gif-trigger"
                          badge={<div className="game-gif-badge">GIF</div>}
                        />
                      ))}
                    </div>
                    {hasGif && (
                      <p className="game-media-info">Hover image to play GIF preview.</p>
                    )}
                  </div>
                  <span className="game-date-chip">{game.dateLabel}</span>
                </div>
                <h4>
                  {game.link ? (
                    <Link href={game.link} target="_blank">
                      {game.title}
                    </Link>
                  ) : (
                    game.title
                  )}
                </h4>
                <p className="game-description">{game.description}</p>
                <p className="game-details">Project type: {game.collaboration}</p>
                <p className="game-details">{game.details}</p>
                <div>
                  {game.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );})}
          </div>
        </Container>
      </section>

      <footer className="site-footer">
        <Container maxWidth="lg">
          <p className="footer-line">Website made by Juho Heikkinen.</p>
          <p className="footer-line footer-muted">
            Anonymous analytics are collected for page visits and outbound link clicks.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;

