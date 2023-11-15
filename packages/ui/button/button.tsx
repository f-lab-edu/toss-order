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
    boxShadow="xl"
    className={className}
    color="white"
    disabled={disabled}
    h="100%"
    onClick={onClick}
    w="100%"
    _hover={{ bgColor: null }}
  >
    {content}
  </Button>
);
