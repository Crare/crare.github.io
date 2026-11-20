import { Game } from "../types";

/** Best still image for a game card: local thumb, then GIF still, then the first itch.io screenshot. */
export const gameThumb = (game: Game): string => game.thumb ?? game.gifThumb ?? game.media[0];
