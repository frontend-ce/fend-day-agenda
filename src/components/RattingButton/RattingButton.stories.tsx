import type { Meta, StoryObj } from "@storybook/react";
import { RattingButton } from "./RattingButton";

export type Story = StoryObj<typeof RattingButton>;

const meta: Meta<typeof RattingButton> = {
  title: "Components/RattingButton",
  component: RattingButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {
        label: "text",
      },
    },
  },
} satisfies Meta<typeof RattingButton>;

export default meta;

export const Default: Story = {
  args: {
    label: "Avaliar Palestra",
  },
};
