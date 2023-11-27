import { Stack, VStack } from '@chakra-ui/react';
import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, updateBasketStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';

type UpdateBasketParameterT = {
  id: string;
  quantity: 1 | -1;
};

const MenuContainer = () => {
  const menuItems = useRecoilValue(menuItemsStore);

  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);

  const updateBasket: SetterOrUpdater<UpdateBasketParameterT> = useSetRecoilState(updateBasketStore);

  useMenuItems();

  const resetBasket = () => setBasketItems({});

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem" px="4%">
      <Stack alignItems="center" w="100%">
        {Object.keys(menuItems)?.map((id: string) => (
          <Menu key={id}>
            <Menu.ItemArea {...menuItems[id]} />
            <Menu.ButtonArea
              onClick={() => {
                updateBasket({ id, quantity: 1 });
              }}
              quantity={getQuantity(id)}
            />
          </Menu>
        ))}
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
