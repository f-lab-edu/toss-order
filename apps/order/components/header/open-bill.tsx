import { CTAButton } from 'ui/button';
import { Box, Text } from '@chakra-ui/react';
import { useModal } from '../../app/lib/utils/useModal';

export const OpenBill: () => JSX.Element = () => {
  const { onOpen } = useModal('bill');
  return (
    <Box flexBasis="130px" h="2.5rem" maxW="30%">
      <CTAButton
        className="bg-blue"
        content={
          <Text fontSize="calc(min(1rem + 0.5vw, 1.5rem))" fontWeight={800} mx="10px">
            주문 내역
          </Text>
        }
        onClick={onOpen}
      />
    </Box>
  );
};
