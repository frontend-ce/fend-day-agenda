import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerCard } from "./SpeakerCard"

export type Story = StoryObj<typeof SpeakerCard>

const meta: Meta<typeof SpeakerCard> = {
  title: 'Components/SpeakerCard',
  component: SpeakerCard,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" }
  },
} satisfies Meta<typeof SpeakerCard>

export default meta;

export const Default: Story = {
  args:{
    label: "How to get away with murder"
  }
}