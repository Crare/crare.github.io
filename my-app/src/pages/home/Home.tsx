import { Grid, Link, Typography, Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FadeInText from "./FadeInText";
import { trackEvent, trackPageView } from "../../utils/analytics";

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
      title: "Fridge App",
      category: "Mobile",
      tech: ["React Native", "Shopping"],
      description: "React-Native app for shopping and storing food. Track inventory across your devices.",
      link: "https://github.com/Crare/fridge",
    },
    {
      title: "Vocabulary Trainer",
      category: "Web",
      tech: ["React", "TypeScript"],
      description: "React TypeScript website to memorize new vocabulary in any language with interactive learning.",
      link: "https://crare.github.io/vocabulary-app?ref=githubpages",
    },
    {
      title: "Telegram Bot",
      category: "Cloud",
      tech: ["APIs", "Automation"],
      description: "Bot for mobile chat-apps with API calls to news, trains, and open-source endpoints.",
      link: "https://github.com/Crare/telegrambot",
    },
    {
      title: "Game Engine",
      category: "Systems",
      tech: ["C#", "MonoGame", "XNA"],
      description: "2D Game Engine built with C#, MonoGame and XNA-framework. Pong & Pacman clones included.",
      link: "https://github.com/Crare/GameEnginePublic",
    },
    {
      title: "Organize Files",
      category: "Utilities",
      tech: ["File Management"],
      description: "Organizes files into folders by year & month. Perfect for managing photo libraries.",
      link: "https://github.com/Crare/organizeFiles",
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
                <h4>
                  <Link href={project.link} target="_blank">
                    {project.title}
                  </Link>
                </h4>
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

