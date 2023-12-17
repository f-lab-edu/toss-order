import { CTAButton } from 'ui/button';
import { Box, Text, useToast } from '@chakra-ui/react';
import { useRef } from 'react';

export const CallStaff: () => JSX.Element = () => {
  const toast = useToast();
  const toastIdRef = useRef();
  const onClick = () => {
    if (toast.isActive(toastIdRef.current)) {
      toast.update(toastIdRef.current, {
        colorScheme: 'red',
        containerStyle: {
          marginTop: '7.5vh',
        },
        duration: 1200,
        isClosable: true,
        position: 'top',
        status: 'warning',
        title: '잠시만 기다려주세요!',
      });
    } else {
      toast.closeAll();
      toastIdRef.current = toast({
        colorScheme: 'whatsapp',
        containerStyle: {
          marginTop: '7.5vh',
        },
        duration: 1000,
        isClosable: true,
        position: 'top',
        status: 'warning',
        title: '직원을 호출했어요!',
      });
    }
  };
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
