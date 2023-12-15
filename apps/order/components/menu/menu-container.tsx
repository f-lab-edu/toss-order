import { Stack, VStack, Text, Flex } from '@chakra-ui/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, addItemInBasket, menuCategoriesStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';
import useMenuCategories from '../../app/lib/utils/useMenuCategories';
import { ResetStateButton } from './reset-state-button';
import { MenuSkeleton } from './skeleton';

const MenuContainer = () => {
  const menuItems = useRecoilValue(menuItemsStore);
  const menuCategoreis = useRecoilValue(menuCategoriesStore);
  const basketItems = useRecoilValue(basketItemsStore);
  const addItem = useSetRecoilState(addItemInBasket);
  const [isLoading, setIsLoading] = useState(true);

  const useQueryItemsResult = useMenuItems();
  const useQueryCategoriesResult = useMenuCategories();

  useEffect(() => {
    if (!(useQueryItemsResult?.isLoading || useQueryCategoriesResult?.isLoading)) setIsLoading(false);
  }, [useQueryItemsResult, useQueryCategoriesResult]);

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return isLoading ? (
    <MenuSkeleton />
  ) : (
    <VStack alignItems="center" justifyContent="center" mb="1rem">
      <Stack alignItems="center" gap="2vh" w="100%">
        {Object.entries(menuCategoreis)?.map(([category, menuIds]) => (
          <VStack bgColor="white" id={category} position="relative" w="100%">
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
                  <Menu.ButtonArea onClick={() => addItem(menuId)} quantity={getQuantity(menuId)} />
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
