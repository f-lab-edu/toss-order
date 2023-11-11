import { NextResponse } from 'next/server';
import menuData from './get-menu';

export async function GET() {
  const menu = await menuData;
  if (!menu || Object.keys(menu).length <= 0) return NextResponse.json(null, { status: 500 });

  return NextResponse.json(menu, { status: 200 });
}
