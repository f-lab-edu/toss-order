import { Stack, VStack } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Menu } from './menu';
import { basketItemsStore, menuItemsStore, addItemInBasket } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';

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

  const resetBasket = () => setBasketItems({});

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem" px="4%">
      <Stack alignItems="center" w="100%">
        {Object.entries(menuItems)?.map(([id, data]: [string, ItemT]) => (
          <Menu key={id}>
            <Menu.ItemArea {...data} />
            <Menu.ButtonArea onClick={() => addItem(id)} quantity={getQuantity(id)} />
          </Menu>
        ))}
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
