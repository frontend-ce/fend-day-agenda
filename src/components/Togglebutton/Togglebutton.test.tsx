import { render } from '@testing-library/react';
import { Togglebutton } from './Togglebutton';

test('renders Togglebutton', () => {
  const { getByText } = render(<Togglebutton mode={false} />);
  const element = getByText(/Togglebutton/i);
  expect(element).toBeInTheDocument();
});