import { NextResponse } from 'next/server';
import getMenuCategories from './get-menu-categories';

type MenuCategoriesT = {
  [key: string]: {
    id: string;
  };
};

export async function GET() {
  const menuCategories: MenuCategoriesT | null = await getMenuCategories();

  if (menuCategories === null)
    return NextResponse.json({ message: 'failed to get data from database.' }, { status: 503 });

  if (Object.keys(menuCategories).length <= 0)
    return NextResponse.json({ message: 'data is empty' }, { status: 200 });

  return NextResponse.json(menuCategories, { status: 200 });
}
