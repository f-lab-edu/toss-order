import { useRecoilState, useRecoilValue } from 'recoil';
import { collection, Firestore, getDocs, getFirestore } from 'firebase/firestore';
import { basketAtom, orderHistoryAtom } from './atoms';

const getDocsFromCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(app, collectionName));
  return querySnapshot.docs.reduce(
    (acc, doc) => ({
      ...acc,
      [doc.id]: doc.data(),
    }),
    {},
  );
};
// export const fetchData: (app: Firestore, name: string) => Promise<T> = async (app, name) => {
//   const result = await getDocsFromCollection(app, name);
//   return result;
// };

export const BasketActions = () => {
  const [basket, setBasket] = useRecoilState(basketAtom);
  const addBasket = (name: string, amount: number | undefined = 1) => {
    const tempBasket = { ...basket };
    if (tempBasket[name]) {
      tempBasket[name] += amount;
    } else {
      tempBasket[name] = 1;
    }
    if (tempBasket[name] === 0) delete tempBasket[name];

    setBasket(tempBasket);
  };
  const clearBasket = () => {
    setBasket({});
  };
  const getMenuCount = (name: string) => basket[name] || 0;

  return { addBasket, clearBasket, getMenuCount };
};

export const useGetSumOf = (area: 'basket' | 'history'): number => {
  const target = area === 'basket' ? basketAtom : orderHistoryAtom;
  const targetState = useRecoilValue(target);

  return 1;
};
