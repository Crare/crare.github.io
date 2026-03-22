import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import LayoutPage from '../../../../src/pages/home/pages/LayoutPage';
import { trackEvent, trackPageView } from '../../../../src/utils/analytics';

vi.mock('../../../../src/utils/analytics', () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
}));

describe('LayoutPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete (window as any).goatcounter;
  });

  it('tracks page view for the root path as home', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              index
              element={
                <a href="https://example.com/docs" onClick={(event) => event.preventDefault()}>
                  Docs
                </a>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(trackPageView).toHaveBeenCalledWith('home');
    expect(trackEvent).toHaveBeenCalledWith('page_view', { page: 'home' });
  });

  it('tracks page view for nested route path', () => {
    render(
      <MemoryRouter
        initialEntries={['/projects']}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              path="projects"
              element={
                <a href="https://example.com/docs" onClick={(event) => event.preventDefault()}>
                  Docs
                </a>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(trackPageView).toHaveBeenCalledWith('projects');
    expect(trackEvent).toHaveBeenCalledWith('page_view', { page: 'projects' });
  });

  it('tracks outbound link clicks with goatcounter', () => {
    const count = vi.fn();
    (window as any).goatcounter = { count };

    render(
      <MemoryRouter
        initialEntries={['/projects']}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route
              path="projects"
              element={
                <a href="https://example.com/docs" onClick={(event) => event.preventDefault()}>
                  Docs
                </a>
              }
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('link', { name: 'Docs' }));

    expect(count).toHaveBeenCalledWith({
      path: '/link-click/docs',
      title: 'Link to https://example.com/docs',
      event: true,
    });
  });
});
