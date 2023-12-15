import { Modal as AbstractModal } from 'ui/abstract-modal';
import { useRecoilValue } from 'recoil';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';
import { menuItemsStore } from '../../../app/stores';
import { Item } from './item';
import { Footer } from './footer';
import { menuDetailModalStore } from '../../../app/stores/modal-state-store';

export const Modal = () => {
  const { id } = useRecoilValue(menuDetailModalStore);
  const { isOpen, onClose } = useStoredModalState('menuDetail');
  const menuDetail = useRecoilValue(menuItemsStore)[id];

  return (
    id && (
      <AbstractModal isOpen={isOpen} onClose={onClose}>
        <AbstractModal.Header onClose={onClose} title="메뉴 보기" />
        <AbstractModal.Body content={<Item {...menuDetail} />} />
        <AbstractModal.Footer content={<Footer price={menuDetail.price.defaultPrice} />} />
      </AbstractModal>
    )
  );
};
