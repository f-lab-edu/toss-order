import { CTAButton } from 'ui/button';
import { Box, Text, useToast } from '@chakra-ui/react';

export const CallStaff: () => JSX.Element = () => {
  const toast = useToast();
  const onClick = () =>
    toast({
      title: '아직 개발중이에요.',
      status: 'error',
      duration: 500,
      isClosable: true,
      containerStyle: {
        marginBottom: '50vh',
      },
    });
  return (
    <Box flexBasis="130px" h="2.5rem">
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
