'use client';

import { Button, HStack, Stack } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SquareButton, WideButton } from 'ui/Button';
import { Header } from 'ui/Header';
import Menu from 'ui/Menu/Menu';
import MenuContainer from './MenuContainer';
import { BasketActions } from '../app/utils';
import { menuListAtom, menuSequenceAtom } from '../app/atoms';
import fetchData from '../app/api';

const Root = () => {
  const { clearBasket, getMenuCount } = BasketActions();
  const [menuList, setMenuList] = useRecoilState(menuListAtom);
  const [menuSequence, setMenuSequence] = useRecoilState(menuSequenceAtom);
  const tempImageURL =
    'https://dcenter-img.cafe24.com/d/product/2023/02/17/beadaf32c7b0fc619bf298df051ae441.jpg';
  fetchData('menu-list').then(res => setMenuList(res));
  fetchData('menu-sequence').then(res => setMenuSequence(res['order-by'].asc));

  return (
    <Stack alignItems="center">
      <Header />
      <Stack alignItems="center" w="100%">
        <WideButton onClick={clearBasket} content="장바구니 비우기(Temp)" color="orange" />
      </Stack>
      <Menu>
        <Menu.MenuArea onMenuAreaClick={null}>
          <Menu.TextArea>
            <Menu.Name>메뉴이름</Menu.Name>
            <Menu.Price>{16000}</Menu.Price>
          </Menu.TextArea>
          <Menu.Image src={tempImageURL} alt="메뉴 이름" />
        </Menu.MenuArea>
        <Menu.ButtonArea>
          <Menu.AddToBasketButton onClick={null} content="" />
        </Menu.ButtonArea>
      </Menu>
    </Stack>
  );
};

export default Root;

// {/* <MenuContainer> */}
// {/*  {menuSequence && */}
// {/*    menuSequence.map((menuName: string) => ( */}
// {/*      <Menu */}
// {/*        key={menuName} */}
// {/*        name={menuName} */}
// {/*        price={menuList[menuName].price} */}
// {/*        onBasketCount={getMenuCount(menuName)} */}
// {/*        imageUrl={tempImageURL} */}
// {/*        // imageUrl={menuList[menuName].image} */}
// {/*      /> */}
// {/*    ))} */}
// {/*  /!* {tempMenu && *!/ */}
// {/*  /!*   Object.values(tempMenu).map(menuItem => ( *!/ */}
// {/*  /!*     <Menu *!/ */}
// {/*  /!*       key={menuItem.name} *!/ */}
// {/*  /!*       name={menuItem.name} *!/ */}
// {/*  /!*       price={menuItem.price} *!/ */}
// {/*  /!*       onBasketCount={getMenuCount(menuItem.name)} *!/ */}
// {/*  /!*       imageUrl={menuItem.imageUrl} *!/ */}
// {/*  /!*     /> *!/ */}
// {/*  /!*   ))} *!/ */}
// {/* </MenuContainer> */}
