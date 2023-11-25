import { Stack, VStack, Text, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
import _ from 'lodash';
import { Menu } from './menu';
import { basketItemsStore } from '../../app/stores/basket-items-store';
import useMenuItems from '../../app/lib/utils/useMenuItems';

const MenuContainer = () => {
  const [menuIds, setMenuIds] = useState([]);

  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);

  const { data } = useMenuItems();

  const refreshBasket = () => {
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
      if (Object.keys(basketItems).length === 0) refreshBasket();
    }
  }, [data]);

  const getQuantity = (id: string) => basketItems[id]?.count;

  const addItemToBasket = (id: string, amount: 1 | -1) => {
    setBasketItems((currentBasket: object) => {
      const newBasket = _.cloneDeep(currentBasket);
      newBasket[id].count += amount;
      newBasket[id].totalPrice += data[id].price.defaultPrice;
      return newBasket;
    });
  };

  useEffect(() => {
    // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
    console.log(basketItems);
  }, [basketItems]);
  // useEffect(() => {
  //   // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
  //   console.log(data);
  // }, [data]);
  const resetBasket = () => {
    // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
    refreshBasket();
  };
  return (
    <VStack alignItems="center" justifyContent="center" mb={12} px="4%">
      <Stack alignItems="center" w="100%">
        <Stack alignItems="center" h="50px" mt={2} w="100%">
          {/* // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED */}
          <CTAButton
            className="bg-orange"
            content={
              <Text fontSize="xl" fontWeight="extrabold">
                장바구니 비우기(FOR DEV ONLY)
              </Text>
            }
            onClick={resetBasket}
          />
        </Stack>
        {menuIds.map(id => (
          <Menu key={id}>
            <Box h="100%" w="75%">
              <Menu.ItemArea {...data[id]} />
            </Box>
            <Box h="100%" w="25%">
              <Menu.ButtonArea
                onClick={() => {
                  addItemToBasket(id, 1);
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
