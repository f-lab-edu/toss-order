import { AbstractModal } from 'ui/abstract-modal';
import { BasketItems } from './basket-items';

type BasketModalT = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: BasketModalT) => (
  <AbstractModal isOpen={isOpen} onClose={onClose}>
    <AbstractModal.Header onClose={onClose} title="장바구니" />
    <AbstractModal.Body content={<BasketItems />} />
    <AbstractModal.Footer content={null} />
  </AbstractModal>
);
