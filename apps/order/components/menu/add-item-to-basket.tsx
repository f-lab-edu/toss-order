import { Flex, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

type AddItemToBasketButtonT = {
  onClick: () => void;
  quantity: number;
};

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => {
  const buttonClass = `bg-${quantity ? 'orange' : 'blue'}`;
  return (
    <Flex alignItems="center" h="100%" justifyContent="center" p={4}>
      <Flex aspectRatio={1} h="100%">
        <CTAButton
          className={buttonClass}
          content={
            <Text fontSize="xl" fontWeight="extrabold">
              {quantity > 0 ? quantity : '담기'}
            </Text>
          }
          onClick={onClick}
        />
      </Flex>
    </Flex>
  );
};
