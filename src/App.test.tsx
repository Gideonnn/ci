import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("renders 'demo application' text", () => {
  render(<App />);
  const linkElement = screen.getByText(/demo application/i);
  expect(linkElement).toBeInTheDocument();
});
