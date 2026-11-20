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
      expect(project.description.trim().length).toBeGreaterThan(0);
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.link).toMatch(/^https?:\/\//);
    }
  });

  it('gives every screenshot alt text and a larger version than its thumbnail', () => {
    for (const project of projectsData.filter((p) => p.image)) {
      expect(project.imageAlt?.trim().length).toBeGreaterThan(0);
      expect(project.image!.largeWidth).toBeGreaterThan(project.image!.smallWidth);
    }
  });

  it('has complete client case studies linking to public case pages', () => {
    for (const c of clientCases) {
      expect(c.link).toMatch(/^https:\/\/zure\.com\/cases\//);
      for (const field of [c.client, c.sector, c.headline, c.description, c.facts]) {
        expect(field.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
