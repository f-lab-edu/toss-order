import { Box, Flex } from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

const Header = () => (
  <Flex
    alignItems="center"
    bgColor="white"
    h="50px"
    justifyContent="space-around"
    position="sticky"
    top={0}
    w="100%"
    zIndex={1}
  >
    <Box h={10}>
      <CTAButton className="bg-blue" content={<>직원 호출</>} />
    </Box>
    <Box h={10}>
      <CTAButton className="bg-blue" content={<>계산서 보기</>} />
    </Box>
  </Flex>
);

export { Header };
