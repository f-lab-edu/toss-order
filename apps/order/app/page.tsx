'use client';

import { Suspense, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { isMobileWeb } from '@toss/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MenuContainer } from '../components/menu';
import { MenuSkeleton } from '../components/menu/skeleton';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Modals } from '../components/modals';

const Page: () => JSX.Element = () => {
  useEffect(() => {
    if (!isMobileWeb()) {
      document.documentElement.classList.add('hide-scrollbar');
    }
  }, []);

  return (
    <Stack position="relative">
      <Header />
      <Suspense fallback={<MenuSkeleton />}>
        <MenuContainer />
      </Suspense>
      <Footer />
      <Modals />
      <Analytics />
      <SpeedInsights />
    </Stack>
  );
};

export default Page;
