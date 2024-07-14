import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from "./ButtonGroup"

export type Story = StoryObj<typeof ButtonGroup>

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>

export default meta;

export const Default: Story = {}