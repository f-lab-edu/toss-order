import { AbstractModal } from 'ui/abstract-modal';
import { Flex, Text } from '@chakra-ui/react';
import { Footer } from '../confirm/footer';
import { BillItems } from './bill-items';

type BillModalT = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ isOpen, onClose }: BillModalT) => {
  const a = null;
  return (
    <AbstractModal isOpen={isOpen} onClose={onClose}>
      <AbstractModal.Header onClose={onClose} title="계산서" />
      <AbstractModal.Body content={<BillItems />} />
      {/* <AbstractModal.Footer */}
      {/*  content={<Footer onClose={onClose} onConfirm={onConfirm} price={basket.sumPrice} />} */}
      {/* /> */}
    </AbstractModal>
  );
};
