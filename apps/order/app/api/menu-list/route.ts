import { NextResponse } from 'next/server';
import getMenuItems from './get-menu-items';

interface MenuList {
  [key: string]: { name: string; detail: string; image: string; price: number };
}

export async function GET() {
  const menuItems: MenuList | null = await getMenuItems();
  if (!menuItems) return NextResponse.json({ message: 'failed to get data from firestore.' }, { status: 404 });

  if (Object.keys(menuItems).length <= 0) return NextResponse.json({ message: 'data is empty' }, { status: 200 });

  return NextResponse.json(menuItems, { status: 200 });
}
