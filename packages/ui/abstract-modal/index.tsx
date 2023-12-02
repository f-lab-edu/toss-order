import { Modal as ChakraModal } from '@chakra-ui/modal';
import { ModalContent, ModalOverlay } from '@chakra-ui/react';
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
  <ChakraModal isCentered isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose} scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent borderRadius="3xl" maxW={document.body.clientWidth * 0.92}>
      {children}
    </ModalContent>
  </ChakraModal>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
