import { Flex, Text } from '@chakra-ui/react';

export const NumberInCircle = ({ number }: { number: number }) => (
  <Flex aspectRatio={1} h="100%">
    <Flex
      alignItems="center"
      aspectRatio={1}
      bgColor="white"
      color="black"
      h="100%"
      justifyContent="center"
      p={0}
      rounded="full"
    >
      <Text fontSize="2xl" fontWeight="extrabold">
        {number}
      </Text>
    </Flex>
  </Flex>
);
