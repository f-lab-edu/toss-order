import { Flex } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { InnerText } from '../inner-text';

type AddItemToBasketButtonT = {
  onClick: () => void;
  quantity: number;
};

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => (
  <Flex p={4} w="25%" h="100%" justifyContent="center" alignItems="center">
    <Flex aspectRatio={1} h="100%">
      {quantity ? (
        <CTAButton className="bg-orange" content={<InnerText>{quantity}</InnerText>} onClick={onClick} />
      ) : (
        <CTAButton className="bg-blue" content={<InnerText>담기</InnerText>} onClick={onClick} />
      )}
    </Flex>
  </Flex>
);
