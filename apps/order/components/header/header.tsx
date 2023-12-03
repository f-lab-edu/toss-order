import { HStack, Text } from '@chakra-ui/react';
import { CallStaff } from './call-staff';
import { OpenBill } from './open-bill';

export const Header = () => (
  <HStack
    alignItems="center"
    bgColor="white"
    borderBottom="2px solid lightgray"
    gap={0}
    justifyContent="space-between"
    minH="10vh"
    pb="2vh"
    position="sticky"
    px="4%"
    top={0}
    w="100%"
    zIndex={1}
  >
    <CallStaff />
    <Text
      fontSize="calc(min(1.5rem + 1vw, 2rem))"
      fontWeight={900}
      letterSpacing="0.5rem"
      overflow="hidden"
      whiteSpace="nowrap"
    >
      메뉴판
    </Text>
    <OpenBill />
  </HStack>
);
