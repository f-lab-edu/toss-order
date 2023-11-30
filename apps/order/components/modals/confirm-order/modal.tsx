import { AbstractModal } from 'ui/abstract-modal';

type ConfirmOrderModalT = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: ConfirmOrderModalT) => {
  const a = null;
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="주문 확인" />
      <AbstractModal.Body content={<BasketItems />} />
      <AbstractModal.Footer content={null} />
    </AbstractModal>
  );
};
