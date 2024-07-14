import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTalk } from "./ButtonTalk"

export type Story = StoryObj<typeof ButtonTalk>

const meta: Meta<typeof ButtonTalk> = {
  title: 'Components/ButtonTalk',
  component: ButtonTalk,
} satisfies Meta<typeof ButtonTalk>

export default meta;

export const Default: Story = {}