import { NextResponse } from 'next/server';
import menuData from './get-menu';

export async function GET() {
  try {
    const menu = await menuData;
    return NextResponse.json(menu, { status: 200 });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    return NextResponse.json(err, { status: 500 });
  }
}
