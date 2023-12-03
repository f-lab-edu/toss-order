import { Flex } from '@chakra-ui/react';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';

export const Footer = () => {
  const a = 1;
  return (
    <Flex
      alignItems="center"
      borderTop="2px solid lightgray"
      flexDirection="column"
      h="0"
      justifyContent="center"
      minH="80px"
      w="100%"
    >
      <Flex flexBasis="80%" w="90%">
        <PrimaryCTAButton onClick={() => {}} price={10000} text="장바구니에 담기" />
      </Flex>
    </Flex>
  );
};
