import { collection, getDocs } from 'firebase/firestore';
import { cache } from 'react';
import firestore from './firestore';

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

const fetchData = cache(async (name: string) => {
  const result = await getDocsFromCollection(name);
  return result;
});

export default fetchData;
