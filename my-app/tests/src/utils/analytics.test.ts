import { describe, expect, it, vi, beforeEach } from 'vitest';
import { trackEvent, trackPageView } from '../../../src/utils/analytics';

describe('analytics helpers', () => {
  beforeEach(() => {
    delete (window as any).goatcounter;
  });

  it('sends event payload through goatcounter when available', () => {
    const count = vi.fn();
    (window as any).goatcounter = { count };

    trackEvent('cta_click', { source: 'hero' });

    expect(count).toHaveBeenCalledWith({
      path: '/event/cta_click',
      title: 'cta_click',
      source: 'hero',
    });
  });

  it('sends page view payload through goatcounter when available', () => {
    const count = vi.fn();
    (window as any).goatcounter = { count };

    trackPageView('projects');

    expect(count).toHaveBeenCalledWith({
      path: '/projects',
      title: 'projects',
    });
  });

  it('does not throw when goatcounter is missing', () => {
    expect(() => trackEvent('safe_noop')).not.toThrow();
    expect(() => trackPageView('safe_noop')).not.toThrow();
  });
});
