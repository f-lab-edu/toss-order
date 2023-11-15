import { fetchData } from '../../lib/utils';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}

interface MenuSequence {
  order: { asc: { [key: string]: string } };
}
const getUnsortedMenuItems: Promise<MenuList> = fetchData('menu-list');
const getMenuSequence: Promise<MenuSequence> = fetchData('menu-sequence');

const getMenuItems: Promise<MenuList | null> = Promise.all([getUnsortedMenuItems, getMenuSequence])
  .then(([unsortedMenuItems, { order }]) => {
    const menuNames: string[] = Object.values(order.asc);
    // TODO: Make data structuring. Ticket: toss-order #11
    return menuNames.reduce(
      (acc, menuName: string) => ({
        ...acc,
        [menuName]: unsortedMenuItems[menuName],
      }),
      {},
    );
  })
  .catch(err => {
    if (process.env.NODE_ENV === 'development') console.error(err);
    return null;
  });

export default getMenuItems;
