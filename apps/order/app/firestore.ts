import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export function getFirebaseConfig() {
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };

  return firebaseConfig;
}
// const firebaseConfig = { firebaseConfig }
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// const firestore = getFirestore(app);
const Firestore = () => {
  const firebaseConfig = getFirebaseConfig();
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const firestore = getFirestore(app);
  return firestore;
};

export default Firestore;
