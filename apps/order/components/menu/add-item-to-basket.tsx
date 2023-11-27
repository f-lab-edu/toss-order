import { Flex, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

type AddItemToBasketButtonT = {
  onClick: () => void;
  quantity: number;
};

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => {
  const buttonClass = `bg-${quantity ? 'orange' : 'blue'}`;
  const content = quantity > 0 ? quantity : '담기';
  return (
    <Flex alignItems="center" flexBasis={0} flexGrow={1} h="100%" justifyContent="center" py="1rem">
      <Flex aspectRatio={1} h="100%">
        <CTAButton
          className={buttonClass}
          content={
            <Text fontSize="xl" fontWeight="extrabold">
              {content}
            </Text>
          }
          onClick={onClick}
        />
      </Flex>
    </Flex>
  );
};
