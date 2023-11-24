import { HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AddItemToBasketButton } from './add-item-to-basket';
import { MenuItem } from './item';

const Menu = ({ children }: { children: ReactNode }): JSX.Element => (
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
);

Menu.DisplayArea = MenuItem;

Menu.ButtonArea = AddItemToBasketButton;

export { Menu };