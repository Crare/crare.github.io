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
});
