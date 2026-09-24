import React from "react";
import MediaThumb from "../../components/MediaThumb";
import BaseCard from "../../components/BaseCard";
import ExternalLink from "../../components/ExternalLink";
import { GalleryItem, Game } from "../../types";
import { generateAnchorId } from "../../utils/id-generator";

export const toGameAnchorId = (title: string) => generateAnchorId("game", title);

interface GameCardProps {
  game: Game;
  idx: number;
  openGalleryModal: (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => void;
}

const GameCard = ({ game, idx, openGalleryModal }: GameCardProps) => {
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

  const gameCardContent = (
    <>
      <div className="game-card-title-row">
        <h2>{game.title}</h2>
        <span className="game-date-chip">{game.dateLabel}</span>
      </div>
      <p className="game-description">{game.description}</p>
      <p className="game-details">Project type: {game.collaboration}</p>
      <p className="game-details">{game.details}</p>
      {game.link && (
        <div style={{ marginBottom: "6px" }}>
          <ExternalLink
            href={game.link}
            label="Go to the project"
            ariaLabel={`Go to the project: ${game.title}`}
            trackingType="game"
            trackingIdentifier={game.title}
          />
        </div>
      )}
      {game.devlogLink && (
        <div style={{ marginBottom: "6px" }}>
          <ExternalLink
            href={game.devlogLink}
            label="Read devlog posts on Itch.io"
            ariaLabel={`Read devlog posts on Itch.io for ${game.title}`}
            trackingType="game_devlog"
            trackingIdentifier={game.title}
          />
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
    </>
  );

  return <BaseCard id={toGameAnchorId(game.title)} className="game-card" children={gameCardContent} />;
};

export default GameCard;
