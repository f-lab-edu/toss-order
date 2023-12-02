import { ModalFooter } from '@chakra-ui/react';

export const Footer = ({ content }: { content: JSX.Element | null }) => (
  <ModalFooter flexBasis="10vh" minH="80px" p={0}>
    {content}
  </ModalFooter>
);
