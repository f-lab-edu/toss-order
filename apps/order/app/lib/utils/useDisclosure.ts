import { useRecoilState } from 'recoil';
import { modalStateStore } from '../../stores/modal-state-store';

type ModalNames = 'basket' | 'confirm' | 'bill';

export const useRecoilDisclosure = (modalName: ModalNames) => {
  const [disclosures, setDisclosures] = useRecoilState(modalStateStore);
  const modalState = disclosures[modalName];
  const { isOpen } = modalState;

  const onOpen = () => {
    setDisclosures(prevState => ({
      ...prevState,
      [modalName]: { ...prevState[modalName], isOpen: true },
    }));
  };

  const onClose = () => {
    setDisclosures(prevState => ({
      ...prevState,
      [modalName]: { ...prevState[modalName], isOpen: false },
    }));
  };

  return { isOpen, onOpen, onClose };
};
