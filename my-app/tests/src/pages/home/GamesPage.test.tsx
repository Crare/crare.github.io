import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GamesPage from '../../../../src/pages/home/pages/GamesPage';

describe('GamesPage', () => {
  it('renders games list and filters by selected tag', async () => {
    render(<GamesPage />);

    expect(screen.getByRole('heading', { name: 'Games' })).toBeInTheDocument();
    expect(screen.getByText('Squiggly Now!')).toBeInTheDocument();
    expect(screen.getByText('Nuclear meltdown')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Filter games by team/i }));

    expect(screen.getByText('Nuclear meltdown')).toBeInTheDocument();
    expect(screen.queryByText('Squiggly Now!')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /Show all games/i }));
    expect(screen.getByText('Squiggly Now!')).toBeInTheDocument();
  });
});
