import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { onClose: onBasketClose } = useStoredModalState('basket');
  const { onOpen: onConfirmOpen } = useStoredModalState('confirm');
  const toggleModal = () => {
    onBasketClose();
    onConfirmOpen();
  };

  return (
    <Flex
      alignItems="center"
      borderTop="2px solid lightgray"
      flexDirection="column"
      h="0"
      justifyContent="center"
      mb="auto"
      minH="100px"
      w="100%"
    >
      <Flex flexBasis="60%" w="90%">
        <PrimaryCTAButton onClick={toggleModal} price={basketItems.sumPrice} text="주문 전 확인하기" />
      </Flex>
    </Flex>
  );
};
