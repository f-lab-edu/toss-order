import { atom } from 'recoil';

export const modalStateStore = atom({
  key: 'modalStateStore',
  default: {
    basket: { isOpen: false },
    confirm: { isOpen: false },
    bill: { isOpen: false },
    menuDetail: { isOpen: false },
  },
});

export const menuDetailModalStore = atom({
  key: 'menuDetailModalStore',
  default: { id: '', quantity: 0 },
});
