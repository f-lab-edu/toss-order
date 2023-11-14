import React from 'react';
import { Button } from '@chakra-ui/react';

interface CTAButtonProps {
  className: string;
  content: string | number | JSX.Element;
  onClick?: () => void;
}

export const CTAButton = ({ className, content, onClick }: CTAButtonProps): JSX.Element => (
  <Button
    className={className}
    boxShadow="xl"
    color="white"
    onClick={onClick}
    w="100%"
    h="100%"
    _hover={{ bgColor: null }}
  >
    {content}
  </Button>
);
