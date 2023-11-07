'use client';

import { RecoilRoot } from 'recoil';
import Root from '../components/Root';

const Page: () => React.ReactNode = () => (
  <RecoilRoot>
    <Root />
  </RecoilRoot>
);

export default Page;
