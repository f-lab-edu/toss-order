import { CTAButton } from 'ui/button';
import { Box, Text, useToast } from '@chakra-ui/react';

export const CallStaff: () => JSX.Element = () => {
  const toast = useToast();
  const onClick = () =>
    toast({
      title: '직원을 호출했어요!',
      status: 'warning',
      colorScheme: 'green',
      duration: 700,
      isClosable: true,
      containerStyle: {
        marginBottom: '70vh',
      },
    });
  return (
    <Box flexBasis="130px" h="2.5rem" maxW="30%">
      <CTAButton
        className="bg-blue"
        content={
          <Text fontSize="calc(min(1rem + 0.5vw, 1.5rem))" fontWeight={800} mx="10px">
            직원 호출
          </Text>
        }
        onClick={onClick}
      />
    </Box>
  );
};
