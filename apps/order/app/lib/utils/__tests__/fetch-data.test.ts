import { initializeApp } from 'firebase/app';
import { getFirestore, terminate } from 'firebase/firestore';
import { fetchData } from '../fetch-data';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
// TODO: Set MSW for mock data instead of calling real server. TICKET: toss-order #12
initializeApp(firebaseConfig);
afterAll(() => terminate(getFirestore()));

describe('fetchData', () => {
  it('should fetch menu-list successfully', async () => {
    const result = await fetchData('menu-list');
    Object.values(result).forEach(val => {
      expect(val).toHaveProperty('price');
      expect(val).toHaveProperty('image');
      expect(val).toHaveProperty('detail');
    });
  });
  it('should fetch menu-sequence successfully', async () => {
    const result = await fetchData('menu-sequence');
    expect(result).toHaveProperty('sorted');
    expect(result.sorted).toHaveProperty('list');
    Object.keys(result.sorted.list).forEach(key => {
      expect(Number.isNaN(key)).toBe(false);
    });
  });
});
