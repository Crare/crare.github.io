import { describe, expect, it } from 'vitest';
import { gamesData } from '../../../../src/pages/home/data/games';

describe('gamesData dates', () => {
  it('keeps 3D bomber older than Steam Machine', () => {
    const bomber = gamesData.find((game) => game.title === '3D bomber');
    const steamMachine = gamesData.find((game) => game.title === 'Steam Machine');

    expect(bomber).toBeDefined();
    expect(steamMachine).toBeDefined();
    expect(bomber!.dateSort < steamMachine!.dateSort).toBe(true);
  });

  it('keeps date labels aligned with dateSort month and year', () => {
    for (const game of gamesData) {
      const [year, month] = game.dateSort.split('-');
      const expectedMonth = new Date(`${year}-${month}-01T00:00:00Z`).toLocaleString('en-US', {
        month: 'short',
        timeZone: 'UTC',
      });

      expect(game.dateLabel).toBe(`${expectedMonth} ${year}`);
    }
  });

  it('uses valid ISO-like dateSort values (YYYY-MM-DD)', () => {
    for (const game of gamesData) {
      expect(game.dateSort).toMatch(/^\d{4}-\d{2}-\d{2}$/);

      const parsedDate = new Date(`${game.dateSort}T00:00:00Z`);
      expect(Number.isNaN(parsedDate.getTime())).toBe(false);
    }
  });

  it('has unique game titles', () => {
    const titles = gamesData.map((game) => game.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('has at least one media URL and a valid external link for every game', () => {
    for (const game of gamesData) {
      expect(game.media.length).toBeGreaterThan(0);

      for (const mediaUrl of game.media) {
        expect(mediaUrl).toMatch(/^https?:\/\//);
      }

      expect(game.link).toMatch(/^https?:\/\//);

      if (game.devlogLink) {
        expect(game.devlogLink).toMatch(/^https?:\/\//);
      }
    }
  });

  it('keeps optional gif thumbs internally consistent when provided', () => {
    for (const game of gamesData) {
      if (game.gifThumbs) {
        expect(game.gifThumbs.length).toBeGreaterThan(0);
      }

      if (game.gifThumb) {
        expect(game.gifThumbs).toBeDefined();
        expect(game.gifThumbs!.includes(game.gifThumb)).toBe(true);
      }
    }
  });
});
