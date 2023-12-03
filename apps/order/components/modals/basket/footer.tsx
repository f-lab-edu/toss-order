import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { basketItemsStore } from '../../../app/stores';

export const Footer = () => {
  const basketItems = useRecoilValue(basketItemsStore);

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
      <Flex flexBasis="60%" w="90%">
        {/* TODO: 주문 확인 Modal 구현 후 open하는 함수가 할당될 예정 ticket: toss-order #34 */}
        <PrimaryCTAButton onClick={() => {}} price={basketItems.sumPrice} text="주문하기" />
      </Flex>
    </Flex>
  );
};
