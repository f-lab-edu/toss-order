import { NextResponse } from 'next/server';
import menuData from './get-menu';

export async function GET() {
  const menu = await menuData;
  return NextResponse.json(menu, { status: 200 });
}
