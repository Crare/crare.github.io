import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../../src/App';

describe('App Component', () => {
  it('renders header and primary navigation', () => {
    render(<App />);
    expect(screen.getByText('Juho Heikkinen')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skills/i })).toHaveAttribute('href', '/skills');
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /games/i })).toHaveAttribute('href', '/games');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact');
  });

  it('defaults to the skills page', () => {
    render(<App />);
    expect(screen.getByText('Core Skills')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
  });

  it('navigates to projects page from nav link', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: /projects/i }));

    expect(await screen.findByText('Featured Projects')).toBeInTheDocument();
    const fridgeLink = await screen.findByRole('link', { name: /Fridge App/i });
    expect(fridgeLink).toHaveAttribute('href', 'https://github.com/Crare/fridge');
  });

  it('navigates to contact page from nav link', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: /contact/i }));

    expect(await screen.findByText('Get in Touch')).toBeInTheDocument();
    const linkedinLink = await screen.findByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  it('navigates to games page from nav link', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('link', { name: /games/i }));

    expect(await screen.findByRole('heading', { name: 'Games' })).toBeInTheDocument();
    expect(await screen.findByText('Squiggly Now!')).toBeInTheDocument();
  });
});


