import { collection, Firestore, getDocs, getFirestore } from 'firebase/firestore';

const fetchData: (collectionName: string) => Promise<T> = async collectionName => {
  try {
    const app: Firestore = getFirestore();
    const querySnapshot = await getDocs(collection(app, collectionName));
    return querySnapshot.docs.reduce(
      (acc, doc) => ({
        ...acc,
        [doc.id]: doc.data(),
      }),
      {},
    );
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.error(err);

    return null;
  }
};

export { fetchData };
