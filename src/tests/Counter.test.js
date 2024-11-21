// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByRole('button', { name: '-' }));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
