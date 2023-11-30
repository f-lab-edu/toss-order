import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { PrimaryCTAButton } from '../buttons/primary-cta-button';
import { BasketModal } from '../modals/basket';
import { ConfirmModal } from '../modals/confirm';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { isOpen: isBasketOpen, onOpen: onBasketOpen, onClose: onBasketClose } = useDisclosure();

  const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onClose: onConfirmClose } = useDisclosure();

  const text = isBasketOpen ? '주문하기' : '장바구니 보기';

  const toggleBasketAndConfirmModals = () => {
    if (isBasketOpen) {
      onBasketClose();
      onConfirmOpen();
    } else {
      onBasketOpen();
      onConfirmClose();
    }
  };

  return basketItems.sumCount > 0 && !isConfirmOpen ? (
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
      {!isConfirmOpen && (
        <Box color="white" flex={0.7} h="100%" pb="10px" w="100%">
          <PrimaryCTAButton
            count={basketItems.sumCount}
            onClick={toggleBasketAndConfirmModals}
            price={basketItems.sumPrice}
            text={text}
          />
        </Box>
      )}
      <BasketModal isOpen={isBasketOpen} onClose={onBasketClose} />
    </Flex>
  ) : (
    <ConfirmModal
      isOpen={isConfirmOpen}
      onBasketClose={onBasketClose}
      onClose={toggleBasketAndConfirmModals}
    />
  );
};
