import { Stack, VStack, Text, useToast, Flex } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
// import { useEffect } from 'react';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, addItemInBasket, menuCategoriesStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';
import { orderHistoryStore } from '../../app/stores/history-store';
import useMenuCategories from '../../app/lib/utils/useMenuCategories';

const MenuContainer = () => {
  const menuItems = useRecoilValue(menuItemsStore);
  const menuCategoreis = useRecoilValue(menuCategoriesStore);
  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);
  const addItem = useSetRecoilState(addItemInBasket);

  useMenuItems();
  useMenuCategories();

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
  // useEffect(() => {
  //   console.log('menuItems', menuItems);
  //   console.log('menuCategoreis', menuCategoreis);
  // }, [menuItems]);

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem">
      <Stack alignItems="center" w="100%">
        {Object.entries(menuCategoreis)?.map(([category, menuIds]) => (
          <VStack
            bgColor="white"
            // boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            id={category}
            mb="0.3vh"
            pb="2vh"
            pt="2vh"
            w="100%"
          >
            <Flex justifyContent="flex-start" ml="6%" mr="auto">
              <Text fontSize="2xl" fontWeight={900}>
                {category}
              </Text>
            </Flex>
            {Object.values(menuIds).map((menuId: string) => (
              <Menu key={menuId}>
                <Menu.ItemArea {...{ id: menuId, ...menuItems[menuId] }} />
                <Menu.ButtonArea onClick={() => addItem(menuId)} quantity={getQuantity(menuId)} />
              </Menu>
            ))}
          </VStack>
        ))}
        {/* {Object.entries(menuItems)?.map(([id, data]: [string, ItemT]) => ( */}
        {/*  <Menu key={id}> */}
        {/*    <Menu.ItemArea {...{ id, ...data }} /> */}
        {/*    <Menu.ButtonArea onClick={() => addItem(id)} quantity={getQuantity(id)} /> */}
        {/*  </Menu> */}
        {/* ))} */}
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
