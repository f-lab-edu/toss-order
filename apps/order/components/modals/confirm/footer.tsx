import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { commaizeNumber } from '@toss/utils';

type FooterT = {
  onClose: () => void;
  onConfirm: () => void;
  price: number;
};

export const Footer = ({ onClose, price, onConfirm }: FooterT) => (
  <HStack
    alignItems="center"
    flexDirection="row-reverse"
    h="5vh"
    justifyContent="space-evenly"
    mb="10px"
    w="100%"
  >
    <Flex h="100%">
      <CTAButton
        className="bg-blue"
        content={
          <Text fontSize="xl" fontWeight={800} px="2.5vw">
            {commaizeNumber(price)}원 주문하기
          </Text>
        }
        onClick={onConfirm}
      />
    </Flex>
    <Box h="100%" w="30%">
      <CTAButton
        className="bg-orange"
        content={
          <Text fontSize="lg" fontWeight={700}>
            취소하기
          </Text>
        }
        onClick={onClose}
      />
    </Box>
  </HStack>
);
