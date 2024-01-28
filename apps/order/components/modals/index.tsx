import { useRecoilValue } from 'recoil';
import { BasketModal } from './basket';
import { BillModal } from './bill';
import { ConfirmModal } from './confirm';
import { MenuDetailModal } from './menu-detail';
import { modal } from '../../app/stores';

const Switch = ({ modals }: { modals: { [key: string]: JSX.Element } }) => {
  const modalKeys = useRecoilValue(modal);
  const openedModal = Object.keys(modalKeys).find(key => modalKeys[key] === true);

  return modals[openedModal] || null;
};

export const Modals = () => (
  <Switch
    modals={{
      basket: <BasketModal />,
      bill: <BillModal />,
      confirm: <ConfirmModal />,
      menuDetail: <MenuDetailModal />,
    }}
  />
);
