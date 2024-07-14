import { render } from '@testing-library/react';
import { DeadComponent } from './DeadComponent';

test('renders DeadComponent', () => {
  const { getByText } = render(<DeadComponent />);
  const element = getByText(/DeadComponent/i);
  expect(element).toBeInTheDocument();
});