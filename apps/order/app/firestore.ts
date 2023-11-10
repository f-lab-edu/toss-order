import { initializeApp, getApp, getApps } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { cache } from 'react';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
// // console.log(firebaseConfig);
// // const app = initializeApp(firebaseConfig);
// // const app = initializeApp(firebaseConfig);
const app = getApps().length <= 0 ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const getDocsFromCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  return querySnapshot.docs.reduce(
    (acc, doc) => ({
      ...acc,
      [doc.id]: doc.data(),
    }),
    {},
  );
};
//
const fetchData = async (name: string) => {
  // const fetchData = cache(async (name: string) => {
  const result = await getDocsFromCollection(name);
  // console.log(result);
  return result;
};
const rawMenuList = fetchData('menu-list').then(res => res);
const menuSequence = fetchData('menu-sequence').then(
  res =>
    // console.log(res);
    res['order-by'].asc,
);
export const menuData = Promise.all([rawMenuList, menuSequence]).then(([data, seq]) => {
  const menu = {};
  seq.map(name => (menu[name] = data[name]));
  return menu;
});
