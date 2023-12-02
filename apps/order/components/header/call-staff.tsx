import { CTAButton } from 'ui/button';
import { Box, Text } from '@chakra-ui/react';

export const CallStaff: () => JSX.Element = () => (
  <Box flexBasis="130px" h="2.5rem">
    <CTAButton
      className="bg-blue"
      content={
        <Text fontSize="calc(min(1rem + 0.5vw, 1.5rem))" fontWeight={800} mx="10px">
          직원 호출
        </Text>
      }
      onClick={() => {}}
    />
  </Box>
);
