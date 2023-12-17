import { Modal as AbstractModal } from 'ui/abstract-modal';
import { useToast } from '@chakra-ui/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Footer } from './footer';
import { basketItemsStore } from '../../../app/stores';
import { moveBasketToHistory } from '../../../app/stores/history-store';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';
import { ConfirmItems } from './confirm-items';

export const Modal = () => {
  const [basket, setBasket] = useRecoilState(basketItemsStore);
  const toast = useToast();
  const confirmOrder = useSetRecoilState(moveBasketToHistory);
  const { isOpen: isConfirmOpen, onClose: onConfirmClose } = useStoredModalState('confirm');
  const { onClose: onBasketClose, onOpen: onBasketOpen } = useStoredModalState('basket');
  const toggleModal = () => {
    onConfirmClose();
    onBasketOpen();
  };

  const onConfirm = () => {
    onBasketClose();
    onConfirmClose();
    confirmOrder(basket);
    toast({
      containerStyle: {
        marginTop: '25vh',
      },
      duration: 1000,
      isClosable: true,
      position: 'top',
      status: 'success',
      title: '주문을 전송했어요!',
    });
    setBasket({ sumCount: 0, sumPrice: 0 });
  };

  return (
    <AbstractModal isOpen={isConfirmOpen} onClose={toggleModal}>
      <AbstractModal.Header onClose={toggleModal} title="주문 확인" />
      <AbstractModal.Body content={<ConfirmItems />} />
      <AbstractModal.Footer content={<Footer onClose={toggleModal} onConfirm={onConfirm} />} />
    </AbstractModal>
  );
};
