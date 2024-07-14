import { render } from '@testing-library/react';
import { SpeakerCard } from './SpeakerCard';

test('renders SpeakerCard', () => {
  const { getByText } = render(<SpeakerCard label='How to get away with murder' />);
  const element = getByText(/How to get away with murder/i);
  expect(element).toBeInTheDocument();
});