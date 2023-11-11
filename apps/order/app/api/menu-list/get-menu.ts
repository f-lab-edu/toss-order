import { InitFirestore } from '../../lib/firestore';
import { fetchData } from '../../lib/utils';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}

interface MenuSequence {
  sorted: { list: { [key: string]: string } };
}

InitFirestore();

const unsortedMenu: Promise<MenuList> = fetchData('menu-list');
const menuSequence: Promise<string[]> = fetchData('menu-sequence').then((res: MenuSequence) =>
  Object.keys(res.sorted.list)
    .sort((sequenceKeyA, sequenceKeyB) => parseInt(sequenceKeyA, 10) - parseInt(sequenceKeyB, 10))
    .map(key => res.sorted.list[key]),
);

const menuData: Promise<MenuList | void> = Promise.all([unsortedMenu, menuSequence])
  .then(([data, sequence]) => {
    const menu: MenuList = {};
    sequence.forEach((name: string) => {
      menu[name] = data[name];
    });
    return menu;
  })
  .catch(err => {
    if (process.env.NODE_ENV === 'development') console.error(err);
  });

export default menuData;
