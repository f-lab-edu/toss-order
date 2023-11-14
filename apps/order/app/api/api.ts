import { collection, getDocs } from 'firebase/firestore';
import { cache } from 'react';

const getDocsFromCollection = async (collectionName: string) => {
  // const app = firestore;
  // console.log(1);
  // console.log(publicRuntimeConfig);
  // // console.log(getApps());
  // console.log(2);

  const querySnapshot = await getDocs(collection(app, collectionName));
  // const querySnapshot = await getDocs(collection(firestore, collectionName));
  return querySnapshot.docs.reduce(
    (acc, doc) => ({
      ...acc,
      [doc.id]: doc.data(),
    }),
    {},
  );
};

const fetchData = cache(async (name: string) => {
  const result = await getDocsFromCollection(name);
  return result;
});

export default fetchData;
