import { atom } from 'recoil';

export const modalStateStore = atom({
  key: 'modalStateStore',
  default: {
    basket: { isOpen: false },
    confirm: { isOpen: false },
    bill: { isOpen: false },
  },
});
