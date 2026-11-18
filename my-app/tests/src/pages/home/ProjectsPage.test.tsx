import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ProjectsPage from '../../../../src/pages/projects/ProjectsPage';

const renderPage = (state?: unknown) =>
  render(
    <MemoryRouter initialEntries={[{ pathname: '/projects', state }]}>
      <ProjectsPage />
    </MemoryRouter>
  );

describe('ProjectsPage', () => {
  it('switches client case studies with clicks and arrow keys', async () => {
    renderPage();
    const panel = () => screen.getByRole('tabpanel');

    expect(screen.getByRole('tab', { name: /Seure/i })).toHaveAttribute('aria-selected', 'true');
    expect(within(panel()).getByText('19,000+')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: /Kuusakoski/i }));
    expect(within(panel()).getByRole('heading', { name: /Kuusakoski/i })).toBeInTheDocument();
    expect(within(panel()).getByRole('link', { name: /Read the full case/i })).toHaveAttribute(
      'href',
      'https://zure.com/cases/kuusakoski-customer-portal-1'
    );

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('tab', { name: /Seure/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: /Seure/i })).toHaveFocus();
  });

  it('opens the case requested through navigation state', () => {
    renderPage({ caseIndex: 1 });
    expect(screen.getByRole('tab', { name: /Keva/i })).toHaveAttribute('aria-selected', 'true');
  });

  it('filters side projects by category and links to each project', async () => {
    renderPage();

    expect(screen.getByRole('link', { name: /Fridge App/i })).toHaveAttribute('href', 'https://github.com/Crare/fridge');
    expect(screen.getByRole('link', { name: /Open MIDI to Minecraft/i })).toHaveAttribute('target', '_blank');

    await userEvent.click(screen.getByRole('button', { name: 'Mobile' }));
    expect(screen.getByText('Fridge App')).toBeInTheDocument();
    expect(screen.queryByText('Vocabulary Trainer')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'All' }));
    expect(screen.getByText('Vocabulary Trainer')).toBeInTheDocument();
  });
});
