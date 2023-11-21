import { Box, Text, Flex, HStack, VStack, Image } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { createContext, memo, ReactNode, useContext } from 'react';
import { CTAButton } from 'ui/button';

type MenuDisplayAreaPropsT = {
  props: {
    image: string;
    price: number;
  };
};
const NameContext = createContext('');

const Menu = ({ children, name }: { children: ReactNode; name: string }): JSX.Element => (
  <NameContext.Provider value={name}>
    <HStack
      alignItems="center"
      backgroundColor="white"
      border="1px solid black"
      borderRadius="8px"
      gap={0}
      h="24"
      marginBottom="6px"
      w="94%"
    >
      {children}
    </HStack>
  </NameContext.Provider>
);

const MenuName = ({ name }: { name: string }) => <Text mb="4px">{name}</Text>;

const MenuPrice = ({ price }: { price: number }) => <Text>{commaizeNumber(price)}원</Text>;

const TextArea = ({ name, price }: { name: string; price: number }) => (
  <VStack alignItems="flex-start" ml="2%" w="60%">
    <MenuName name={name} />
    <MenuPrice price={price} />
  </VStack>
);

const MenuImage = ({ alt, src }: { alt: string; src: string }) => (
  <Box aspectRatio={1} h="100%">
    <Image alt={alt} src={src} />
  </Box>
);

const MenuDisplayArea = memo(({ props: { image, price } }: MenuDisplayAreaPropsT) => {
  const name = useContext(NameContext);
  return (
    // TODO: Modal 구현 후 onClick에 메뉴 상세보기 Modal을 띄우는 action이 할당될 예정. Ticket: toss-order #22, toss-order #23
    <Box w="75%" h="100%" onClick={() => {}}>
      <HStack w="100%" h="100%" gap={0} justifyContent="space-between">
        <TextArea name={name} price={price} />
        <MenuImage alt={name} src={image} />
      </HStack>
    </Box>
  );
});

const AddToBasketButton = ({ onClick, quantity }: { onClick: () => void; quantity: number }): JSX.Element => (
  <Flex aspectRatio={1} h="100%">
    {quantity ? (
      <CTAButton className="bg-orange" content={<>{quantity}</>} onClick={onClick} />
    ) : (
      <CTAButton className="bg-blue" content={<>담기</>} onClick={onClick} />
    )}
  </Flex>
);

const ButtonArea = ({ addToBasket, quantity }: { addToBasket: () => void; quantity: number }): JSX.Element => (
  <Flex p={4} w="25%" h="100%" justifyContent="center" alignItems="center">
    <AddToBasketButton onClick={addToBasket} quantity={quantity} />
  </Flex>
);

Menu.DisplayArea = MenuDisplayArea;
Menu.ButtonArea = ButtonArea;

export { Menu };
