import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { CTAButton } from 'ui/button';

export const Basket = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            장바구니
          </Text>
          <Box flex={0.3}>
            <CTAButton className="bg-pink" content={<Text fontSize="xl">닫기</Text>} onClick={onClose} />
          </Box>
        </HStack>
      </ModalHeader>
      <ModalBody>
        <h1>아직 구현중이에요</h1>
      </ModalBody>

      <ModalFooter>
        <Box height="5vh" />
      </ModalFooter>
    </ModalContent>
  </Modal>
);
