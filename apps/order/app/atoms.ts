import { atom } from 'recoil';

const menuListAtom = atom({
  key: 'menuList',
  default: {},
});

const menuSequenceAtom = atom({
  key: 'menuSequence',
  default: [],
});

const basketAtom = atom({
  key: 'basket',
  default: {},
});

const orderHistoryAtom = atom({
  key: 'orderHistory',
  default: [],
});

export { menuListAtom, basketAtom, orderHistoryAtom, menuSequenceAtom };
