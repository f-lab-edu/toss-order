import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

export const AddItemToBasketButton = ({ onClick, quantity }: AddItemToBasketButtonT): JSX.Element => {
  const buttonClass = `bg-${quantity ? 'orange' : 'blue'}`;
  const content =
    quantity > 0 ? (
      <HStack gap={0}>
        <Text fontSize="2xl" fontWeight="extrabold">
          {quantity}
        </Text>
        {quantity < 100 ? (
          <Text fontSize="xl" fontWeight="bold">
            개
          </Text>
        ) : null}
      </HStack>
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
