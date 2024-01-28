import { Stack, VStack, Text, Flex, useToast } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, addItemInBasket, menuCategoriesStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';
import useMenuCategories from '../../app/lib/utils/useMenuCategories';
import { ResetStateButton } from './reset-state-button';
import { MenuSkeleton } from './skeleton';

const MenuContainer = () => {
  const [menuItems, setMenuItems] = useRecoilState(menuItemsStore);
  const [menuCategoreis, setMenuCategories] = useRecoilState(menuCategoriesStore);
  const basketItems = useRecoilValue(basketItemsStore);
  const addItem = useSetRecoilState(addItemInBasket);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  const useQueryItemsResult = useMenuItems();
  const useQueryCategoriesResult = useMenuCategories();

  useEffect(() => {
    if (useQueryCategoriesResult?.data) setMenuCategories(useQueryCategoriesResult.data);
  }, [useQueryCategoriesResult]);

  useEffect(() => {
    if (useQueryItemsResult?.data) setMenuItems(useQueryItemsResult.data);
  }, [useQueryItemsResult]);

  useEffect(() => {
    if (!(useQueryItemsResult?.isLoading || useQueryCategoriesResult?.isLoading)) setIsLoading(false);
  }, [useQueryItemsResult, useQueryCategoriesResult]);

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  const activeToastID = 'onAddItemClick-Toast';
  const onAddItemClick = (id: string) => {
    addItem(id);
    if (toast.isActive(activeToastID)) {
      toast.update(activeToastID, {
        title: '장바구니에 메뉴를 더 담았어요.',
        description: '하단의 장바구니 보기를 눌러 확인해주세요.',
        status: 'success',
        colorScheme: 'whatsapp',
        duration: 2300,
        isClosable: true,
        position: 'top',
        containerStyle: {
          marginTop: '7.5vh',
        },
      });
      return;
    }
    toast.closeAll();
    toast({
      title: '장바구니에 메뉴를 담았어요.',
      description: '하단의 장바구니 보기를 눌러 확인해주세요.',
      status: 'success',
      colorScheme: 'whatsapp',
      duration: 1500,
      isClosable: true,
      id: activeToastID,
      position: 'top',
      containerStyle: {
        marginTop: '7.5vh',
      },
    });
  };

  return isLoading ? (
    <MenuSkeleton />
  ) : (
    <VStack alignItems="center" justifyContent="center" mb="1rem">
      <Stack alignItems="center" gap="2vh" w="100%">
        {Object.entries(menuCategoreis)?.map(([category, menuIds]) => (
          <VStack key={category} bgColor="white" position="relative" w="100%">
            <Flex
              bgColor="white"
              borderBottom="4px lightgray solid"
              h="100%"
              justifyContent="flex-start"
              pl="6%"
              position="sticky"
              py="1vh"
              top="7vh"
              w="100%"
              zIndex={1}
            >
              <Text fontSize="2xl" fontWeight={900}>
                {category}
              </Text>
            </Flex>
            <VStack my="2vh" w="100%">
              {Object.values(menuIds).map((menuId: string) => (
                <Menu key={menuId}>
                  <Menu.ItemArea {...{ id: menuId, ...menuItems[menuId] }} />
                  <Menu.ButtonArea onClick={() => onAddItemClick(menuId)} quantity={getQuantity(menuId)} />
                </Menu>
              ))}
            </VStack>
          </VStack>
        ))}
      </Stack>
      <ResetStateButton />
    </VStack>
  );
};

export { MenuContainer };
