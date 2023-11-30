import { ModalFooter } from '@chakra-ui/react';

export const Footer = ({ content }: { content: JSX.Element | null }) => {
  const Content = content || null;
  return (
    <ModalFooter flexGrow="20%" minH="5vh" px={0}>
      {Content}
    </ModalFooter>
  );
};
