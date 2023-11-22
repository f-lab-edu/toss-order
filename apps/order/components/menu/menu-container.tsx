import { Stack, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import _ from 'lodash';
import { Menu } from './menu';
import { basketItemsAtom } from '../../app/atoms';
import useMenuItems from '../../app/lib/utils/useMenuItems';
import { MenuSkeleton } from './skeleton';

const MenuContainer = () => {
  const [basketItems, setBasketItems] = useRecoilState(basketItemsAtom);

  const { data: menuItems, isLoading: isMenuItemsLoading } = useMenuItems();

  const [menuNames, setMenuNames] = useState([]);

  useEffect(() => {
    if (menuItems) {
      setMenuNames(
        Object.keys(menuItems).reduce((acc, cur) => {
          acc.push(cur);
          return acc;
        }, []),
      );
    }
  }, [menuItems]);

  const getQuantity = (name: string) => basketItems[name] || 0;

  const addItemToBasket = (name: string) =>
    setBasketItems((currentBasket: object) => {
      const newBasket = _.cloneDeep(currentBasket);
      if (newBasket[name]) {
        newBasket[name] += 1;
      } else {
        newBasket[name] = 1;
      }
      return newBasket;
    });

  return (
    <VStack alignItems="center" justifyContent="center" mb={12} px="2%">
      <Stack alignItems="center" w="100%">
        {isMenuItemsLoading ? (
          <MenuSkeleton />
        ) : (
          menuNames?.map(name => (
            <Menu key={name}>
              <Menu.DisplayArea props={{ name, ...menuItems[name] }} />
              <Menu.ButtonArea
                onClick={() => {
                  addItemToBasket(name);
                }}
                quantity={getQuantity(name)}
              />
            </Menu>
          ))
        )}
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
