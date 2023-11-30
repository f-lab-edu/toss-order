import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';
import { Modal as BasketModal } from '../modals/basket';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const {
    isOpen: isBasketModalOpen,
    onOpen: onBasketModalOpen,
    onClose: onBasketModalClose,
  } = useDisclosure();

  const {
    isOpen: isConfirmOrderModalOpen,
    onOpen: onConfirmOrderModalOpen,
    onClose: onConfirmOrderModalClose,
  } = useDisclosure();
  const text = isBasketModalOpen ? '주문하기' : '장바구니 보기';
  // TODO: 주문하기 로직 구현 시 action 추가 예정 Ticket: toss-order #31
  const onButtonClick = isBasketModalOpen ? onConfirmOrderModalOpen : onBasketModalOpen;

  return basketItems.sumCount > 0 ? (
    <Flex
      alignItems="center"
      bgColor="white"
      borderTop="4px solid lightgray"
      bottom="-1px"
      flexDirection="column"
      h="12vh"
      justifyContent="center"
      position="sticky"
      px="4%"
      w="100%"
      zIndex={2000}
    >
      <Box color="white" flex={0.7} h="100%" pb="10px" w="100%">
        <PrimaryCTAButton
          count={basketItems.sumCount}
          onClick={onButtonClick}
          price={basketItems.sumPrice}
          text={text}
        />
      </Box>
      <BasketModal isOpen={isBasketModalOpen} onClose={onBasketModalClose} />
    </Flex>
  ) : null;
};
