import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const getFirebaseApp: () => FirebaseApp = () => {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
};

export const InitFirestore: () => Firestore = () => getFirestore(getFirebaseApp());
