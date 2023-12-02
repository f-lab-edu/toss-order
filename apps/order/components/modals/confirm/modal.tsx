import { AbstractModal } from 'ui/abstract-modal';
import { Box, Flex, Text, useToast } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
import { useEffect } from 'react';
import { Footer } from './footer';
import { basketItemsStore } from '../../../app/stores';
import { moveBasketToHistory, orderHistoryStore } from '../../../app/stores/history-store';

type ConfirmModalT = {
  isOpen: boolean;
  onBasketClose: () => void;
  onClose: () => void;
};

export const Modal = ({ isOpen, onBasketClose, onClose }: ConfirmModalT) => {
  const [basket, setBasket] = useRecoilState(basketItemsStore);
  const toast = useToast();
  const confirmOrder = useSetRecoilState(moveBasketToHistory);
  const test = useRecoilValue(orderHistoryStore);

  const onConfirm = () => {
    onClose();
    onBasketClose();
    setBasket({});
    toast({
      duration: 3000,
      title: '주문을 전송했어요!',
      status: 'success',
      isClosable: true,
      containerStyle: {
        marginBottom: '50vh',
      },
    });
    confirmOrder(basket);
  };
  useEffect(() => {
    console.log(test);
  }, [test]);

  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="주문 확인" />
      <AbstractModal.Body
        content={
          <Flex alignItems="center" justifyContent="center" px="5%" py="4vh">
            <Text fontSize="xl" fontWeight={600}>
              총 {basket.sumCount}개 메뉴를 주문할까요?
            </Text>
          </Flex>
        }
      />
      <AbstractModal.Footer
        content={<Footer onClose={onClose} onConfirm={onConfirm} price={basket.sumPrice} />}
      />
    </AbstractModal>
  );
};
