import { Flex, Text } from '@chakra-ui/react';

export const NumberInCircle = ({ number }: { number: number }) => {
  let fontSize: string;
  if (number < 10) {
    fontSize = '3xl';
  } else if (number < 100) {
    fontSize = '2xl';
  } else {
    fontSize = 'xl';
  }
  return (
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
        <Text fontSize={fontSize} fontWeight="extrabold">
          {number}
        </Text>
      </Flex>
    </Flex>
  );
};
