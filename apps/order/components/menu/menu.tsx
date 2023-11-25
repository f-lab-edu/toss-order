import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AddItemToBasketButton } from './add-item-to-basket';
import { Item } from './item';

const Menu = ({ children }: { children: ReactNode }): JSX.Element => (
  <HStack
    alignItems="center"
    backgroundColor="white"
    border="1px solid black"
    borderRadius="8px"
    gap={0}
    h="24"
    marginBottom="6px"
    w="100%"
  >
    {children}
  </HStack>
);

Menu.ItemArea = Item;

Menu.ButtonArea = AddItemToBasketButton;

export { Menu };
