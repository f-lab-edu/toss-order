import { fetchMenuItems } from '../database';

type MenuItemsT = {
  [key: string]: { detail: string; image: string; name: string; price: { [key: string]: number } };
};

const getMenuItems = async () => {
  const items: Promise<MenuItemsT | null> = await fetchMenuItems();

  return items;
};

export default getMenuItems;
