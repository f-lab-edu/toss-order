import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const basketItemsAtom: RecoilState<{ [key: string]: number }> = atom({
  key: 'basketItemsAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
