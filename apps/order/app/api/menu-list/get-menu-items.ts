import { InitFirestore } from '../../lib/firestore';
import { fetchData } from '../../lib/utils';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}

interface MenuSequence {
  order: { asc: { [key: string]: string } };
}

InitFirestore();

const getUnsortedMenuItems: Promise<MenuList> = fetchData('menu-list');
const getMenuSequence: Promise<MenuSequence> = fetchData('menu-sequence');

const getMenuItems: Promise<MenuList | void> = Promise.all([getUnsortedMenuItems, getMenuSequence])
  .then(([unsortedMenuItems, menuOrderSequence]) =>
    Object.values(menuOrderSequence.order.asc).reduce(
      (acc, menuName: string) => ({
        ...acc,
        [menuName]: unsortedMenuItems[menuName],
      }),
      {},
    ),
  )
  .catch(err => {
    if (process.env.NODE_ENV === 'development') console.error(err);
  });

export default getMenuItems;
