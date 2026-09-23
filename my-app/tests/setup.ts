import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Polyfill IntersectionObserver for tests
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

global.IntersectionObserver = MockIntersectionObserver as any;

const originalConsoleError = console.error;

console.error = (...args: unknown[]) => {
	const firstArg = args[0];
	const message = typeof firstArg === 'string' ? firstArg : '';

	if (message.includes('ReactDOMTestUtils.act') && message.includes('deprecated')) {
		return;
	}

	originalConsoleError(...args);
};
