import { fetchMenuItems } from '../database';

type MenuItemsT = {
  [key: string]: { detail: string; imageSrc: string; name: string; price: { defaultPrice: number } };
};

const getMenuItems = async (): Promise<MenuItemsT | null> => fetchMenuItems();

export default getMenuItems;
