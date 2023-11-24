'use client';

import { Suspense } from 'react';
import { MenuContainer } from '../components/menu';
import { MenuSkeleton } from '../components/menu/skeleton';

const Page: () => JSX.Element = () => (
  <Suspense fallback={<MenuSkeleton />}>
    <MenuContainer />
  </Suspense>
);

export default Page;
