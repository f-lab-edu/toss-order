import { Flex, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { commaizeNumber } from '@toss/utils';

type FooterT = {
  onConfirm: () => void;
  price: number;
};

export const Footer = ({ price, onConfirm }: FooterT) => (
  <Flex alignItems="center" h="5vh" justifyContent="center" mb="10px" w="100%">
    <Flex h="100%" w="fit-content">
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
  </Flex>
);
