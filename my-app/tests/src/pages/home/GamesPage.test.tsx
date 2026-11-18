import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import GamesPage from '../../../../src/pages/games/GamesPage';

const renderPage = (state?: unknown) =>
  render(
    <MemoryRouter initialEntries={[{ pathname: '/games', state }]}>
      <GamesPage />
    </MemoryRouter>
  );

const details = () => screen.getByRole('complementary', { name: /Selected game/i });

describe('GamesPage', () => {
  it('filters games by solo and team', async () => {
    renderPage();

    expect(screen.getByRole('button', { name: /Squiggly Now!/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Nuclear meltdown/i })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Filter games by team/i }));
    expect(screen.getByRole('button', { name: /Nuclear meltdown/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Squiggly Now!/i })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Show all games/i }));
    expect(screen.getByRole('button', { name: /Squiggly Now!/i })).toBeInTheDocument();
  });

  it('shows details and links for the selected game', async () => {
    renderPage();

    await userEvent.click(screen.getByRole('button', { name: /Steam Machine/i }));
    expect(within(details()).getByRole('heading', { name: 'Steam Machine' })).toBeInTheDocument();
    expect(within(details()).getByRole('link', { name: /Play on itch.io/i })).toHaveAttribute(
      'href',
      'https://jukepoks1.itch.io/steam-machine'
    );
    expect(within(details()).getByRole('link', { name: 'Devlog' })).toHaveAttribute(
      'href',
      'https://jukepoks1.itch.io/steam-machine/devlog'
    );

    await userEvent.click(screen.getByRole('button', { name: /Berry Moon/i }));
    expect(within(details()).queryByRole('link', { name: 'Devlog' })).not.toBeInTheDocument();
  });

  it('opens the game requested through navigation state', () => {
    renderPage({ game: 'monster-twins' });
    expect(within(details()).getByRole('heading', { name: 'Monster Twins' })).toBeInTheDocument();
  });

  it('moves the selection when the filter hides the selected game', async () => {
    renderPage({ game: 'nuclear-meltdown' });
    expect(within(details()).getByRole('heading', { name: 'Nuclear meltdown' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Filter games by solo/i }));
    expect(within(details()).getByRole('heading', { name: 'Squiggly Now!' })).toBeInTheDocument();
  });
});
