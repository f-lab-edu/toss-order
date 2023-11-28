'use client';

import { Suspense } from 'react';
import { Stack } from '@chakra-ui/react';
import { MenuContainer } from '../components/menu';
import { MenuSkeleton } from '../components/menu/skeleton';
import { Footer } from '../components/footer';

const Page: () => JSX.Element = () => (
  <Suspense fallback={<MenuSkeleton />}>
    <Stack position="relative">
      <MenuContainer />
      <Footer />
    </Stack>
  </Suspense>
);

export default Page;
