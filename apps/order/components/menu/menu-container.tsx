import { Stack, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Menu } from './menu';
import { basketAtom } from '../../app/atoms';

const MenuContainer = () => {
  const [basket, setBasket] = useRecoilState(basketAtom);
  const [menuNames, setMenuNames] = useState([]);
  const { data: menuItems, isLoading: isMenuItemsLoading } = useQuery('menu-list', () =>
    axios.get('/api/menu-list').then(({ data }) => data),
  );
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
  const getQuantity = (name: string) => basket[name] || 0;
  const addToBasket = (name: string) =>
    setBasket((currentBasket: object) => {
      const newBasket = { ...currentBasket };
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
        {isMenuItemsLoading
          ? null
          : menuNames &&
            menuNames.map(name => (
              <Menu key={name} name={name}>
                <Menu.DisplayArea props={menuItems[name]} />
                <Menu.ButtonArea addToBasket={() => {addToBasket(name)}} quantity={getQuantity(name)} />
              </Menu>
            ))}
      </Stack>
    </VStack>
  );
};

export { MenuContainer };
