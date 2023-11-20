import { Box, Text, Flex, HStack, VStack, Image } from '@chakra-ui/react';
import { commaizeNumber } from '@toss/utils';
import { memo, ReactNode } from 'react';
import { CTAButton } from '../button';

const Menu = ({ children }: { children: ReactNode }) => (
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
  </HStack>
);
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
    <CTAButton className="bg-blue" onClick={onClick} content={<>content</>} />
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
