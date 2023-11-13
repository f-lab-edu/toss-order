import { fetchData } from '../../lib/utils';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}

interface MenuSequence {
  order: { asc: { [key: string]: string } };
}
const getUnsortedMenuItems: Promise<MenuList> = fetchData('menu-list');
const getMenuSequence: Promise<MenuSequence> = fetchData('menu-sequence');

const getMenuItems: Promise<MenuList | void> = Promise.all([getUnsortedMenuItems, getMenuSequence])
  .then(([unsortedMenuItems, menuOrderSequence]) => {
    const menuNames: string[] = Object.values({ ...menuOrderSequence.order.asc });
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
  });

export default getMenuItems;
