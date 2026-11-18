import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import CtaStrip from "../../components/CtaStrip";
import ExternalLink from "../../components/ExternalLink";
import { ArrowUpRight } from "../../components/Icons";
import { gamesData } from "../../data/games";
import { slugify } from "../../utils/slug";
import { trackEvent } from "../../utils/analytics";
import { gameThumb } from "./gameThumb";

type Filter = "all" | "solo" | "team";

const GamesPage = () => {
  const location = useLocation();
  const games = useMemo(() => [...gamesData].sort((a, b) => b.dateSort.localeCompare(a.dateSort)), []);
  const soloCount = games.filter((g) => g.collaboration === "solo").length;
  const teamCount = games.length - soloCount;
  const firstYear = games[games.length - 1].dateSort.slice(0, 4);

  const requested = (location.state as { game?: string } | null)?.game;
  const [selected, setSelected] = useState<string>(
    games.some((g) => slugify(g.title) === requested) ? (requested as string) : slugify(games[0].title)
  );
  const [filter, setFilter] = useState<Filter>("all");

  const shown = (collab: string) => filter === "all" || collab === filter;

  const applyFilter = (next: Filter) => {
    setFilter(next);
    trackEvent("games_filter", { filter: next });
    // Keep the details panel in sync with the list: if the selected game is
    // filtered out, select the newest game that is still shown.
    const current = games.find((g) => slugify(g.title) === selected);
    if (current && next !== "all" && current.collaboration !== next) {
      const first = games.find((g) => g.collaboration === next);
      if (first) setSelected(slugify(first.title));
    }
  };
  const years = Array.from(new Set(games.map((g) => g.dateSort.slice(0, 4))));
  const game = games.find((g) => slugify(g.title) === selected) ?? games[0];

  const filters: { id: Filter; label: string; aria: string }[] = [
    { id: "all", label: `All · ${games.length}`, aria: "Show all games" },
    { id: "solo", label: `Solo · ${soloCount}`, aria: "Filter games by solo" },
    { id: "team", label: `Team · ${teamCount}`, aria: "Filter games by team" },
  ];

  return (
    <div className="p-games">
      <PageMeta
        title="Games – Juho Heikkinen | Software Developer"
        description="Game jam entries and prototypes by Juho Heikkinen, made with Godot, Unity and GameMaker since 2015."
        path="/games"
      />

      <section className="ghead" aria-labelledby="games-h">
        <div className="wrap ggrid">
          <div>
            <p className="kick fade"><span className="acc" aria-hidden="true">●</span>  [05] Games — side quest</p>
            <h1 className="ph1" id="games-h">
              <span className="visually-hidden">Games: </span>
              <span className="ln"><span style={{ animationDelay: ".05s" }}>Game jams &amp;</span></span>{" "}
              <span className="ln"><span style={{ animationDelay: ".17s" }}><em>side quests.</em></span></span>
            </h1>
            <p className="lede fade" style={{ animationDelay: ".45s" }}>
              A hobby since {firstYear}: weekend game jams and prototypes in Godot, Unity and GameMaker. Small scope,
              hard deadlines, and plenty of lessons that carry over to the day job.
            </p>
          </div>
          <div className="hud" role="group" aria-label="Game stats">
            <div className="hudtop" aria-hidden="true"><span>Save file 01</span><span>● Continue</span></div>
            <div className="hudstats">
              <div><b>{String(games.length).padStart(2, "0")}</b><span>Games made</span></div>
              <div><b>{String(soloCount).padStart(2, "0")}</b><span>Solo</span></div>
              <div><b>{String(teamCount).padStart(2, "0")}</b><span>Team</span></div>
              <div><b>{firstYear}</b><span>First jam</span></div>
            </div>
            <div className="hudbar" aria-hidden="true"><span>XP</span><span className="hp"><i /></span><span>LV {games.length}</span></div>
          </div>
        </div>
      </section>

      <section className="sec" id="level-select" aria-labelledby="lvl-h" style={{ paddingTop: 88 }}>
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick">Level select / pick a game</p><h2 className="h2" id="lvl-h">All games, newest first</h2></div>
            <div className="filters" role="group" aria-label="Filter games">
              {filters.map((f) => (
                <button
                  type="button"
                  key={f.id}
                  className={filter === f.id ? "chip sel" : "chip"}
                  aria-pressed={filter === f.id}
                  aria-label={f.aria}
                  onClick={() => applyFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lvl">
            <div>
              {years.map((year) => {
                const all = games.filter((g) => g.dateSort.startsWith(year));
                const visible = all.filter((g) => shown(g.collaboration));
                if (!visible.length) return null;
                return (
                  <div className="world" key={year}>
                    <p className="yr">{year}<small>{visible.length} {visible.length === 1 ? "game" : "games"}</small></p>
                    <div className="carts">
                      {visible.map((g) => {
                        const id = slugify(g.title);
                        const isSel = id === selected;
                        return (
                          <button
                            type="button"
                            key={id}
                            className={isSel ? "cart sel" : "cart"}
                            aria-pressed={isSel}
                            aria-controls="game-details"
                            onClick={() => {
                              setSelected(id);
                              trackEvent("game_select", { game: g.title });
                            }}
                          >
                            <span className="thumb">
                              <img src={gameThumb(g)} alt="" loading="lazy" decoding="async" />
                              <span className={g.collaboration === "team" ? "badge team" : "badge"}>{g.collaboration}</span>
                            </span>
                            <span className="cbody"><b>{g.title}</b><span>{g.event}</span></span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="sheet" id="game-details" aria-live="polite" aria-label="Selected game">
              <div className="thumb shot" aria-hidden="true">
                <img src={gameThumb(game)} alt="" decoding="async" />
                <span className={game.collaboration === "team" ? "badge team" : "badge"}>{game.collaboration}</span>
              </div>
              <div className="in">
                <p className="kick">Selected · {game.dateLabel}</p>
                <h3>{game.title}</h3>
                <p className="pitch">{game.description}</p>
                <p className="story">{game.details}</p>
                <dl className="facts">
                  <div><dt>Event</dt><dd>{game.event}</dd></div>
                  <div><dt>Engine</dt><dd>{game.engine ?? "—"}</dd></div>
                </dl>
                <div className="sheetlinks">
                  <ExternalLink className="btn pri" href={game.link} trackingLabel={game.title} trackingLocation="games">
                    Play on itch.io <ArrowUpRight />
                  </ExternalLink>
                  {game.devlogLink && (
                    <ExternalLink className="btn" href={game.devlogLink} trackingLabel={`${game.title} devlog`} trackingLocation="games">
                      Devlog
                    </ExternalLink>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaStrip text="Every game is free to play on itch.io.">
        <ExternalLink className="btn pri" href="https://jukepoks1.itch.io/" trackingLabel="Itch.io" trackingLocation="games-cta">
          Open itch.io profile <ArrowUpRight size={18} />
        </ExternalLink>
        <Link className="btn" to="/projects">Back to real work</Link>
      </CtaStrip>
    </div>
  );
};

export default GamesPage;
