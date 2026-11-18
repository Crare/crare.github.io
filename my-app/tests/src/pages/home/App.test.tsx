import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach } from 'vitest';
import App from '../../../../src/App';

const getPrimaryNav = () => within(screen.getByRole('navigation', { name: /primary/i }));

const PAGES = [
  { link: /^about$/i, path: '/about', heading: /Hei, I'm Juho/i },
  { link: /^skills$/i, path: '/skills', heading: /The full stack/i },
  { link: /^projects$/i, path: '/projects', heading: /Shipped for clients/i },
  { link: /^games$/i, path: '/games', heading: /Game jams/i },
  { link: /^contact$/i, path: '/contact', heading: /Let’s\s*talk/i },
];

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('renders the primary navigation with a link for every page', () => {
    render(<App />);
    const nav = getPrimaryNav();

    expect(nav.getByRole('link', { name: /Juho Heikkinen, home/i })).toHaveAttribute('href', '/');
    expect(nav.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/');
    for (const page of PAGES) {
      expect(nav.getByRole('link', { name: page.link })).toHaveAttribute('href', page.path);
    }
  });

  it('defaults to the home page and marks Home as current', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Software, end to end/i })).toBeInTheDocument();
    expect(getPrimaryNav().getByRole('link', { name: /^home$/i })).toHaveAttribute('aria-current', 'page');
  });

  it.each(PAGES)('navigates to $path from the nav and marks it current', async (page) => {
    render(<App />);
    await userEvent.click(getPrimaryNav().getByRole('link', { name: page.link }));

    expect(await screen.findByRole('heading', { level: 1, name: page.heading })).toBeInTheDocument();
    expect(window.location.pathname).toBe(page.path);
    expect(getPrimaryNav().getByRole('link', { name: page.link })).toHaveAttribute('aria-current', 'page');
  });

  it('goes back home from the brand link', async () => {
    window.history.replaceState({}, '', '/contact');
    render(<App />);
    await userEvent.click(getPrimaryNav().getByRole('link', { name: /Juho Heikkinen, home/i }));

    expect(await screen.findByRole('heading', { level: 1, name: /Software, end to end/i })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });

  it('wires the home page buttons to the right pages', async () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /View projects/i })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /How I work/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /^Get in touch$/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /All games/i })).toHaveAttribute('href', '/games');

    await userEvent.click(screen.getByRole('link', { name: /^Contact me/i }));
    expect(await screen.findByRole('heading', { level: 1, name: /Let’s\s*talk/i })).toBeInTheDocument();
  });

  it('opens the matching case study when a client card on home is clicked', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: /Keva · Public pensions/i }));

    expect(await screen.findByRole('tab', { name: /Keva/i })).toHaveAttribute('aria-selected', 'true');
    expect(window.location.pathname).toBe('/projects');
    expect(window.location.hash).toBe('#cases');
  });

  it('opens the matching game when a jam card on home is clicked', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: /Monster Twins/i }));

    const details = await screen.findByRole('complementary', { name: /Selected game/i });
    expect(within(details).getByRole('heading', { name: 'Monster Twins' })).toBeInTheDocument();
  });

  it('opens every external link in a new tab with safe rel attributes', () => {
    render(<App />);
    const external = screen
      .getAllByRole('link')
      .filter((a) => /^https?:\/\//.test(a.getAttribute('href') ?? ''));

    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });

  it('renders the skills page, including the wider toolbox, when visiting /skills directly', async () => {
    window.history.replaceState({}, '', '/skills');
    render(<App />);

    expect(await screen.findByRole('heading', { name: 'What I bring to a team' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Also familiar with' })).toBeInTheDocument();
    for (const skill of ['Cypress', 'Playwright', 'EntityFramework', 'MediatR', 'Convex', '3D-modeling', 'GitHub Copilot']) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });

  it('shows education and certificates on the about page', async () => {
    window.history.replaceState({}, '', '/about');
    render(<App />);

    expect(await screen.findByRole('heading', { name: 'Certificates' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Microsoft Certified: Azure Developer Associate' })).toBeInTheDocument();
    expect(screen.getByText(/Haaga-Helia University of Applied Sciences/)).toBeInTheDocument();
  });

  it('redirects an unknown route to the home page', async () => {
    window.history.replaceState({}, '', '/does-not-exist');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: /Software, end to end/i })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
