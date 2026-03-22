import { Link, Container } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import { trackEvent, trackPageView } from "../../utils/analytics";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import GamesSection from "./components/GamesSection";
import HeaderSection from "./components/HeaderSection";
import ProjectsSection from "./components/ProjectsSection";
import { GalleryItem, TagGroup } from "./types";
import { gamesData } from "./data/games";
import { projectsData } from "./data/projects";
import { skillsData } from "./data/skills";

const subTitles = [
  "Full-Stack Developer",
  "Mobile Apps",
  "Cloud & Azure",
  ".NET & C#",
  "React & TypeScript",
];

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

  const projects = projectsData;
  const skills = skillsData;
  const games = gamesData;

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

  const groupedGameTags = useMemo<TagGroup[]>(() => {
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
      <HeaderSection subTitles={subTitles} />

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

      <AboutSection />

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

      <ProjectsSection projects={projects} openGalleryModal={openGalleryModal} />

      <GamesSection
        activeGameTag={activeGameTag}
        groupedGameTags={groupedGameTags}
        filteredGames={filteredGames}
        setActiveGameTag={setActiveGameTag}
        openGalleryModal={openGalleryModal}
      />

      <FooterSection />

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

