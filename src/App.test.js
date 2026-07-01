import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the Rabah-Tech homepage headline', async () => {
  render(<App />);
  const headingElement = await waitFor(() =>
    screen.getByRole('heading', { level: 1, name: /Rabah-Tech/i })
  );
  expect(headingElement).toBeInTheDocument();
});

test('renders the language toggle', async () => {
  render(<App />);
  const toggleButton = await waitFor(() =>
    screen.getByRole('button', { name: /العربية/i })
  );
  expect(toggleButton).toBeInTheDocument();
});
