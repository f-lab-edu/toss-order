// import { auth } from 'firebase-admin';
// import { cookies, headers } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';
// import { customInitApp } from '../../lib/firebase-admin-config';
//
// customInitApp();
//
// // export async function POST(request: NextRequest, response: NextResponse) {
// //   const authorization = headers().get('Authorization');
// //   if (authorization?.startsWith('Bearer ')) {
// //     const idToken = authorization.split('Bearer ')[1];
// //     const decodedToken = await auth().verifyIdToken(idToken);
// //
// //     if (decodedToken) {
// //       // Generate session cookie
// //       const expiresIn = 60 * 60 * 24 * 5 * 1000;
// //       const sessionCookie = await auth().createSessionCookie(idToken, {
// //         expiresIn,
// //       });
// //       const options = {
// //         name: 'session',
// //         value: sessionCookie,
// //         maxAge: expiresIn,
// //         httpOnly: true,
// //         secure: true,
// //       };
// //
// //       cookies().set(options);
// //     }
// //   }
// //
// //   return NextResponse.json({}, { status: 200 });
// // }
//
// export async function GET(request: NextRequest) {
//   const session = cookies().get('session')?.value || '';
//   console.log(111111111111111111111111111111);
//   if (!session) {
//     return NextResponse.json({ isLogged: false }, { status: 401 });
//   }
//   console.log(222222222222222222222222222222);
//   const decodedClaims = await auth().verifySessionCookie(session, true);
//   console.log(3333333333333333333333333333);
//   if (!decodedClaims) {
//     return NextResponse.json({ isLogged: false }, { status: 401 });
//   }
//   console.log(44444444444444444444444444444);
//   return NextResponse.json({ isLogged: true }, { status: 200 });
// }

import { auth } from 'firebase-admin';
import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import customInitApp from '../../../lib/firebase-admin-config';

// Init the Firebase SDK every time the server is called
console.log(customInitApp());

export async function POST(request: NextRequest, response: NextResponse) {
  console.log('POST');
  const authorization = headers().get('Authorization');
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];
    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      // Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: 'session',
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };

      // Add the cookie to the browser
      cookies().set(options);
    }
  }

  return NextResponse.json({}, { status: 200 });
}
