import { Modal as AbstractModal } from 'ui/abstract-modal';
import { Footer } from './footer';
import { BillItems } from './bill-items';
import { useRecoilDisclosure } from '../../../app/lib/utils/useDisclosure';

export const Modal = () => {
  const { isOpen, onClose } = useRecoilDisclosure('bill');
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="계산서" />
      <AbstractModal.Body content={<BillItems />} />
      <AbstractModal.Footer content={<Footer />} />
    </AbstractModal>
  );
};
