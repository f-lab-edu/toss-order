import { fetchMenuCategories } from '../database';

type MenuCategoriesT = {
  [key: string]: {
    id: string;
  };
};

const getMenuCategories = async (): Promise<MenuCategoriesT | null> => fetchMenuCategories();

export default getMenuCategories;
