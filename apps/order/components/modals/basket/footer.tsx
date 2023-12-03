import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';
import { useStoredModalState } from '../../../app/lib/utils/useStoredModalState';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);
  const { onOpen } = useStoredModalState('confirm');

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
        <PrimaryCTAButton onClick={onOpen} price={basketItems.sumPrice} text="주문하기" />
      </Flex>
    </Flex>
  );
};
