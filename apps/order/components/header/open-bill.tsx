import { CTAButton } from 'ui/button';
import { Box, Text } from '@chakra-ui/react';

export const OpenBill: () => JSX.Element = () => (
  <Box h="2.5rem" w="6rem">
    <CTAButton
      className="bg-blue"
      content={
        <Text fontSize="xl" fontWeight={800}>
          계산서 보기
        </Text>
      }
      // TODO: 계산서 Modal이 구현된 후 open modal이 할당될 예정 Ticket: toss-order #14
      onClick={() => {}}
    />
  </Box>
);
