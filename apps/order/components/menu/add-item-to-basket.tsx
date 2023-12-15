import { Box, Flex, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => {
  const buttonClass = `bg-${quantity ? 'orange' : 'blue'}`;
  const content =
    quantity > 0 ? (
      <Text fontSize="3xl" fontWeight="extrabold">
        {quantity}
      </Text>
    ) : (
      <Text fontSize="2xl" fontWeight="extrabold">
        담기
      </Text>
    );
  return (
    <Flex alignItems="center" flexBasis={0} flexGrow={1} h="100%" justifyContent="center" py="1rem">
      <Flex aspectRatio={1} h="100%">
        <Box aspectRatio={1} h="100%">
          <CTAButton className={buttonClass} content={content} onClick={onClick} />
        </Box>
      </Flex>
    </Flex>
  );
};
