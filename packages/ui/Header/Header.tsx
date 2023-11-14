import { Box, Flex } from '@chakra-ui/react';
import { CTAButton } from '../Button';
import InnerText from '../utils/inner-text';

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
    <Box h={10}>
      <CTAButton className="bg-blue" content="직원 호출" />
    </Box>
    <Box h={10}>
      <CTAButton className="bg-blue" content="계산서 보기" />
    </Box>
  </Flex>
);

export { Header };
