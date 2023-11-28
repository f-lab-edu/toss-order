import React from 'react';
import { Button } from '@chakra-ui/react';

interface CTAButtonProps {
  className: string;
  content: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}

export const CTAButton = ({ className, content, disabled = false, onClick }: CTAButtonProps): JSX.Element => (
  <Button
    _hover={{ bgColor: null }}
    boxShadow="xl"
    className={className}
    color="white"
    h="100%"
    isDisabled={disabled}
    onClick={onClick}
    p={0}
    w="100%"
  >
    {content}
  </Button>
);
