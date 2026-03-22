import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../../src/App';

describe('App Component', () => {
  it('renders Juho Heikkinen heading', () => {
    render(<App />);
    const heading = screen.getByText('Juho Heikkinen');
    expect(heading).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    render(<App />);
    expect(screen.getByText('Projects:')).toBeInTheDocument();
  });

  it('renders Contact section', () => {
    render(<App />);
    expect(screen.getByText('Contact:')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(<App />);
    expect(screen.getByText('Game engine')).toBeInTheDocument();
    expect(screen.getByText('Vocabulary trainer')).toBeInTheDocument();
    expect(screen.getByText('Telegram-bot')).toBeInTheDocument();
  });

  it('renders contact links', () => {
    render(<App />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
    expect(screen.getByText('Itch.io')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<App />);
    expect(screen.getByText(/2D Game Engine/i)).toBeInTheDocument();
    expect(screen.getByText(/React Native/i)).toBeInTheDocument();
  });

  it('renders project links with correct href attributes', () => {
    render(<App />);
    const gameEngineLink = screen.getByRole('link', { name: /Game engine/i });
    expect(gameEngineLink).toHaveAttribute('href', 'https://github.com/Crare/GameEnginePublic');
  });

  it('renders external links with target="_blank"', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });
});


