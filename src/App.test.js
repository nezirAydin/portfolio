import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the systems engineering homepage headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/systems and ai infrastructure engineer/i);
  expect(headingElement).toBeInTheDocument();
});
