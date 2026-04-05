import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import GalleryModal from "../components/GalleryModal";
import ProjectsSection from "../components/ProjectsSection";
import { projectsData } from "../data/projects";
import { GalleryItem } from "../types";

const PROJECT_ANCHOR_HIGHLIGHT_DURATION_MS = 5600;

const ProjectsPage = () => {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);
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
    setGalleryModal({ open: true, title, items, index });
  };

  const closeGalleryModal = () => {
    setGalleryModal((prev) => ({ ...prev, open: false }));
    if (lastFocusedElementRef.current) {
      lastFocusedElementRef.current.focus();
    }
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
    const hash = window.location.hash;
    if (!hash.startsWith("#project-")) {
      return;
    }

    const scrollToTarget = () => {
      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) {
        return;
      }

      const previousHighlight = document.querySelector(
        ".project-card-anchor-highlight"
      ) as HTMLElement | null;
      previousHighlight?.classList.remove("project-card-anchor-highlight");

      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("project-card-anchor-highlight");

      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }

      highlightTimeoutRef.current = window.setTimeout(() => {
        target.classList.remove("project-card-anchor-highlight");
      }, PROJECT_ANCHOR_HIGHLIGHT_DURATION_MS);
    };

    // Delay to ensure cards are rendered before centering the target.
    const timeoutId = window.setTimeout(scrollToTarget, 60);
    return () => {
      window.clearTimeout(timeoutId);
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Projects – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="Featured software projects by Juho Heikkinen: web apps, mobile apps, Azure cloud solutions, and more delivered across private and public sectors." />
        <meta property="og:title" content="Projects – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Software projects by Juho Heikkinen across web, mobile, and cloud development." />
        <meta property="og:url" content="https://crare.github.io/projects" />
        <link rel="canonical" href="https://crare.github.io/projects" />
      </Helmet>
      <ProjectsSection projects={projectsData} openGalleryModal={openGalleryModal} />
      <GalleryModal
        galleryModal={galleryModal}
        closeGalleryModal={closeGalleryModal}
        showPrevGalleryImage={showPrevGalleryImage}
        showNextGalleryImage={showNextGalleryImage}
      />
    </>
  );
};

export default ProjectsPage;
