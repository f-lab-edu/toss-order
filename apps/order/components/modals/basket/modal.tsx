import { Modal as AbstractModal } from 'ui/abstract-modal';
import { BasketItems } from './basket-items';
import { Footer } from './footer';
import { useModal } from '../../../app/lib/utils/useModal';

export const Modal = () => {
  const { isOpen, onClose } = useModal('basket');
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="장바구니" />
      <AbstractModal.Body content={<BasketItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
