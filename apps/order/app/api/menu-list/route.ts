import { NextResponse } from 'next/server';
import getMenuItems from './get-menu-items';

interface MenuList {
  [key: string]: { detail: string; image: string; price: number };
}

export async function GET() {
  const menuItems: MenuList | void = await getMenuItems;
  if (!menuItems || Object.keys(menuItems).length <= 0) return NextResponse.json(null, { status: 404 });

  return NextResponse.json(menuItems, { status: 200 });
}
