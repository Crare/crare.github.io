import { describe, expect, it } from 'vitest';
import { aiTools, familiarSkillsData, skillsData } from '../../../../src/data/skills';

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

  it('lists the AI tools', () => {
    expect(aiTools).toEqual(['Claude Code', 'OpenCode', 'GitHub Copilot', 'OpenSpec', 'ChatGPT']);
  });

  it('has distinct, non-empty familiar-skill categories', () => {
    const titles = familiarSkillsData.map((category) => category.title);
    expect(new Set(titles).size).toBe(titles.length);

    for (const category of familiarSkillsData) {
      expect(category.title.trim().length).toBeGreaterThan(0);
      expect(category.skills.length).toBeGreaterThan(0);
      expect(category.skills.every((skill) => skill.trim().length > 0)).toBe(true);
    }
  });
});
