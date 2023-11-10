import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { collection, Firestore, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
let app: FirebaseApp;
let firestore: Firestore;
try {
  if (getApps().length <= 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  firestore = getFirestore(app);
} catch (err) {
  console.error(`error while initializing firestore app. ${err}`);
}

export default firestore;
