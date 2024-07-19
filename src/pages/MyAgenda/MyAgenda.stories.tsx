import type { Meta, StoryObj } from '@storybook/react';
import { MyAgenda } from "./MyAgenda"

export type Story = StoryObj<typeof MyAgenda>

const meta: Meta<typeof MyAgenda> = {
  title: 'Components/MyAgenda',
  component: MyAgenda,
} satisfies Meta<typeof MyAgenda>

export default meta;

export const Default: Story = {}