import React, { useRef, useState } from "react";
import GalleryModal from "../components/GalleryModal";
import ProjectsSection from "../components/ProjectsSection";
import { projectsData } from "../data/projects";
import { GalleryItem } from "../types";

const ProjectsPage = () => {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
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

  return (
    <>
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
