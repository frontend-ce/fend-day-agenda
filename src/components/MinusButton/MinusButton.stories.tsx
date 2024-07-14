import type { Meta, StoryObj } from '@storybook/react';
import { MinusButton } from "./MinusButton"

export type Story = StoryObj<typeof MinusButton>

const meta: Meta<typeof MinusButton> = {
  title: 'Components/MinusButton',
  component: MinusButton,
} satisfies Meta<typeof MinusButton>

export default meta;

export const Default: Story = {}