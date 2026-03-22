import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../../src/App';

test('renders Juho Heikkinen heading', () => {
  render(<App />);
  const heading = screen.getByText('Juho Heikkinen');
  expect(heading).toBeInTheDocument();
});

