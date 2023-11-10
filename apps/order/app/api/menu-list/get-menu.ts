import { collection, getDocs } from 'firebase/firestore';
import firestore from '../../firestore';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}
interface MenuSequence {
  sorted: { list: { [key: string]: string } };
}

const getDocsFromCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  return querySnapshot.docs.reduce(
    (acc, doc) => ({
      ...acc,
      [doc.id]: doc.data(),
    }),
    {},
  );
};
const fetchData: (name: string) => Promise<any> = async (name: string) => {
  const result = await getDocsFromCollection(name);
  return result;
};
const unsortedMenu: Promise<MenuList> = fetchData('menu-list');
const menuSequence: Promise<string[]> = fetchData('menu-sequence').then((res: MenuSequence) => {
  const orderedArray: string[] = Object.keys(res.sorted.list)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(key => res.sorted.list[key]);
  return orderedArray;
});

const menuData: Promise<MenuList | void> = Promise.all([unsortedMenu, menuSequence])
  .then(([data, sequence]) => {
    const menu: MenuList = {};
    sequence.forEach((name: string) => (menu[name] = data[name]));
    return menu;
  })
  .catch(err => console.error(err));

export default menuData;
