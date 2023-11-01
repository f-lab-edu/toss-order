import type { Preview } from '@storybook/react';
import '../app/styles/reset.css';
import '../app/styles/global.css';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
