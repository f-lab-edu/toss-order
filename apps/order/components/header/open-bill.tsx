import { CTAButton } from 'ui/button';
import { Box, Text } from '@chakra-ui/react';
import { BillModal } from '../modals/bill';
import { useRecoilDisclosure } from '../../app/lib/utils/useDisclosure';

export const OpenBill: () => JSX.Element = () => {
  const { isOpen, onOpen, onClose } = useRecoilDisclosure('bill');
  return (
    <Box flexBasis="130px" h="2.5rem">
      <CTAButton
        className="bg-blue"
        content={
          <Text fontSize="calc(min(1rem + 0.5vw, 1.5rem))" fontWeight={800} mx="10px">
            계산서 보기
          </Text>
        }
        // TODO: 계산서 Modal이 구현된 후 open modal이 할당될 예정 Ticket: toss-order #14
        onClick={onOpen}
      />
      <BillModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
