'use client';

import { Button, HStack, Stack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
// import MenuContainer from './MenuContainer';
import { useQuery } from 'react-query';
import { CTAButton } from 'ui/button';
import { Menu } from 'ui/menu';
import { menuItemsAtom } from '../app/atoms';
import { BasketActions } from '../app/utils';
import { get } from '../app/api';

const Root = () => {
  // const { clearBasket, getMenuCount } = BasketActions();
  // const menuItems = useRecoilValue(menuItemsAtom);
  const { data: menuItems, isLoading } = useQuery(['menu-list', '/api/menu-list'], get);
  console.log(menuItems);

  // const [menuSequence, setMenuSequence] = useRecoilState(menuSequenceAtom);
  // fetchData('menu-list').then(res => setMenuList(res));
  // fetchData('menu-sequence').then(res => setMenuSequence(res['order-by'].asc));
  // const tempImageURL =
  //   'https://dcenter-img.cafe24.com/d/product/2023/02/17/beadaf32c7b0fc619bf298df051ae441.jpg';

  // useEffect(() => {
  //   console.log(menuList);
  // }, [menuList]);
  // console.log(menuList);
  // console.log(menuSequence);

  // const app = getApp();
  // const fstemp = getFirestore(app);

  // console.log('........................');
  // console.log(fstemp);
  // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^');
  // fetchData(fstemp, 'menu-list').then(res => setMenuList(res));
  // fetchData(fstemp, 'menu-sequence').then(res => setMenuSequence(res['order-by'].asc));
  return (
    <Stack alignItems="center">
      {/* <h1> */}
      {/*  Data from API: {JSON.stringify(menuItems)} */}
      {/*  /!* {data?.map((item: any) => <div key={item.id}>{item.name}</div>)} *!/ */}
      {/* </h1> */}
      <Stack alignItems="center" w="94%" h="50px">
        <CTAButton onClick={() => {}} content="장바구니 비우기(Temp)" className="bg-orange" />
        {/* <CTAButton onClick={clearBasket} content="장바구니 비우기(Temp)" color="orange" /> */}
      </Stack>
      {isLoading
        ? null
        : Object.keys(menuItems).map(name => (
            <Menu key={name}>
              <Menu.MenuArea onMenuAreaClick={() => {}}>
                <Menu.TextArea>
                  <Menu.Name>{name}</Menu.Name>
                  <Menu.Price>{menuItems[name].price}</Menu.Price>
                </Menu.TextArea>
                <Menu.Image src={menuItems[name].image} alt="메뉴 이름" />
              </Menu.MenuArea>
              <Menu.ButtonArea>
                <Menu.AddToBasketButton onClick={() => {}} content="담기" />
              </Menu.ButtonArea>
            </Menu>
          ))}
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
