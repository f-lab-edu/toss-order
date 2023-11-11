import { initializeApp } from 'firebase/app';
import { getFirestore, terminate } from 'firebase/firestore';
import { fetchData } from '../fetch-data';
import firestoreKey from '../../../../secret/firestore-key.json';

initializeApp(firestoreKey);

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
