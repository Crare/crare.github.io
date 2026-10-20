import { describe, expect, it } from 'vitest';
import { familiarSkillsData, skillsData } from '../../../../src/data/skills';

describe('skillsData', () => {
  it('contains unique skill titles', () => {
    const titles = skillsData.map((skill) => skill.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  describe('familiarSkillsData', () => {
    it('contains distinct, non-empty categories and skills', () => {
      const titles = familiarSkillsData.map((category) => category.title);
      expect(new Set(titles).size).toBe(titles.length);

      for (const category of familiarSkillsData) {
        expect(category.title.trim().length).toBeGreaterThan(0);
        expect(category.icon.trim().length).toBeGreaterThan(0);
        expect(category.skills.length).toBeGreaterThan(0);
        expect(category.skills.every((skill) => skill.trim().length > 0)).toBe(true);
      }

      expect(familiarSkillsData).toContainEqual(
        expect.objectContaining({
          title: 'AI & Agentic Development',
          skills: ['Agentic coding', 'GitHub Copilot', 'OpenSpec'],
        }),
      );
    });
  });

  it('contains non-empty descriptions and icons', () => {
    for (const skill of skillsData) {
      expect(skill.title.trim().length).toBeGreaterThan(0);
      expect(skill.description.trim().length).toBeGreaterThan(0);
      expect(skill.icon).toBeTruthy();
    }
  });
});
