'use client';

import { Box } from '@chakra-ui/react';
import { Header } from '../components/header';
import Root from '../components/Root';

const Page: () => JSX.Element = () => (
  <Box position="relative">
    <Header />
    <Root />
  </Box>
);

export default Page;
