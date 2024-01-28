import { atom } from 'recoil';

export const modal = atom({
  key: 'modal',
  default: {
    basket: false,
    confirm: false,
    bill: false,
    menuDetail: false,
  },
});

export const menuDetailModalStore = atom({
  key: 'menuDetailModalStore',
  default: { id: '', quantity: 0 },
});
