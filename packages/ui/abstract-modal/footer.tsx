import { ModalFooter } from '@chakra-ui/react';

export const Footer = ({ content }: { content: JSX.Element | null }) => (
  <ModalFooter h="fit-content" minH="100px" p={0}>
    {content}
  </ModalFooter>
);
