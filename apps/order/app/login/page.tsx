'use client';

import { getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '../../lib/firebase-config';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async userCred => {
      if (!userCred) {
        return;
      }

      fetch('/api/login', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then(response => {
        if (response.status === 200) {
          router.push('/protected');
        }
      });
    });
  }, []);

  async function signIn() {
    signInWithRedirect(auth, provider).then(res => console.log(res));
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}
