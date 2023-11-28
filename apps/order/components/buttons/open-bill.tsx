import { CTAButton } from 'ui/button';
import { Box } from '@chakra-ui/react';

// TODO: 계산서 보기 버튼에 연계되는 Modal은 장바구니 및 주문 기능 작동 구현 후 개발 Ticket: toss-order #14
export const OpenBill: () => JSX.Element = () => (
  <Box h={10}>
    <CTAButton className="bg-blue" content={<>계산서 보기</>} onClick={() => {}} />
  </Box>
);
