import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage, { finlandTime } from '../../../../src/pages/contact/ContactPage';

describe('ContactPage', () => {
  it('formats Finland time as 24-hour HH:mm:ss', () => {
    // 21:05:09 UTC in winter is 23:05:09 in Helsinki (UTC+2).
    expect(finlandTime(new Date('2026-01-15T21:05:09Z'))).toBe('23:05:09');
    // Midnight must not render as 24:00.
    expect(finlandTime(new Date('2026-01-15T22:00:00Z'))).toBe('00:00:00');
  });

  it('links to every contact channel in a new tab', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    const expected = {
      LinkedIn: 'https://www.linkedin.com/in/juhopmheikkinen/',
      GitHub: 'https://github.com/Crare',
      'Itch.io': 'https://jukepoks1.itch.io/',
      Bluesky: 'https://bsky.app/profile/jukepoks1.bsky.social',
    };
    for (const [label, href] of Object.entries(expected)) {
      const link = screen.getByRole('link', { name: new RegExp(`^${label.replace('.', '\\.')}:`) });
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
    }
    expect(screen.getByRole('link', { name: 'See projects' })).toHaveAttribute('href', '/projects');
  });
});
