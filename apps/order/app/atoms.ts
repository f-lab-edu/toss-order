import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const basketAtom = atom({
  key: 'basket',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
