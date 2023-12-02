import { CTAButton } from 'ui/button';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { BillModal } from '../modals/bill';

export const OpenBill: () => JSX.Element = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h={10} w="28%">
      <CTAButton
        className="bg-blue"
        content={
          <Text fontSize="xl" fontWeight={800}>
            계산서 보기
          </Text>
        }
        onClick={onOpen}
      />
      <BillModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
