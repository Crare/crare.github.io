import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import NavButton from "../../components/NavButton";
import { Game } from "../../types";

interface GameCardProps {
  game: Game;
  toAnchorId: (prefix: string, title: string) => string;
}

const GameCard = ({ game, toAnchorId }: GameCardProps) => {
  const ref = useIntersectionObserver();
  return (
    <RouterLink
      key={game.title}
      to={`/games#${toAnchorId("game", game.title)}`}
      className="landing-card-link"
      aria-label={`Open games page from ${game.title}`}
    >
      <article ref={ref} className="landing-game-card">
        <div className="landing-game-header">
          <h3>{game.title}</h3>
          <span className="game-date-chip">{game.dateLabel}</span>
        </div>
        <p className="landing-game-description">{game.shortDescription || game.description}</p>
        <NavButton
          label="Read more →"
          trackingPage="landing"
          trackingIdentifier={game.title}
        />
      </article>
    </RouterLink>
  );
};

export default GameCard;
