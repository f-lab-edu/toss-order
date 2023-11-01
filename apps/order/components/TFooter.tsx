import { Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { WideButton } from './index';
import { basketAtom } from '../app/atoms';
import { innerText } from '../app/utils';

const TFooter = () => {
  const basket = useRecoilValue(basketAtom);
  return Object.keys(basket).length ? (
    <Flex
      bgColor="white"
      bottom={0}
      w="100%"
      h={16}
      alignItems="center"
      justifyContent="space-around"
      position="sticky"
      zIndex={1}
    >
      <WideButton
        color="blue"
        content={innerText(
          `${Object.values(basket).reduce((a: number, b: number) => a + b, 0)} 장바구니 보기 0원`,
        )}
        onClick={() => {}}
      />
    </Flex>
  ) : null;
};

export default TFooter;
