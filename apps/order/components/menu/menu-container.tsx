import { Stack, VStack, Text, useToast } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, addItemInBasket } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';
import { orderHistoryStore } from '../../app/stores/history-store';

type ItemT = {
  imageSrc: string;
  name: string;
  price: { defaultPrice: number };
};

const MenuContainer = () => {
  const menuItems = useRecoilValue(menuItemsStore);
  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);
  const addItem = useSetRecoilState(addItemInBasket);

  useMenuItems();

  const setOrderHistory = useSetRecoilState(orderHistoryStore);

  // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
  const toast = useToast();
  const resetBasket = () => {
    setBasketItems({ sumCount: 0, sumPrice: 0 });
    setOrderHistory({});
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

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem" px="4%">
      <Stack alignItems="center" w="100%">
        {Object.entries(menuItems)?.map(([id, data]: [string, ItemT]) => (
          <Menu key={id}>
            <Menu.ItemArea {...{ id, ...data }} />
            <Menu.ButtonArea onClick={() => addItem(id)} quantity={getQuantity(id)} />
          </Menu>
        ))}
      </Stack>
      <Stack alignItems="center" h="50px" mt={2} w="100%">
        {/* // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED */}
        <CTAButton
          className="bg-orange"
          content={
            <Text fontSize="xl" fontWeight="extrabold">
              초기화 (FOR TEST)
            </Text>
          }
          onClick={resetBasket}
        />
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
