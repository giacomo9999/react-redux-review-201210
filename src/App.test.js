import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appText = screen.getByText(/App/i);
  expect(appText).toBeInTheDocument();
});
