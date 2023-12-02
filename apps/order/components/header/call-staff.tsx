import { CTAButton } from 'ui/button';
import { Box, Text } from '@chakra-ui/react';

export const CallStaff: () => JSX.Element = () => (
  <Box h="2.5rem" w="24%">
    <CTAButton
      className="bg-blue"
      content={
        <Text fontSize="xl" fontWeight={800}>
          직원 호출
        </Text>
      }
      onClick={() => {}}
    />
  </Box>
);
