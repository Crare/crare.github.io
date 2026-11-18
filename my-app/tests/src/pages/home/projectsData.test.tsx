import { describe, expect, it } from 'vitest';
import { clientCases, projectsData } from '../../../../src/data/projects';

describe('projectsData', () => {
  it('has unique project titles', () => {
    const titles = projectsData.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('uses valid external links and non-empty key fields', () => {
    for (const project of projectsData) {
      expect(project.title.trim().length).toBeGreaterThan(0);
      expect(project.category.trim().length).toBeGreaterThan(0);
      expect(project.description.trim().length).toBeGreaterThan(0);
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.link).toMatch(/^https?:\/\//);

      if (project.image) {
        expect(project.imageAlt?.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('has complete client case studies linking to public case pages', () => {
    for (const c of clientCases) {
      expect(c.link).toMatch(/^https:\/\/zure\.com\/cases\//);
      expect(c.figures).toHaveLength(3);
      expect(c.role.trim().length).toBeGreaterThan(0);
    }
  });
});
