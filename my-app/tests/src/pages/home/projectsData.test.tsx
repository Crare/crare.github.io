import { describe, expect, it } from 'vitest';
import { projectsData } from '../../../../src/pages/home/data/projects';

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

      if (project.images) {
        expect(project.images.length).toBeGreaterThan(0);
        for (const image of project.images) {
          expect(image.thumb).toBeTruthy();
          expect(image.full).toBeTruthy();
        }
      }
    }
  });
});
