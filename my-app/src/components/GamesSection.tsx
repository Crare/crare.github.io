import { Container, Link } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React, { useState } from "react";
import MediaThumb from "./MediaThumb";
import { GalleryItem, Game, TagGroup } from "../types";
import { trackEvent } from "../utils/analytics";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const toGameAnchorId = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `game-${slug}`;
};

type GamesSectionProps = {
  activeGameTag: string;
  groupedGameTags: TagGroup[];
  filteredGames: Game[];
  setActiveGameTag: React.Dispatch<React.SetStateAction<string>>;
  openGalleryModal: (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => void;
};

const GameCard = ({ game, idx, openGalleryModal }: any) => {
  const ref = useIntersectionObserver();

  const staticMedia = game.media.filter((src: string) => !src.toLowerCase().includes(".gif"));
  const gifMedia = game.media.filter((src: string) => src.toLowerCase().includes(".gif"));
  const thumbnailMedia = staticMedia.length > 0 ? staticMedia : [];
  const fallbackThumb = staticMedia[0] || game.gifThumb || "";
  const gameGalleryItems: GalleryItem[] = [
    ...thumbnailMedia.map((imageSrc: string, imageIdx: number) => ({
      thumb: imageSrc,
      full: imageSrc,
      alt: `${game.title} media ${imageIdx + 1}`,
      isGif: false,
    })),
    ...gifMedia.map((gifSrc: string, gifIdx: number) => ({
      thumb: (game.gifThumbs && game.gifThumbs[gifIdx]) || fallbackThumb,
      full: gifSrc,
      alt: `${game.title} gif preview ${gifIdx + 1}`,
      isGif: true,
    })),
  ];

  return (
    <div ref={ref} id={toGameAnchorId(game.title)} className="game-card">
      <div className="game-card-title-row">
        <h2>{game.title}</h2>
        <span className="game-date-chip">{game.dateLabel}</span>
      </div>
      <p className="game-description">{game.description}</p>
      <p className="game-details">Project type: {game.collaboration}</p>
      <p className="game-details">{game.details}</p>
      {game.link && (
        <div style={{ marginBottom: "6px" }}>
          <Link referrerPolicy="origin" href={game.link} target="_blank" className="project-external-link" onClick={() => trackEvent("external_link_click", { type: "game", game: game.title })}>
            Go to the project
            <OpenInNewIcon className="project-external-link-icon" />
          </Link>
        </div>
      )}
      {game.devlogLink && (
        <div style={{ marginBottom: "6px" }}>
          <Link referrerPolicy="origin" href={game.devlogLink} target="_blank" rel="noopener" className="project-external-link" onClick={() => trackEvent("external_link_click", { type: "game_devlog", game: game.title })}>
            Read devlog posts on Itch.io
            <OpenInNewIcon className="project-external-link-icon" />
          </Link>
        </div>
      )}
      <div>
        {game.tags.map((tag: string, tagIdx: number) => (
          <span key={tagIdx} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="game-media-footer">
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
    </div>
  );
};

const GamesSection = ({
  activeGameTag,
  groupedGameTags,
  filteredGames,
  setActiveGameTag,
  openGalleryModal,
}: GamesSectionProps) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <section id="games" className="games-section">
      <Container maxWidth="lg">
        <h1 className="section-title">Games</h1>
        <button
          type="button"
          className="game-filter-accordion-toggle"
          aria-expanded={filtersOpen}
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>
            Filters
            {activeGameTag !== "all" && (
              <span className="game-filter-accordion-active">{activeGameTag}</span>
            )}
          </span>
          <ExpandMoreIcon className={`game-filter-accordion-icon${filtersOpen ? " open" : ""}`} />
        </button>
        {filtersOpen && (
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
        )}
        <p className="sr-only" aria-live="polite">
          Showing {filteredGames.length} games for filter {activeGameTag}.
        </p>
        <div className="games-grid">
          {filteredGames.map((game, idx) => (
            <GameCard key={idx} game={game} idx={idx} openGalleryModal={openGalleryModal} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GamesSection;
