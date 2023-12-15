import { Modal as AbstractModal } from 'ui/abstract-modal';
import { Footer } from './footer';
import { BillItems } from './bill-items';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

export const Modal = () => {
  const { isOpen, onClose } = useStoredModalState('bill');
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="주문 내역" />
      <AbstractModal.Body content={<BillItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
