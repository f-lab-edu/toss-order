import { Flex } from '@chakra-ui/react';
import { RectangleButton } from '../Button';
import innerText from '../utils/InnerText';

const Header = () => (
  <Flex
    bgColor="white"
    top={0}
    w="100%"
    h={16}
    alignItems="center"
    justifyContent="space-around"
    position="sticky"
    zIndex={1}
  >
    <RectangleButton color="blue" content={innerText('직원 호출')} onClick={() => {}} />
    <RectangleButton color="blue" content={innerText('계산서 보기')} onClick={() => {}} />
  </Flex>
);

export { Header };
