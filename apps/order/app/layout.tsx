import UIProvider from 'ui/ui-provider';
import { UIProvider as AppUIProvider, DataProvider } from '../components/providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="스마트폰으로 주문하는 테이블 오더 시스템입니다." name="description" />
      <title>토스 오더</title>
    </head>
    <body>
      <UIProvider>
        <AppUIProvider>
          <DataProvider>{children}</DataProvider>
        </AppUIProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
