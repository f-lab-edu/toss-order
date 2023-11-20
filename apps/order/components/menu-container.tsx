import { VStack } from '@chakra-ui/react';

const MenuContainer = ({ children }: { children: React.ReactNode }) => (
  <VStack px="2%" alignItems="center" justifyContent="center">
    {children}
  </VStack>
);

export default MenuContainer;
