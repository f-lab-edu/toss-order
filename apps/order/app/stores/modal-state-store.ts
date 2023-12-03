import { atom } from 'recoil';

export const modalStateStore = atom({
  key: 'modalStateStore',
  default: {
    basket: { isOpen: false },
  },
});
