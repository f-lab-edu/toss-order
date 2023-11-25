import { Flex, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

type AddItemToBasketButtonT = {
  onClick: () => void;
  quantity: number;
};

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => (
  <Flex alignItems="center" h="100%" justifyContent="center" p={4}>
    <Flex aspectRatio={1} h="100%">
      {quantity ? (
        <CTAButton
          className="bg-orange"
          content={
            <Text fontSize="xl" fontWeight="extrabold">
              {quantity}
            </Text>
          }
          onClick={onClick}
        />
      ) : (
        <CTAButton
          className="bg-blue"
          content={
            <Text fontSize="xl" fontWeight="extrabold">
              담기
            </Text>
          }
          onClick={onClick}
        />
      )}
    </Flex>
  </Flex>
);
