import { useRecoilState } from 'recoil';
import { modalStateStore } from '../../stores/modal-state-store';

type ModalNamesT = 'basket' | 'confirm' | 'bill' | 'menuDetail';

export const useStoredModalState = (modalName: ModalNamesT) => {
  const [isOpenStates, setIsOpenStates] = useRecoilState(modalStateStore);
  const modalState = isOpenStates[modalName];
  const { isOpen } = modalState;

  const onOpen = () => {
    setIsOpenStates(prevState => ({
      ...prevState,
      [modalName]: { ...prevState[modalName], isOpen: true },
    }));
  };

  const onClose = () => {
    setIsOpenStates(prevState => ({
      ...prevState,
      [modalName]: { ...prevState[modalName], isOpen: false },
    }));
  };

  return { isOpen, onOpen, onClose };
};
