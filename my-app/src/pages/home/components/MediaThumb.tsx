import React from "react";

type MediaThumbProps = {
  thumb: string;
  alt: string;
  wrapperClass: string;
  badge?: React.ReactNode;
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isProject: boolean;
  buttonLabel: string;
};

const MediaThumb = ({
  thumb,
  alt,
  wrapperClass,
  badge,
  onOpen,
  isProject,
  buttonLabel,
}: MediaThumbProps) => {
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

export default MediaThumb;
