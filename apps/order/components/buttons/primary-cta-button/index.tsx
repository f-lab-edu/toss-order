import { Flex, HStack, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { NumberInCircle } from 'ui/number-in-circle';
import { commaizeNumber } from '@toss/utils';

type PrimaryCTAButtonT = {
  className?: string;
  count?: number;
  onClick: () => void;
  price: number;
  text: string;
};

export const PrimaryCTAButton = ({
  className = 'bg-blue',
  count = 0,
  onClick,
  price,
  text,
}: PrimaryCTAButtonT) => {
  const countElement = count ? <NumberInCircle number={count} /> : null;

  const content = (
    <HStack h="70%" justifyContent="space-between" px="5%" w="100%">
      <Flex flexBasis={0} flexGrow={1} h="100%" justifyContent="flex-start">
        {countElement}
      </Flex>
      <Flex alignItems="center" flexBasis={0} flexGrow={1} justifyContent="center">
        <Text fontSize="xl" fontWeight={900}>
          {text}
        </Text>
      </Flex>
      <Flex flexBasis={0} flexGrow={1} justifyContent="flex-end">
        <Text fontSize="md" fontWeight="extrabold">
          {commaizeNumber(price)}원
        </Text>
      </Flex>
    </HStack>
  );

  return <CTAButton className={className} content={content} onClick={onClick} />;
};
