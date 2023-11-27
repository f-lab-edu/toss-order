import { Stack, VStack, Text } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CTAButton } from 'ui/button';
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
        {Object.entries(menuItems)?.map(([id, data]: [string, ItemT]) => (
          <Menu key={id}>
            <Menu.ItemArea {...data} />
            <Menu.ButtonArea
              onClick={() => {
                addItem(id);
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
