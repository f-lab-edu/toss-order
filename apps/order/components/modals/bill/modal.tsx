import { Modal as AbstractModal } from 'ui/abstract-modal';
import { Footer } from './footer';
import { BillItems } from './bill-items';

type BillModalT = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: BillModalT) => (
  <AbstractModal isOpen={isOpen} onClose={onClose}>
    <AbstractModal.Header onClose={onClose} title="계산서" />
    <AbstractModal.Body content={<BillItems />} />
    <AbstractModal.Footer content={<Footer />} />
  </AbstractModal>
);
