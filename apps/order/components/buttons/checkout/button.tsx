import { HStack } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { BasketItemsCount, ActionDsecription, Price } from './inner-content';

type CheckoutButtonT = {
  actionDescription: string;
  className?: string;
  count: number;
  onClick: () => void;
  price: number;
};

export const Button = ({
  actionDescription,
  className = 'bg-blue',
  count,
  onClick,
  price,
}: CheckoutButtonT) => {
  const content = (
    <HStack h="70%" justifyContent="space-between" px="5%" w="100%">
      <BasketItemsCount count={count} />
      <ActionDsecription action={actionDescription} />
      <Price price={price} />
    </HStack>
  );

  return <CTAButton className={className} content={content} onClick={onClick} />;
};
