import { Stack, VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
import _ from 'lodash';
import { Menu } from './menu';
import { basketItemsStore } from '../../app/stores';
import useMenuItems from '../../app/lib/utils/useMenuItems';

const MenuContainer = () => {
  const [menuIds, setMenuIds] = useState([]);

  const [basketItems, setBasketItems] = useRecoilState(basketItemsStore);

  const { data } = useMenuItems();

  const refreshBasket = () => {
    setBasketItems((currentBasket: object) => {
      const newBasket = _.cloneDeep(currentBasket);
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
      if (!basketItems) refreshBasket();
    }
  }, [data]);

  const getQuantity = (id: string) => basketItems[id].count;

  const addItemToBasket = (id: string) => {
    setBasketItems((currentBasket: object) => {
      const newBasket = _.cloneDeep(currentBasket);
      newBasket[id].count += 1;
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
    <VStack alignItems="center" justifyContent="center" mb={12} px="2%">
      <Stack alignItems="center" w="100%">
        <Stack alignItems="center" h="50px" mt={2} w="94%">
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
            <Menu.ItemArea {...data[id]} />
            <Menu.ButtonArea
              onClick={() => {
                addItemToBasket(id);
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
