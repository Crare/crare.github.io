import '@testing-library/jest-dom';

const originalConsoleError = console.error;

console.error = (...args: unknown[]) => {
	const firstArg = args[0];
	const message = typeof firstArg === 'string' ? firstArg : '';

	if (message.includes('ReactDOMTestUtils.act') && message.includes('deprecated')) {
		return;
	}

	originalConsoleError(...args);
};
