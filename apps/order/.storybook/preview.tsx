import type { Preview } from '@storybook/react';
import { extendTheme } from '@chakra-ui/react';
import UIProvider from 'ui/ui-provider';
import { UIProvider as AppUIProvider } from '../components/providers';
import { useEffect } from 'react';

const theme = extendTheme({});
const CSSLazyLoader: () => void = () => {
  useEffect(() => {
    import('../app/styles/global.css');
    import('../app/styles/order-page.css');
  }, []);
};

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
  decorators: [
    Story => {
      CSSLazyLoader();
      return (
        <UIProvider>
          <AppUIProvider>
            <Story />
          </AppUIProvider>
        </UIProvider>
      );
    },
  ],
};

export default preview;
