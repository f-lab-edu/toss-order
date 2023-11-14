'use client';

import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Root from '../components/Root';
import FetchTest from '../components/fetch-test';

const Page: () => React.ReactNode = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Root />
        {/* <FetchTest /> */}
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Page;
