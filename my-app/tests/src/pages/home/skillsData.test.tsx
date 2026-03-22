import { describe, expect, it } from 'vitest';
import { skillsData } from '../../../../src/pages/home/data/skills';

describe('skillsData', () => {
  it('contains unique skill titles', () => {
    const titles = skillsData.map((skill) => skill.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('contains non-empty descriptions and icons', () => {
    for (const skill of skillsData) {
      expect(skill.title.trim().length).toBeGreaterThan(0);
      expect(skill.description.trim().length).toBeGreaterThan(0);
      expect(skill.icon).toBeTruthy();
    }
  });
});
