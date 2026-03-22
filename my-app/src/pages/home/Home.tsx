import { Grid, Link, Typography, Box, Container } from "@mui/material";
import React, { useEffect } from "react";
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
import squigglyNowGif from "../../img/squiggly-now.gif";
import squigglyNowImage from "../../img/squiggly-now.png";

const subTitles = [
  "Full-Stack Developer",
  "Mobile Apps",
  "Cloud & Azure",
  ".NET & C#",
  "React & TypeScript",
];

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

  const projects = [
    {
      title: "Vocabulary Trainer",
      category: "Web",
      tech: ["React", "TypeScript"],
      description: "React TypeScript website to memorize new vocabulary in any language with interactive learning.",
      link: "https://crare.github.io/vocabulary-app?ref=githubpages",
      images: [vocabularyAppImage, vocabularyAppImage2, vocabularyAppImage3],
      icon: <MenuBookIcon className="project-title-icon" />,
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
      title: "Telegram Bot",
      category: "Cloud",
      tech: ["APIs", "Automation"],
      description: "Bot for mobile chat-apps with API calls to news, trains, and open-source endpoints.",
      link: "https://github.com/Crare/telegrambot",
      icon: <SmartToyIcon className="project-title-icon" />,
    },
    {
      title: "Game Engine",
      category: "Systems",
      tech: ["C#", "MonoGame", "XNA"],
      description: "2D Game Engine built with C#, MonoGame and XNA-framework. Pong & Pacman clones included.",
      link: "https://github.com/Crare/GameEnginePublic",
      icon: <SportsEsportsIcon className="project-title-icon" />,
    },
    {
      title: "Organize Files",
      category: "Utilities",
      tech: ["File Management"],
      description: "Organizes files into folders by year & month. Perfect for managing photo libraries.",
      link: "https://github.com/Crare/organizeFiles",
      icon: <FolderOpenIcon className="project-title-icon" />,
    },
  ];

  const skills = [
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
  ];

  const games = [
    {
      title: "Squiggly Now!",
      description: "Use DNA to evolve and obtain new abilities.",
      details: "Made with Godot game engine. This is a submission entry for Mini Jam 186, held June 7 to 9, 2025. Theme: Evolution. Limitation: Failure is progress.",
      image: squigglyNowImage,
      gif: squigglyNowGif,
      tags: ["Godot", "Game Jam", "Evolution"],
    },
  ];

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

      {/* Projects Section */}
      <section className="projects-section">
        <Container maxWidth="lg">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                {project.images && (
                  <div className="project-image-row">
                    {project.images.map((imageSrc, imageIdx) => (
                      <div key={imageIdx} className="project-image-wrapper">
                        <img
                          className="project-image"
                          src={imageSrc}
                          alt={`${project.title} preview ${imageIdx + 1}`}
                          loading="lazy"
                        />
                        <div className="project-image-preview" aria-hidden="true">
                          <img
                            className="project-image-preview-large"
                            src={imageSrc}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
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
          <div className="games-grid">
            {games.map((game, idx) => (
              <div key={idx} className="game-card">
                <div className="game-media-grid">
                  <img
                    className="game-image"
                    src={game.image}
                    alt={`${game.title} cover`}
                    loading="lazy"
                  />
                  <img
                    className="game-gif"
                    src={game.gif}
                    alt={`${game.title} gameplay gif`}
                    loading="lazy"
                  />
                </div>
                <h4>{game.title}</h4>
                <p className="game-description">{game.description}</p>
                <p className="game-details">{game.details}</p>
                <div>
                  {game.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default Home;

