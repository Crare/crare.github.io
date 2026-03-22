import React, { useMemo, useRef, useState } from "react";
import GamesSection from "../components/GamesSection";
import GalleryModal from "../components/GalleryModal";
import { gamesData } from "../data/games";
import { GalleryItem, TagGroup } from "../types";

const GamesPage = () => {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
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

  const gameTags = useMemo(() => {
    const tags = Array.from(new Set(gamesData.flatMap((game) => game.tags))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["all", ...tags];
  }, []);

  const groupedGameTags = useMemo<TagGroup[]>(() => {
    const tagSet = new Set(gameTags.filter((tag) => tag !== "all"));
    const usedTags = new Set<string>();

    const groupDefs = [
      { title: "Collaboration", tags: ["solo", "team"] },
      { title: "Game Engine", tags: ["unity", "godot", "gamemaker"] },
      { title: "Development Type", tags: ["game jam", "prototype"] },
      {
        title: "Jam Series",
        tags: [
          "ludum dare",
          "finnish game jam",
          "asm game jam",
          "pride game jam hki",
          "godot wild jam",
          "weekly game jam",
          "mini jam",
        ],
      },
      {
        title: "Gameplay",
        tags: [
          "3d",
          "2d",
          "action",
          "runner",
          "platformer",
          "puzzle",
          "arcade",
          "turn-based",
          "minigames",
          "rhythm",
          "multiplayer",
        ],
      },
      {
        title: "Theme",
        tags: [
          "interactive fiction",
          "narrative",
          "story",
          "exploration",
          "evolution",
          "light and dark",
          "co-op",
        ],
      },
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
    const byDate = [...gamesData].sort((a, b) => b.dateSort.localeCompare(a.dateSort));
    if (activeGameTag === "all") {
      return byDate;
    }
    return byDate.filter((game) => game.tags.includes(activeGameTag));
  }, [activeGameTag]);

  return (
    <>
      <GamesSection
        activeGameTag={activeGameTag}
        groupedGameTags={groupedGameTags}
        filteredGames={filteredGames}
        setActiveGameTag={setActiveGameTag}
        openGalleryModal={openGalleryModal}
      />
      <GalleryModal
        galleryModal={galleryModal}
        closeGalleryModal={closeGalleryModal}
        showPrevGalleryImage={showPrevGalleryImage}
        showNextGalleryImage={showNextGalleryImage}
      />
    </>
  );
};

export default GamesPage;
