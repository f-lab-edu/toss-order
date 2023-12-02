import { Box, Flex, Stack, useDisclosure, VStack } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';
import { ConfirmModal } from '../confirm';

export const Footer = ({ onBasketClose }: { onBasketClose: () => void }) => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      alignItems="center"
      borderTop="2px solid black"
      flexDirection="column"
      h="100%"
      justifyContent="center"
      minH="80px"
      w="100%"
    >
      <Flex flexBasis="60%" w="90%">
        <PrimaryCTAButton
          // count={basketItems.sumCount}
          onClick={onOpen}
          price={basketItems.sumPrice}
          text="주문하기"
        />
      </Flex>
      <ConfirmModal isOpen={isOpen} onBasketClose={onBasketClose} onClose={onClose} />
    </Flex>
  );
};
