import { Stack, VStack, Text } from '@chakra-ui/react';
import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
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

  // useEffect(() => {
  //   // FOR DEV ONLY DO_NOT_PUSH_THIS_CODE_OR_YOU_WILL_BE_FIRED
  //   console.log(menuItems);
  // }, [menuItems]);
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
