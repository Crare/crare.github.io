import React from 'react';
import { render, screen } from '@testing-library/react';
import FadeInText from '../../../../src/pages/home/FadeInText';

describe('FadeInText Component', () => {
  it('renders the subtitle text', async () => {
    render(<FadeInText subTitle="React Developer" index={0} />);
    // Wait for fade animation to complete
    const element = await screen.findByText(/React Developer/i, {}, { timeout: 3000 });
    expect(element).toBeInTheDocument();
  });

  it('renders bullet separator for non-last items', async () => {
    render(<FadeInText subTitle="React" index={0} />);
    const element = await screen.findByText(/React/i, {}, { timeout: 3000 });
    expect(element.textContent).toMatch(/React •/);
  });

  it('does not render bullet for last item (index 5)', async () => {
    render(<FadeInText subTitle="Cloud" index={5} />);
    const element = await screen.findByText(/Cloud/i, {}, { timeout: 3000 });
    expect(element.textContent).toBe('Cloud');
  });

  it('renders with fade animation wrapper', () => {
    const { container } = render(<FadeInText subTitle="Test" index={0} />);
    // Check that Fade component is present
    const fadeWrapper = container.querySelector('[style*="animation-duration"]');
    expect(fadeWrapper).toBeInTheDocument();
  });

  it('renders different subtitles correctly', async () => {
    const { rerender } = render(<FadeInText subTitle="Software developer" index={0} />);
    let element = await screen.findByText(/Software developer/i, {}, { timeout: 3000 });
    expect(element).toBeInTheDocument();

    rerender(<FadeInText subTitle="Mobile apps" index={1} />);
    element = await screen.findByText(/Mobile apps/i, {}, { timeout: 3000 });
    expect(element).toBeInTheDocument();
  });
});
