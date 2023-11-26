import { Stack, VStack, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import _ from 'lodash';
import { Menu } from './menu';
import { basketItemsStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';

const MenuContainer = () => {
  const [menuIds, setMenuIds] = useState([]);

  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);

  const { data } = useMenuItems();

  const resetBasket = () => {
    setBasketItems(() => {
      const newBasket = _.cloneDeep(data);
      Object.keys(newBasket).forEach(key => {
        newBasket[key].count = 0;
        newBasket[key].totalPrice = 0;
      });
      return newBasket;
    });
  };

  useEffect(() => {
    if (data) {
      setMenuIds(
        Object.keys(data).reduce((acc, cur) => {
          acc.push(cur);
          return acc;
        }, []),
      );
      if (Object.keys(basketItems).length === 0) resetBasket();
    }
  }, [data]);

  const getQuantity = (id: string) => basketItems[id]?.count ?? 0;

  const changeQuantity = (id: string, amount: 1 | -1) => {
    setBasketItems((currentBasket: object) => {
      const newBasket = _.cloneDeep(currentBasket);
      newBasket[id].count += amount;
      newBasket[id].totalPrice += data[id].price.defaultPrice * amount;
      return newBasket;
    });
  };

  return (
    <VStack alignItems="center" justifyContent="center" mb={12} px="4%">
      <Stack alignItems="center" w="100%">
        {menuIds.map(id => (
          <Menu key={id}>
            <Box h="100%" w="75%">
              <Menu.ItemArea {...data[id]} />
            </Box>
            <Box h="100%" w="25%">
              <Menu.ButtonArea
                onClick={() => {
                  changeQuantity(id, 1);
                }}
                quantity={getQuantity(id)}
              />
            </Box>
          </Menu>
        ))}
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
