import { Modal as AbstractModal } from 'ui/abstract-modal';
import { Footer } from './footer';
import { BillItems } from './bill-items';
import { useModal } from '../../../app/lib/utils/useModal';

export const Modal = () => {
  const { isOpen, onClose } = useModal('bill');
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="주문 내역" />
      <AbstractModal.Body content={<BillItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
