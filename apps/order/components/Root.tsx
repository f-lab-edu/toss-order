'use client';

import { Button, HStack, Stack } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SquareButton, THeader, WideButton } from './index';
import MenuContainer from './MenuContainer';
import TFooter from './TFooter';
import Menu from './Menu';
import { BasketActions } from '../app/utils';
import { menuListAtom, menuSequenceAtom } from '../app/atoms';
import { fetchData } from '../app/api';

const Root = () => {
  const { clearBasket, getMenuCount } = BasketActions();
  const [menuList, setMenuList] = useRecoilState(menuListAtom);
  const [menuSequence, setMenuSequence] = useRecoilState(menuSequenceAtom);
  const tempImageURL =
    'https://dcenter-img.cafe24.com/d/product/2023/02/17/beadaf32c7b0fc619bf298df051ae441.jpg';
  fetchData('menu-list').then(res => setMenuList(res));
  fetchData('menu-sequence').then(res => setMenuSequence(res['order-by'].asc));

  return (
    <div className="root">
      <THeader />
      <Stack alignItems="center">
        <Button w="92%" onClick={clearBasket}>
          장바구니 비우기(Temp)
        </Button>
      </Stack>
      <MenuContainer>
        {menuSequence &&
          menuSequence.map((menuName: string) => (
            <Menu
              key={menuName}
              name={menuName}
              price={menuList[menuName].price}
              onBasketCount={getMenuCount(menuName)}
              imageUrl={tempImageURL}
              // imageUrl={menuList[menuName].image}
            />
          ))}
        {/* {tempMenu && */}
        {/*   Object.values(tempMenu).map(menuItem => ( */}
        {/*     <Menu */}
        {/*       key={menuItem.name} */}
        {/*       name={menuItem.name} */}
        {/*       price={menuItem.price} */}
        {/*       onBasketCount={getMenuCount(menuItem.name)} */}
        {/*       imageUrl={menuItem.imageUrl} */}
        {/*     /> */}
        {/*   ))} */}
      </MenuContainer>
      <TFooter />
    </div>
  );
};

export default Root;
