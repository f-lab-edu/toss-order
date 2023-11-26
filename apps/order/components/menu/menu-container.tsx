import { Stack, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
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

  useEffect(() => {
    // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
    console.log(basketItems);
  }, [basketItems]);
  return (
    <VStack alignItems="center" justifyContent="center" mb="1rem" px="4%">
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
