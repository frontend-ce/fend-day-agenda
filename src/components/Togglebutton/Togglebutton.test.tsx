import { render } from '@testing-library/react';
import { Togglebutton } from './Togglebutton';

test('renders Togglebutton', () => {
  const { getByText } = render(<Togglebutton />);
  const element = getByText(/Togglebutton/i);
  expect(element).toBeInTheDocument();
});