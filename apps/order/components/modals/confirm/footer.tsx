import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { commaizeNumber } from '@toss/utils';
import { useRecoilValue } from 'recoil';
import { basketItemsStore } from '../../../app/stores';

type FooterT = {
  onClose: () => void;
  onConfirm: () => void;
};

export const Footer = ({ onClose, onConfirm }: FooterT) => {
  const { sumPrice, sumCount } = useRecoilValue(basketItemsStore);
  return (
    <VStack
      alignItems="center"
      borderTop="2px lightgray solid"
      gap={0}
      h="0"
      justifyContent="center"
      minH="25vh"
      pb="4vh"
      w="100%"
    >
      <Flex alignItems="center" flexGrow={1} justifyContent="space-between" px="4%" w="100%">
        <Text flexBasis="40%" fontSize="2xl" fontWeight={800}>
          합계
        </Text>
        <Text flexBasis="20%" fontSize="md" fontWeight={800}>
          {`${sumCount}개`}
        </Text>
        <Text
          alignItems="flex-end"
          display="flex"
          flexBasis="30%"
          flexDirection="column"
          fontSize="xl"
          fontWeight={800}
        >
          {commaizeNumber(sumPrice || 0)}원
        </Text>
      </Flex>
      <Flex alignItems="center" flexGrow={1}>
        <Text fontSize="2xl" fontWeight={700}>
          이렇게 주문하시겠어요?
        </Text>
      </Flex>
      <HStack alignItems="center" flexGrow={1} minH="50px" py="2vh" w="100%">
        <Flex h="100%" px="10%" w="50%">
          <CTAButton
            className="bg-orange"
            content={
              <Text fontSize="xl" fontWeight={700} px="2.5vw">
                돌아가기
              </Text>
            }
            onClick={onClose}
          />
        </Flex>
        <Flex h="100%" px="10%" w="50%">
          <CTAButton
            className="bg-blue"
            content={
              <Text fontSize="2xl" fontWeight={700} px="2.5vw">
                주문하기
              </Text>
            }
            onClick={onConfirm}
          />
        </Flex>
      </HStack>
    </VStack>
  );
};
