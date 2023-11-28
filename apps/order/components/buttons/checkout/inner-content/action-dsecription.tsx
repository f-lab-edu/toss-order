import { Flex, Text } from '@chakra-ui/react';

export const ActionDsecription = ({ action }: { action: string }) => (
  <Flex alignItems="center" flexBasis={0} flexGrow={1} justifyContent="center">
    <Text fontSize="xl" fontWeight={900}>
      {action}
    </Text>
  </Flex>
);
