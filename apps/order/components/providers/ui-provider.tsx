'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export const UIProvider = ({ children }: { children: React.ReactNode }) => (
  <CacheProvider>
    <ChakraProvider resetCSS>{children}</ChakraProvider>
  </CacheProvider>
);
