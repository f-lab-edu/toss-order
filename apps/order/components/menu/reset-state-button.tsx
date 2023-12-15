import { Stack, Text, useToast } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';
import { useSetRecoilState } from 'recoil';
import { basketItemsStore } from '../../app/stores';
import { orderHistoryStore } from '../../app/stores/history-store';

export const ResetStateButton = () => {
  const setBasketItems = useSetRecoilState(basketItemsStore);
  const setOrderHistory = useSetRecoilState(orderHistoryStore);
  const toast = useToast();
  const resetBasket = () => {
    setBasketItems({ sumCount: 0, sumPrice: 0 });
    // @ts-ignore
    setOrderHistory({ sumPrice: 0 });
    toast({
      title: '초기화 되었습니다.',
      status: 'success',
      duration: 500,
      isClosable: true,
      containerStyle: {
        marginBottom: '50vh',
      },
    });
  };

  return (
    <Stack alignItems="center" h="50px" mt={2} w="100%">
      <CTAButton
        className="bg-orange"
        content={
          <Text fontSize="xl" fontWeight="extrabold">
            초기화 (FOR DEVELOP)
          </Text>
        }
        onClick={resetBasket}
      />
    </Stack>
  );
};
