import { Flex, HStack, ModalHeader, Text } from '@chakra-ui/react';
import { CTAButton } from '../button';

type HeaderT = {
  onClose: () => void;
  title: string;
};

export const Header = ({ onClose, title }: HeaderT) => (
  <ModalHeader borderBottom="1px solid lightgray" flex="none" h="8vh" py={0}>
    <HStack h="100%" justifyContent="space-between" py={0} w="100%">
      <Text fontSize="2xl" fontWeight={900}>
        {title}
      </Text>
      <Flex flexBasis="25%" h="50%">
        <CTAButton
          className="bg-pink"
          content={
            <Text fontSize="xl" fontWeight={800}>
              닫기
            </Text>
          }
          onClick={onClose}
        />
      </Flex>
    </HStack>
  </ModalHeader>
);
