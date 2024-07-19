// src/components/ReturnButton/ReturnButton.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import { ReturnButton } from './ReturnButton';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/ReturnButton',
  component: ReturnButton,
} as Meta;

const Template: StoryFn = () => (
  <BrowserRouter>
    <ReturnButton />
  </BrowserRouter>
);

export const Default = Template.bind({});
