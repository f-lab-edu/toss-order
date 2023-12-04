import { Modal as AbstractModal } from 'ui/abstract-modal';
import { BasketItems } from './basket-items';
import { Footer } from './footer';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

export const Modal = () => {
  const { isOpen, onClose } = useStoredModalState('basket');
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="장바구니" />
      <AbstractModal.Body
        content={
          // eslint-disable-next-line
          // @ts-ignore
          <BasketItems />
        }
      />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
