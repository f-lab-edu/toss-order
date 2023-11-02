'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>
    <CacheProvider>
      <ChakraProvider resetCSS>{children}</ChakraProvider>
    </CacheProvider>
  </RecoilRoot>
);

export default LayoutProvider;
