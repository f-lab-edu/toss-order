import { atom, RecoilState, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface MenuItems {
  [key: string]: { detail: string; image: string; name: string; price: { [key: string]: number } };
}

interface BasketItems extends MenuItems {
  [key: string]: {
    count: number;
    totalPrice: number;
  };
}

const { persistAtom } = recoilPersist();

export const basketItemsStore: RecoilState<MenuItems> = atom({
  key: 'basketItemsStore',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

// import { atom, RecoilState } from 'recoil';
// import { recoilPersist } from 'recoil-persist';
//
// type MenuItemsT = {
//   [key: string]: {
//     count: number;
//     totalPrice: number;
//     detail: string;
//     image: string;
//     name: string;
//     price: { defaultPrice: number };
//   };
// };
//
// const { persistAtom } = recoilPersist();
//
// // Helper Function to refresh basket
// const refreshBasket = basket => {
//   // Creating a new object to avoid direct mutation
//   const newBasket = {};
//   Object.keys(basket).forEach(key => {
//     newBasket[key] = {
//       ...basket[key],
//       count: 0,
//       totalPrice: 0,
//     };
//   });
//   return newBasket;
// };
//
// // Helper Function to add item to basket
// const addItemToBasket = (basket, id, itemData) => {
//   const newBasket = { ...basket };
//   if (newBasket[id]) {
//     newBasket[id].count += 1;
//     newBasket[id].totalPrice = newBasket[id].count * itemData.price.defaultPrice;
//   }
//   return newBasket;
// };
//
// export const basketItemsStore: RecoilState<{
//   items: MenuItemsT;
//   actions: {
//     refreshBasket: () => void;
//     addItem: (id: string, itemData) => void;
//   };
// }> = atom({
//   key: 'basketItemsStore',
//   default: {},
//   effects_UNSTABLE: [
//     persistAtom,
//     ({ setSelf }) => {
//       setSelf(prevState => ({
//         ...prevState,
//         actions: {
//           refreshBasket: () => setSelf(state => ({ ...state, items: refreshBasket(state.items) })),
//           addItem: (id, itemData) =>
//             setSelf(state => {
//               console.log('state', state);
//               return { ...state, items: addItemToBasket(state.items, id, itemData) };
//             }),
//         },
//       }));
//     },
//   ],
// });
