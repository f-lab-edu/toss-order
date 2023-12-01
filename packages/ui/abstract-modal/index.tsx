import { Modal } from '@chakra-ui/modal';
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

export const AbstractModal = ({ children, isOpen, onClose }: ModalT) => (
  <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose} scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent borderRadius="3xl" maxW={document.body.clientWidth * 0.92}>
      {children}
    </ModalContent>
  </Modal>
);

AbstractModal.Header = Header;
AbstractModal.Body = Body;
AbstractModal.Footer = Footer;
