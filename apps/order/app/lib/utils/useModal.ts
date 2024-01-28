import { useRecoilState } from 'recoil';
import { modal } from '../../stores';

export const useModal = (modalName: ModalNamesT) => {
  const [isOpenStates, setIsOpenStates] = useRecoilState(modal);
  const isOpen = isOpenStates[modalName];

  const onOpen = () => {
    setIsOpenStates(prevState => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const onClose = () => {
    setIsOpenStates(prevState => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return { isOpen, onOpen, onClose };
};
