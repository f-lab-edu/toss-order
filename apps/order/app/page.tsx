'use client';

import { Suspense } from 'react';
import { Stack } from '@chakra-ui/react';
import { MenuContainer } from '../components/menu/menu-container';
import { MenuSkeleton } from '../components/menu/skeleton';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const Page: () => JSX.Element = () => (
  <Stack borderX="1px solid black" position="relative">
    <Header />
    <Suspense fallback={<MenuSkeleton />}>
      <MenuContainer />
    </Suspense>
    <Footer />
  </Stack>
);

export default Page;
