import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach } from 'vitest';
import App from '../../../../src/App';
import { sections } from '../../../../src/pages/home/HomePage';

const getMenu = () => within(screen.getByRole('navigation', { name: /on this page/i }));

describe('App (one-page site)', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('renders the opening and every section', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /I build web and mobile apps/i })).toBeInTheDocument();
    for (const name of ['Client work', 'A bit about me', 'Skills', 'Side projects', 'Game jams', 'Get in touch']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
    }
  });

  it('has a menu link for every section, each pointing at an element that exists', () => {
    const { container } = render(<App />);
    const menu = getMenu();

    for (const s of sections) {
      expect(menu.getByRole('link', { name: s.label })).toHaveAttribute('href', `#${s.id}`);
      expect(container.querySelector(`#${s.id}`)).not.toBeNull();
    }
  });

  it('points the opening buttons and the back-to-top link at real sections', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: 'See my client work' })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: 'Back to top' })).toHaveAttribute('href', '#top');
    expect(container.querySelector('#top')).not.toBeNull();
  });

  it('opens and closes the phone menu', async () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Open menu' });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById('menu')).toHaveClass('open');

    // Picking a section closes the menu again.
    await userEvent.click(getMenu().getByRole('link', { name: 'Skills' }));
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');

    // Escape closes it too, and focus returns to the menu button instead of a hidden link.
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    getMenu().getByRole('link', { name: 'About' }).focus();
    await userEvent.keyboard('{Escape}');
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus();
  });

  it('links to the contact channels, with email as a mailto link', () => {
    render(<App />);
    const contact = within(screen.getByRole('heading', { level: 2, name: 'Get in touch' }).closest('section')!);

    expect(contact.getByRole('link', { name: 'Email' }).getAttribute('href')).toMatch(/^mailto:/);
    expect(contact.getByRole('link', { name: /^LinkedIn/ })).toHaveAttribute('href', 'https://www.linkedin.com/in/juhopmheikkinen/');
    expect(contact.getByRole('link', { name: /^GitHub/ })).toHaveAttribute('href', 'https://github.com/Crare');
    expect(contact.getByRole('link', { name: /^itch\.io/ })).toHaveAttribute('href', 'https://jukepoks1.itch.io/');
    expect(contact.getByRole('link', { name: /^Bluesky/ })).toHaveAttribute('href', 'https://bsky.app/profile/jukepoks1.bsky.social');
  });

  it('opens every external link in a new tab with safe rel attributes', () => {
    render(<App />);
    const external = screen.getAllByRole('link').filter((a) => /^https?:\/\//.test(a.getAttribute('href') ?? ''));

    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
      // Screen-reader users are told the link opens a new tab.
      expect(link).toHaveAccessibleName(/\(opens in a new tab\)$/);
    }
  });

  it('serves a sharper image for large side-project screenshots', () => {
    render(<App />);
    const img = screen.getByRole('img', { name: /Vocabulary Trainer/i });

    expect(img.getAttribute('srcset')).toMatch(/224w, .+ 640w$/);
    expect(img).toHaveAttribute('sizes');
  });

  it('keeps the content the site owner asked for, and not what they removed', () => {
    render(<App />);

    expect(screen.getByText(/Home Assistant/)).toBeInTheDocument();
    expect(screen.getByText(/Claude Code, OpenCode, GitHub Copilot, OpenSpec and ChatGPT/)).toBeInTheDocument();
    expect(screen.queryByText(/Suomi\.fi/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Fridge/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Organize Files/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Elements of AI/)).not.toBeInTheDocument();
  });

  it.each([
    ['/about', '#about'],
    ['/skills', '#skills'],
    ['/projects', '#work'],
    ['/games', '#games'],
    ['/contact', '#contact'],
  ])('redirects the old %s page to %s', async (path, hash) => {
    window.history.replaceState({}, '', path);
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: /I build web and mobile apps/i })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
    expect(window.location.hash).toBe(hash);
  });

  it('redirects an unknown route to the top of the page', async () => {
    window.history.replaceState({}, '', '/does-not-exist');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: /I build web and mobile apps/i })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
