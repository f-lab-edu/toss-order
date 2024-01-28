import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';
import { useModal } from '../../../app/lib/utils/useModal';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { onClose: onBasketClose } = useModal('basket');
  const { onOpen: onConfirmOpen } = useModal('confirm');
  const toggleModal = () => {
    if (basketItems.sumCount > 0) {
      onConfirmOpen();
      onBasketClose();
    }
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
