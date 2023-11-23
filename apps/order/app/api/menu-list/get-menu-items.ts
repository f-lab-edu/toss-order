import { fetchMenuItems } from '../database';

interface MenuList {
  [key: string]: { name: string; detail: string; image: string; price: number };
}

const getMenuItems = async () => {
  const items: Promise<MenuList | null> = await fetchMenuItems();

  return items;
};

export default getMenuItems;
