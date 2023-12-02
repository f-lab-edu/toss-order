import { ModalFooter } from '@chakra-ui/react';

export const Footer = ({ content }: { content: JSX.Element | null }) => (
  <ModalFooter flexBasis="10vh" px={0} py={0}>
    {content}
  </ModalFooter>
);
