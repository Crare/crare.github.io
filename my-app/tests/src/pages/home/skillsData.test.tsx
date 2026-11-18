import { describe, expect, it } from 'vitest';
import { familiarSkillsData, skillsData, stackLayers } from '../../../../src/data/skills';

describe('skillsData', () => {
  it('contains unique skill titles with descriptions and toolkits', () => {
    const titles = skillsData.map((skill) => skill.title);
    expect(new Set(titles).size).toBe(titles.length);

    for (const skill of skillsData) {
      expect(skill.description.trim().length).toBeGreaterThan(0);
      expect(skill.toolkit.length).toBeGreaterThan(0);
      expect(new Set(skill.toolkit).size).toBe(skill.toolkit.length);
    }
  });

  it('has a stack layer for every tier', () => {
    expect(stackLayers.map((l) => l.title)).toEqual([
      'Frontend & web',
      'Mobile',
      'Backend & data',
      'Cloud',
      'CI/CD & testing',
    ]);
  });

  describe('familiarSkillsData', () => {
    it('contains distinct, non-empty categories and skills', () => {
      const titles = familiarSkillsData.map((category) => category.title);
      expect(new Set(titles).size).toBe(titles.length);

      for (const category of familiarSkillsData) {
        expect(category.title.trim().length).toBeGreaterThan(0);
        expect(category.skills.length).toBeGreaterThan(0);
        expect(category.skills.every((skill) => skill.trim().length > 0)).toBe(true);
      }

      expect(familiarSkillsData).toContainEqual(
        expect.objectContaining({
          title: 'Agentic Development',
          skills: ['Agentic coding', 'GitHub Copilot', 'OpenSpec', 'OpenCode', 'Claude', 'ChatGPT'],
        }),
      );
    });
  });
});
