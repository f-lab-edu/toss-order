'use client';

import { RecoilRoot } from 'recoil';
import Root from '../components/Root';

const Page: () => void = () => (
  <RecoilRoot>
    <Root />
  </RecoilRoot>
);

export default Page;
