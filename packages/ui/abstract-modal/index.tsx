import { Modal as ChakraModal } from '@chakra-ui/modal';
import { Flex, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';

type ModalT = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: ModalT) => (
  <ChakraModal
    isCentered
    isOpen={isOpen}
    motionPreset="slideInBottom"
    onClose={onClose}
    scrollBehavior="inside"
  >
    <ModalOverlay />
    <Flex px="4%" w="100%">
      <ModalContent borderRadius="3xl" maxW={document.body.clientWidth * 0.92} minH="300px" mx="auto">
        {children}
      </ModalContent>
    </Flex>
  </ChakraModal>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
