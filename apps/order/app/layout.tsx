import UIProvider from 'ui/ui-provider';
import { UIProvider as AppUIProvider, ContextProvider } from '../components/providers';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="스마트폰으로 주문하는 테이블 오더 시스템입니다." />
      <title>토스 오더</title>
    </head>
    <body>
      <UIProvider>
        <AppUIProvider>
          <ContextProvider>{children}</ContextProvider>
        </AppUIProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
