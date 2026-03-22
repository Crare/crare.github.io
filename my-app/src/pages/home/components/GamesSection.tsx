import { Container, Link } from "@mui/material";
import React from "react";
import MediaThumb from "./MediaThumb";
import { GalleryItem, Game, TagGroup } from "../types";

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

const GamesSection = ({
  activeGameTag,
  groupedGameTags,
  filteredGames,
  setActiveGameTag,
  openGalleryModal,
}: GamesSectionProps) => {
  return (
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
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default GamesSection;
