import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env['API-KEY'],
  authDomain: process.env['AUTH-DOMAIN'],
  projectId: process.env['PROJECT-ID'],
  storageBucket: process.env['STORAGE-BUCKET'],
  messagingSenderId: process.env['MESSAGING-SENDER-ID'],
  appId: process.env['APP-ID'],
  measurementId: process.env['MEASUREMENT-ID'],
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
