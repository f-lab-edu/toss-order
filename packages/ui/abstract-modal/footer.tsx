import { ModalFooter } from '@chakra-ui/react';

export const Footer = ({ content }: { content: JSX.Element | null }) => (
  <ModalFooter flexGrow="20%" minH="5vh" px={0}>
    {content}
  </ModalFooter>
);
