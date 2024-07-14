import type { Preview } from "@storybook/react";
import "../src/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";


const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  })]
};

export default preview;