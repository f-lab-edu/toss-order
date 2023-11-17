import { Flex } from '@chakra-ui/react';
import { CallStaff, OpenBill } from '../buttons';

const Header = () => (
  <Flex
    alignItems="center"
    bgColor="white"
    h="auto"
    justifyContent="space-around"
    paddingY={4}
    position="sticky"
    top={0}
    w="100%"
    zIndex={1}
  >
    <CallStaff />
    <OpenBill />
  </Flex>
);

export { Header };
