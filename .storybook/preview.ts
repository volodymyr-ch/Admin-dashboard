import type { Preview } from "@storybook/react";
import { withMuiTheme } from '../src/utils/storybook';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme]
};

export default preview;
