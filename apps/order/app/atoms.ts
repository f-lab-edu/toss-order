import { atom } from 'recoil';
import axios from 'axios';

const test;

export const menuItemsAtom = atom({
  key: 'menuItems',
  default: axios.get('/api/menu-list').then(res => res),
});

export const menuSequenceAtom = atom({
  key: 'menuSequence',
  default: [],
});

export const basketAtom = atom({
  key: 'basket',
  default: {},
});

export const orderHistoryAtom = atom({
  key: 'orderHistory',
  default: [],
});
