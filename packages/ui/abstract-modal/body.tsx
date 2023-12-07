import { ModalBody } from '@chakra-ui/react';

export const Body = ({ content }: { content: JSX.Element }) => (
  <ModalBody maxH="40vh" p={0}>
    {content}
  </ModalBody>
);
