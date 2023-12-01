'use client';

import { Suspense } from 'react';
import { Stack } from '@chakra-ui/react';
import { MenuContainer } from '../components/menu';
import { MenuSkeleton } from '../components/menu/skeleton';
import { Footer } from '../components/footer';

const Page: () => JSX.Element = () => (
  <Stack position="relative">
    <Suspense fallback={<MenuSkeleton />}>
      <MenuContainer />
    </Suspense>
    <Footer />
  </Stack>
);

export default Page;
