import { fetchMenuItems } from '../database';

type MenuItemsT = {
  [key: string]: { name: string; detail: string; imageSrc: string; price: { defaultPrice: number } };
};

const getMenuItems = async (): Promise<MenuItemsT | null> => fetchMenuItems();

export default getMenuItems;
