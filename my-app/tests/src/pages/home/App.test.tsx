import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../../src/App';

describe('App Component', () => {
  it('renders Juho Heikkinen heading', () => {
    render(<App />);
    const heading = screen.getByText('Juho Heikkinen');
    expect(heading).toBeInTheDocument();
  });

  it('renders Featured Projects section', () => {
    render(<App />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders Get in Touch section', () => {
    render(<App />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders featured project links', () => {
    render(<App />);
    expect(screen.getByText('Fridge App')).toBeInTheDocument();
    expect(screen.getByText('Vocabulary Trainer')).toBeInTheDocument();
    expect(screen.getByText('Telegram Bot')).toBeInTheDocument();
  });

  it('renders contact links', () => {
    render(<App />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Itch.io')).toBeInTheDocument();
  });

  it('renders project descriptions with tech keywords', () => {
    render(<App />);
    // Check for tech tags in projects - React Native appears in multiple places
    const allMatches = screen.getAllByText(/React Native/i);
    expect(allMatches.length).toBeGreaterThan(0);
  });

  it('renders featured projects with correct links', () => {
    render(<App />);
    const fridgeLink = screen.getByRole('link', { name: /Fridge App/i });
    expect(fridgeLink).toHaveAttribute('href', 'https://github.com/Crare/fridge');
  });

  it('renders contact links with target="_blank"', () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });
});


