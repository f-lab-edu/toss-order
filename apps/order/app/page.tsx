'use client';

import { Suspense } from 'react';
import { MenuContainer } from '../components/menu/menu-container';
import { MenuSkeleton } from '../components/menu/skeleton';

const Page: () => JSX.Element = () => (
  <Suspense fallback={<MenuSkeleton />}>
    <MenuContainer />
  </Suspense>
);

export default Page;
