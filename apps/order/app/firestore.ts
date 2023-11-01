import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8snU4VKsKTlPI9b9Z7KWg6caDb5LyBIM',
  authDomain: 'toss-order.firebaseapp.com',
  projectId: 'toss-order',
  storageBucket: 'toss-order.appspot.com',
  messagingSenderId: '4103214725',
  appId: '1:4103214725:web:686398096f9aad3e087bec',
  measurementId: 'G-3RHXMZ43HL',
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
