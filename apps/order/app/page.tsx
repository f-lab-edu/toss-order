'use client';

import { Suspense } from 'react';
import { Stack } from '@chakra-ui/react';
import { MenuContainer } from '../components/menu';
import { MenuSkeleton } from '../components/menu/skeleton';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Modals } from '../components/modals';

const Page: () => JSX.Element = () => (
  <Stack position="relative">
    <Header />
    <Suspense fallback={<MenuSkeleton />}>
      <MenuContainer />
    </Suspense>
    <Footer />
    <Modals />
  </Stack>
);

export default Page;
