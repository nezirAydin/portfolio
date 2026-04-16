import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the software engineer homepage headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/software engineer/i);
  expect(headingElement).toBeInTheDocument();
});
