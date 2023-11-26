import { Stack, VStack } from '@chakra-ui/react';
import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Menu } from './menu';
import { basketItemsStore, menuIdsStore, menuItemsStore, updateBasketStore } from '../../app/stores';

type UpdateBasketParameterT = {
  amount: 1 | -1;
  id: string;
};

const MenuContainer = () => {
  const menuIds = useRecoilValue(menuIdsStore);

  const menuItems = useRecoilValue(menuItemsStore);

  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);

  const updateBasket: SetterOrUpdater<UpdateBasketParameterT> = useSetRecoilState(updateBasketStore);

  const resetBasket = () => setBasketItems({});

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem" px="4%">
      <Stack alignItems="center" w="100%">
        {menuIds.map((id: string) => (
          <Menu key={id}>
            <Menu.ItemArea {...menuItems[id]} />
            <Menu.ButtonArea
              onClick={() => {
                updateBasket({ amount: 1, id });
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
