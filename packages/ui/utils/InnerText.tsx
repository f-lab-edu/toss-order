import { Text } from '@chakra-ui/react';

const InnerText = (content: string | number): JSX.Element => (
  <Text fontWeight="extrabold" fontSize="xl">
    {content}
  </Text>
);

export default InnerText;
