import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import GamesSection from "../components/GamesSection";
import GalleryModal from "../components/GalleryModal";
import { gamesData } from "../data/games";
import { GalleryItem, TagGroup } from "../types";

const GAME_ANCHOR_HIGHLIGHT_DURATION_MS = 5600;

const GamesPage = () => {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);
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

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#game-")) {
      return;
    }

    const scrollToTarget = () => {
      const target = document.querySelector(hash) as HTMLElement | null;
      if (!target) {
        return;
      }

      const previousHighlight = document.querySelector(
        ".game-card-anchor-highlight"
      ) as HTMLElement | null;
      previousHighlight?.classList.remove("game-card-anchor-highlight");

      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.classList.add("game-card-anchor-highlight");

      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }

      highlightTimeoutRef.current = window.setTimeout(() => {
        target.classList.remove("game-card-anchor-highlight");
      }, GAME_ANCHOR_HIGHLIGHT_DURATION_MS);
    };

    // Delay to ensure cards are rendered before centering the target.
    const timeoutId = window.setTimeout(scrollToTarget, 60);
    return () => {
      window.clearTimeout(timeoutId);
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, [filteredGames]);

  return (
    <>
      <Helmet>
        <title>Games – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="Game archive by Juho Heikkinen – indie games made with Unity, Godot, and other tools. Browse by genre, theme, or platform." />
        <meta property="og:title" content="Games – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Indie games and game experiments by Juho Heikkinen. Browse the full archive." />
        <meta property="og:url" content="https://crare.github.io/games" />
        <link rel="canonical" href="https://crare.github.io/games" />
      </Helmet>
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
