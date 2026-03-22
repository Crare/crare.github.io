import { Grid, Link, Typography, Box, Container } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import steamMachineThumb from "../../img/steam-machine-thumb.jpg";
import steamMachineThumb2 from "../../img/steam-machine-thumb2.jpg";
import monsterTwinsThumb from "../../img/monster-twins-thumb.jpg";
import bomberThumb from "../../img/3d-bomber-thumb.jpg";

const subTitles = [
  "Full-Stack Developer",
  "Mobile Apps",
  "Cloud & Azure",
  ".NET & C#",
  "React & TypeScript",
];

type GalleryItem = {
  thumb: string;
  full: string;
  alt: string;
  isGif?: boolean;
};

const MediaThumb = ({
  thumb,
  alt,
  wrapperClass,
  badge,
  onOpen,
  isProject,
  buttonLabel,
}: {
  thumb: string;
  alt: string;
  wrapperClass: string;
  badge?: React.ReactNode;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isProject: boolean;
  buttonLabel: string;
}) => {
  return (
    <button
      type="button"
      className={`media-thumb-button ${wrapperClass}`}
      onClick={onOpen}
      aria-label={buttonLabel}
    >
      {thumb ? (
        <img
          className={isProject ? "project-image" : "game-image-thumb"}
          src={thumb}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="game-image-thumb game-empty-thumb" aria-hidden="true" />
      )}
      {badge}
    </button>
  );
};

const Home = () => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalPanelRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

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
      tags: ["solo", "godot", "game jam", "mini jam", "evolution"],
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
      tags: ["solo", "godot", "game jam", "godot wild jam", "light and dark", "3d"],
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
      tags: ["solo", "godot", "game jam", "godot wild jam", "turn-based"],
    },
    {
      title: "Steam Machine",
      description: "Prototype about cogs and steam, created as a work-in-progress jam project.",
      details: "Made for Weekly Game Jam - Week 26.",
      link: "https://jukepoks1.itch.io/steam-machine",
      collaboration: "solo",
      dateLabel: "Jan 2018",
      dateSort: "2018-01-18",
      gifThumb: steamMachineThumb,
      gifThumbs: [steamMachineThumb, steamMachineThumb2],
      media: [
        "https://img.itch.zone/aW1hZ2UvMjEyOTQxLzEwMTg5MDcuZ2lm/original/iv9KiV.gif",
        "https://img.itch.zone/aW1hZ2UvMjEyOTQxLzEwMTg5MTcuZ2lm/original/eNFTGu.gif",
      ],
      tags: ["solo", "godot", "unity", "game jam", "weekly game jam", "prototype"],
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
      tags: ["solo", "unity", "game jam", "ludum dare", "3d", "runner", "prototype"],
    },
    {
      title: "Monster Twins",
      description: "Puzzle platformer with two synced monsters and inverse gravity.",
      details: "Made for Ludum Dare 33 (2015).",
      link: "https://jukepoks1.itch.io/monster-twins",
      collaboration: "solo",
      dateLabel: "Aug 2015",
      dateSort: "2015-08-23",
      gifThumb: monsterTwinsThumb,
      gifThumbs: [monsterTwinsThumb],
      media: ["https://img.itch.zone/aW1hZ2UvOTU4NjMvNDQ4ODAyLmdpZg==/original/fWfXDL.gif"],
      tags: ["solo", "gamemaker", "game jam", "ludum dare", "puzzle", "platformer"],
    },
    {
      title: "3D bomber",
      description: "Prototype about bombs and blowing out rocks, inspired by Bomberman and Minecraft.",
      details: "Early concept build with inventory and bomb-type experimentation.",
      link: "https://jukepoks1.itch.io/bomber",
      collaboration: "solo",
      dateLabel: "Feb 2018",
      dateSort: "2018-02-10",
      gifThumb: bomberThumb,
      gifThumbs: [bomberThumb],
      media: ["https://img.itch.zone/aW1hZ2UvMjIzNTg3LzEwNTU1ODEuZ2lm/original/KVOBkv.gif"],
      tags: ["solo", "unity", "prototype", "3d", "action"],
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
      tags: ["team", "game jam", "weekly game jam", "arcade", "co-op", "multiplayer"],
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
      tags: ["team", "unity", "3d", "interactive fiction", "game jam", "asm game jam", "finnish game jam"],
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
      tags: ["team", "game jam", "pride game jam hki", "finnish game jam", "narrative", "exploration"],
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
  const [galleryModal, setGalleryModal] = useState<{
    open: boolean;
    title: string;
    items: GalleryItem[];
    index: number;
  }>({
    open: false,
    title: "",
    items: [],
    index: 0,
  });

  const openGalleryModal = (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => {
    if (triggerElement) {
      lastFocusedElementRef.current = triggerElement;
    }
    setGalleryModal({
      open: true,
      title,
      items,
      index,
    });
  };

  const closeGalleryModal = () => {
    setGalleryModal((prev) => ({ ...prev, open: false }));
  };

  const showPrevGalleryImage = () => {
    setGalleryModal((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length,
    }));
  };

  const showNextGalleryImage = () => {
    setGalleryModal((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));
  };

  useEffect(() => {
    if (!galleryModal.open) {
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGalleryModal();
      }
      if (event.key === "ArrowLeft" && galleryModal.items.length > 1) {
        showPrevGalleryImage();
      }
      if (event.key === "ArrowRight" && galleryModal.items.length > 1) {
        showNextGalleryImage();
      }

      if (event.key === "Tab" && modalPanelRef.current) {
        const focusableElements = Array.from(
          modalPanelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement | null;

        if (!modalPanelRef.current.contains(activeElement)) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement).focus();
          return;
        }

        if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }

        if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryModal.open, galleryModal.items.length]);

  const gameTags = useMemo(() => {
    const tags = Array.from(new Set(games.flatMap((game) => game.tags))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["all", ...tags];
  }, [games]);

  const groupedGameTags = useMemo(() => {
    const tagSet = new Set(gameTags.filter((tag) => tag !== "all"));
    const usedTags = new Set<string>();

    const groupDefs = [
      { title: "Collaboration", tags: ["solo", "team"] },
      { title: "Game Engine", tags: ["unity", "godot", "gamemaker"] },
      { title: "Development Type", tags: ["game jam", "prototype"] },
      { title: "Jam Series", tags: ["ludum dare", "finnish game jam", "asm game jam", "pride game jam hki", "godot wild jam", "weekly game jam", "mini jam"] },
      { title: "Gameplay", tags: ["3d", "2d", "action", "runner", "platformer", "puzzle", "arcade", "turn-based", "minigames", "rhythm", "multiplayer"] },
      { title: "Theme", tags: ["interactive fiction", "narrative", "story", "exploration", "evolution", "light and dark", "co-op"] },
    ];

    const groups = groupDefs
      .map((group) => {
        const availableTags = group.tags.filter((tag) => tagSet.has(tag));
        availableTags.forEach((tag) => usedTags.add(tag));
        return { title: group.title, tags: availableTags };
      })
      .filter((group) => group.tags.length > 0);

    const otherTags = gameTags.filter((tag) => tag !== "all" && !usedTags.has(tag));
    if (otherTags.length > 0) {
      groups.push({ title: "Other Tags", tags: otherTags });
    }

    return groups;
  }, [gameTags]);

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
                {project.images && (() => {
                  const projectGalleryItems: GalleryItem[] = project.images.map((img, imageIdx) => ({
                    thumb: img.thumb,
                    full: img.full,
                    alt: `${project.title} preview ${imageIdx + 1}`,
                  }));

                  return (
                    <>
                      <div className="project-image-row">
                        {projectGalleryItems.map((img, imageIdx) => (
                          <MediaThumb
                            key={imageIdx}
                            thumb={img.thumb}
                            alt={img.alt}
                            wrapperClass="project-image-wrapper"
                                onOpen={(event) => openGalleryModal(project.title, projectGalleryItems, imageIdx, event.currentTarget)}
                            isProject
                                buttonLabel={`Open ${project.title} image ${imageIdx + 1} in gallery`}
                          />
                        ))}
                      </div>
                      <p className="game-media-info">Click a thumbnail to open gallery. Use arrows or keyboard left/right.</p>
                    </>
                  );
                })()}
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
            <div className="game-filter-group">
              <div className="game-filter-group-title">Show</div>
              <div className="game-filter-group-chips">
                <button
                  type="button"
                  className={`game-filter-chip ${activeGameTag === "all" ? "active" : ""}`}
                  onClick={() => setActiveGameTag("all")}
                  aria-pressed={activeGameTag === "all"}
                  aria-label="Show all games"
                >
                  all
                </button>
              </div>
            </div>
            {groupedGameTags.map((group) => (
              <div key={group.title} className="game-filter-group">
                <div className="game-filter-group-title">{group.title}</div>
                <div className="game-filter-group-chips">
                  {group.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`game-filter-chip ${activeGameTag === tag ? "active" : ""}`}
                      onClick={() => setActiveGameTag(tag)}
                      aria-pressed={activeGameTag === tag}
                      aria-label={`Filter games by ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            Showing {filteredGames.length} games for filter {activeGameTag}.
          </p>
          <div className="games-grid">
            {filteredGames.map((game, idx) => {
              const staticMedia = game.media.filter((src) => !src.toLowerCase().includes(".gif"));
              const gifMedia = game.media.filter((src) => src.toLowerCase().includes(".gif"));
              const thumbnailMedia = staticMedia.length > 0 ? staticMedia : [];
              const fallbackThumb = staticMedia[0] || game.gifThumb || "";
              const gameGalleryItems: GalleryItem[] = [
                ...thumbnailMedia.map((imageSrc, imageIdx) => ({
                  thumb: imageSrc,
                  full: imageSrc,
                  alt: `${game.title} media ${imageIdx + 1}`,
                  isGif: false,
                })),
                ...gifMedia.map((gifSrc, gifIdx) => ({
                  thumb: (game.gifThumbs && game.gifThumbs[gifIdx]) || fallbackThumb,
                  full: gifSrc,
                  alt: `${game.title} gif preview ${gifIdx + 1}`,
                  isGif: true,
                })),
              ];

              return (
              <div key={idx} className="game-card">
                <div className="game-media-header">
                  <div className="game-media-column">
                    <div className="game-media-row">
                      {gameGalleryItems.map((media, mediaIdx) => (
                        <MediaThumb
                          key={mediaIdx}
                          thumb={media.thumb}
                          alt={media.alt}
                          wrapperClass={media.isGif ? "game-image-wrapper game-gif-trigger" : "game-image-wrapper"}
                          badge={media.isGif ? <div className="game-gif-badge">GIF</div> : undefined}
                          onOpen={(event) => openGalleryModal(game.title, gameGalleryItems, mediaIdx, event.currentTarget)}
                          isProject={false}
                          buttonLabel={`Open ${game.title} image ${mediaIdx + 1} in gallery`}
                        />
                      ))}
                    </div>
                    <p className="game-media-info">Click a thumbnail to open gallery. Use arrows or keyboard left/right.</p>
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

      {galleryModal.open && galleryModal.items[galleryModal.index] && (
        <div
          className="gallery-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          aria-describedby="gallery-modal-instructions"
          onClick={closeGalleryModal}
        >
          <div className="gallery-modal-panel" ref={modalPanelRef} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={closeGalleryModal}
              aria-label="Close image gallery"
              ref={closeButtonRef}
            >
              x
            </button>
            {galleryModal.items.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-modal-nav gallery-modal-prev"
                  onClick={showPrevGalleryImage}
                  aria-label="Show previous image"
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="gallery-modal-nav gallery-modal-next"
                  onClick={showNextGalleryImage}
                  aria-label="Show next image"
                >
                  Next
                </button>
              </>
            )}
            <img
              className="gallery-modal-image"
              src={galleryModal.items[galleryModal.index].full}
              alt={galleryModal.items[galleryModal.index].alt}
              decoding="async"
            />
            <div className="gallery-modal-meta">
              <span id="gallery-modal-title">{galleryModal.title}</span>
              <span>
                {galleryModal.index + 1} / {galleryModal.items.length}
              </span>
            </div>
            <p id="gallery-modal-instructions" className="sr-only">
              Use left and right arrow keys to change image. Press escape to close the gallery.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

