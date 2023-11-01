import { useRecoilState } from 'recoil';
import React, { cache, useEffect } from 'react';
import { AspectRatio, Box, Flex, Text, Image } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import NextImage from 'next/image';
import { basketAtom } from './atoms';
import firestore from './firestore';
import { SquareButton } from '../components';

const getDocsFromCollection = async (collectionName: string) => {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  return querySnapshot.docs.reduce((acc, doc) => {
    acc[doc.id] = {
      ...doc.data(),
    };
    return acc;
  }, {});
};

const menu = {};

const fetchData = cache(async (name: string) => {
  const result = await getDocsFromCollection(name);
  // console.log(result);
  return result;
  // const menuSequence = await getDocsFromCollection('menu-sequence');
  // const menuList = await getDocsFromCollection('menu-list');
  // console.log(menuSequence);
  // console.log(menuList);
  // return menuList;
  // menuList.forEach(doc => {
  //   debugger;
  //   console.log(doc);
  //   // console.log(`${doc.id} => ${doc.data().price}, ${doc.data().image}`);
  // });
});
export { fetchData };
const tempMenu = fetchData('menu-list');
const tempSeq = fetchData('menu-sequence');

export { tempMenu };
// console.log(tempMenu);
// console.log(tempSeq);
// export const cacheTest = cache(async () => {
//   const res = await test();
//   console.log(res);
//   return res;
// });

function BasketActions() {
  const [basket, setBasket] = useRecoilState(basketAtom);

  const addBasket = (name: string, amount: number | undefined = 1) => {
    // console.log(name, amount);
    const tempBasket = { ...basket };
    if (tempBasket[name]) {
      tempBasket[name] += amount;
    } else {
      tempBasket[name] = 1;
    }
    if (tempBasket[name] === 0) delete tempBasket[name];

    setBasket(tempBasket);
  };
  const clearBasket = () => {
    setBasket({});
  };
  const getMenuCount = (name: string) => basket[name] || 0;

  return { addBasket, clearBasket, getMenuCount };
}

export const ImageWithContainer = ({ src, alt }: { src: string; alt: string }): JSX.Element => (
  <Box w="100%" h="100%" position="relative">
    <NextImage src={src} alt={alt} fill />
  </Box>
);

const innerText = (content: string | number): JSX.Element => (
  <Text fontWeight="extrabold" fontSize="xl">
    {content}
  </Text>
);

export { BasketActions, innerText };
