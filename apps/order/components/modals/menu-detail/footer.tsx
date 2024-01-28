import { Flex } from '@chakra-ui/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { PrimaryCTAButton } from '../../buttons/primary-cta-button';
import { menuDetailModalStore, addItemInBasket } from '../../../app/stores';
import { useModal } from '../../../app/lib/utils/useModal';

export const Footer = ({ price }: { price: number }) => {
  const { id, quantity } = useRecoilValue(menuDetailModalStore);
  const { onClose } = useModal('menuDetail');
  const addItem = useSetRecoilState(addItemInBasket);
  const handleAddToBasket = () => {
    Array.from({ length: quantity }, () => addItem(id));
    onClose();
  };

  return (
    <Flex
      alignItems="center"
      borderTop="2px solid lightgray"
      flexDirection="column"
      h="0"
      justifyContent="center"
      minH="100px"
      w="100%"
    >
      <Flex flexBasis="60%" w="90%">
        <PrimaryCTAButton onClick={handleAddToBasket} price={quantity * price} text="장바구니에 담기" />
      </Flex>
    </Flex>
  );
};
