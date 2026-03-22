import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectsPage from '../../../../src/pages/home/pages/ProjectsPage';

describe('ProjectsPage', () => {
  it('renders projects and opens/closes image gallery modal', async () => {
    render(<ProjectsPage />);

    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument();
    expect(screen.getByText('Vocabulary Trainer')).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('button', { name: /Open Vocabulary Trainer image 1 in gallery/i })
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByRole('img', { name: /Vocabulary Trainer preview 1/i })).toBeInTheDocument();

    await userEvent.click(
      within(dialog).getByRole('button', { name: /Close image gallery/i })
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
