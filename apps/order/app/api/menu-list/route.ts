// // // pages/api/menuData.js
// // import { customInitApp } from '../../../lib/firebase-admin-config';
// //
// // export default async function handler(req, res) {
// //   const db = customInitApp(); // Initialize Firestore
// //
// //   // Helper to fetch documents from a collection
// //   const fetchCollection = async collectionName => {
// //     const collectionRef = db.collection(collectionName);
// //     const snapshot = await collectionRef.get();
// //     return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //   };
// //
// //   // Fetch documents from both collections
// //   const menuList = await fetchCollection('menu-list');
// //   const menuSequence = await fetchCollection('menu-sequence');
// //
// //   // Send the fetched data in response
// //   res.status(200).json({ menuList, menuSequence });
// // }
// // pages/api/menuData.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { customInitApp } from '../../../lib/firebase-admin-config';
//
// // Init the Firebase SDK every time the server is called
// const db = customInitApp();
//
// export async function handler(req: NextRequest) {
//   // Helper to fetch documents from a collection
//   const fetchCollection = async (collectionName: string) => {
//     const collectionRef = db.collection(collectionName);
//     const snapshot = await collectionRef.get();
//     return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   };
//
//   try {
//     // Fetch documents from both collections
//     const menuList = await fetchCollection('menu-list');
//     const menuSequence = await fetchCollection('menu-sequence');
//
//     // Send the fetched data in response
//     return new NextResponse(JSON.stringify({ menuList, menuSequence }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     // Handle any errors that occurred during fetching
//     return new NextResponse(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// }
import { NextResponse } from 'next/server';
import { menuData } from '../../firestore';

export async function GET() {
  const menu = await menuData;
  return NextResponse.json(menu, { status: 200 });
}
