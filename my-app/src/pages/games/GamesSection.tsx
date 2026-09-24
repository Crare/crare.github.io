import { Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { TagGroup, Game, GalleryItem } from "../../types";
import GameCard from "./GameCard";
import { generateSectionHeadingId } from "../../utils/id-generator";

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
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <section id="games" className="games-section" role="region" aria-labelledby="games-heading">
      <Container maxWidth="lg">
        <h2 id="games-heading" className="section-title">Games</h2>
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
