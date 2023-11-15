import { Box, Text, Button, Flex, HStack, VStack, AspectRatio, Image } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import React, { memo, ReactNode } from 'react';
import InnerText from '../utils/inner-text';
import { CTAButton, SquareButton } from '../button';
import { BasketActions } from '../app/utils';

// const MenuContainer = ({ children }) => <div className="menu-container">{children}</div>;
//
// interface MenuProps {
//   name: string;
//   price: number;
//   onBasketCount: number;
//   imageUrl?: string;
// }

const Menu = ({ children }: { children: React.ReactNode }) => (
  // const { addBasket } = BasketActions();
  <HStack
    alignItems="center"
    marginBottom="6px"
    border="1px solid black"
    borderRadius="8px"
    backgroundColor="white"
    w="94%"
    h="24"
    gap={0}
  >
    {children}
    {/* <Box w="75%" h="100%"> */}
    {/*  <HStack w="100%" h="100%"> */}
    {/*    <VStack alignItems="flex-start" w="60%" ml="2%"> */}
    {/*      <Text mb="4px">{name}</Text> */}
    {/*      <Text>{commaizeNumber(price)}원</Text> */}
    {/*    </VStack> */}
    {/*    <Box w="40%" h="100%"> */}
    {/*      {imageUrl && <ImageWithContainer src={imageUrl} alt="" />} */}
    {/*    </Box> */}
    {/*  </HStack> */}
    {/* </Box> */}
    {/* <Flex p={0} w="30%" h="100%" justifyContent="center" alignItems="center"> */}
    {/*  {onBasketCount === 0 ? ( */}
    {/*    <SquareButton color="blue" onClick={() => addBasket(name)} content={InnerText('담기')} /> */}
    {/*  ) : ( */}
    {/*    <SquareButton color="orange" onClick={() => addBasket(name)} content={InnerText(onBasketCount)} /> */}
    {/*  )} */}
    {/* </Flex> */}
  </HStack>
);
// : {
//   children: React.ReactNode;
//   onMenuAreaClick: () => void | null;
// }): JSX.Element
const MenuDisplayArea = memo(({ children, onMenuAreaClick }) => (
  <Box w="75%" h="100%" onClick={onMenuAreaClick}>
    <HStack w="100%" h="100%" gap={0}>
      {children}
    </HStack>
  </Box>
));

const AddToBasketButtonArea = ({ children }: { children: ReactNode }): JSX.Element => (
  <Flex p={4} w="25%" h="100%" justifyContent="center" alignItems="center">
    {children}
  </Flex>
);
const AddToBasketButton = ({ onClick, content }: { onClick: () => void; content: string }): JSX.Element => (
  <Flex aspectRatio={1} h="100%">
    <CTAButton className="bg-blue" onClick={onClick} content={content} />
  </Flex>
);

const MenuName = ({ children }: { children: string }) => <Text mb="4px">{children}</Text>;
const MenuPrice = ({ children }: { children: number }) => <Text>{commaizeNumber(children)}원</Text>;
const TextArea = ({ children }: { children: ReactNode }) => (
  <VStack alignItems="flex-start" w="60%" ml="2%">
    {children}
  </VStack>
);
const MenuImage = ({ src, alt }: { src: string; alt: string }) => (
  <Box h="100%" aspectRatio={1}>
    <Image src={src} alt={alt} />
  </Box>
);

export { Menu };
Menu.MenuArea = MenuDisplayArea;
Menu.TextArea = TextArea;
Menu.ButtonArea = AddToBasketButtonArea;
Menu.AddToBasketButton = AddToBasketButton;
Menu.Name = MenuName;
Menu.Price = MenuPrice;
Menu.Image = MenuImage;
