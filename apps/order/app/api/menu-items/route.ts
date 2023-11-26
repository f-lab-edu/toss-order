import { NextResponse } from 'next/server';
import getMenuItems from './get-menu-items';

type MenuItemsT = {
  [key: string]: { name: string; detail: string; image: string; price: { [key: string]: number } };
};

export async function GET() {
  const menuItems: MenuItemsT | null = await getMenuItems();
  if (menuItems === null) return NextResponse.json({ message: 'failed to get data from database.' }, { status: 503 });

  if (Object.keys(menuItems).length <= 0) return NextResponse.json({ message: 'data is empty' }, { status: 200 });

  return NextResponse.json(menuItems, { status: 200 });
}
