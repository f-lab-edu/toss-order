import { Text } from '@chakra-ui/react';

export const InnerText = ({ children }: { children: string | number }): JSX.Element => (
  <Text fontWeight="extrabold" fontSize="xl">
    {children}
  </Text>
);
