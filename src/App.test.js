import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Rabah-Tech homepage headline', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /Rabah-Tech/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders the language toggle', () => {
  render(<App />);
  const toggleButton = screen.getByRole('button', { name: /العربية/i });
  expect(toggleButton).toBeInTheDocument();
});
