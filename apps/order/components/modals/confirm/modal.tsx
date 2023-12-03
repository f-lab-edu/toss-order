import { Modal as AbstractModal } from 'ui/abstract-modal';
import { Flex, Text, useToast } from '@chakra-ui/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Footer } from './footer';
import { basketItemsStore } from '../../../app/stores';
import { moveBasketToHistory } from '../../../app/stores/history-store';
import { useRecoilDisclosure } from '../../../app/lib/utils/useDisclosure';

export const Modal = () => {
  const [basket, setBasket] = useRecoilState(basketItemsStore);
  const toast = useToast();
  const confirmOrder = useSetRecoilState(moveBasketToHistory);
  const { isOpen, onClose } = useRecoilDisclosure('confirm');
  const { onClose: onBasketClose } = useRecoilDisclosure('basket');

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
      <AbstractModal.Footer content={<Footer onConfirm={onConfirm} price={basket.sumPrice} />} />
    </AbstractModal>
  );
};
