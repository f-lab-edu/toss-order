import { Button, Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { menuDetailModalStore } from '../../../../app/stores/modal-state-store';

export const AddButton = () => {
  const setState = useSetRecoilState(menuDetailModalStore);
  const addQuantity = () => {
    setState(prev => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  return (
    <Button
      _hover={{ bgColor: null }}
      alignItems="flex-end"
      aspectRatio={1}
      bgColor="black"
      borderRadius="full"
      color="white"
      onClick={addQuantity}
      p={0}
      size="sm"
    >
      <Text fontSize="3xl" fontWeight={900}>
        +
      </Text>
    </Button>
  );
};

export const SubtractButton = () => {
  const setState = useSetRecoilState(menuDetailModalStore);
  const subtractQuantity = () => {
    setState(prev => {
      let next = prev.quantity;
      if (next > 1) next -= 1;
      return { ...prev, quantity: next };
    });
  };
  return (
    <Button
      _hover={{ bgColor: null }}
      alignItems="flex-end"
      aspectRatio={1}
      bgColor="black"
      borderRadius="full"
      color="white"
      onClick={subtractQuantity}
      p={0}
      size="sm"
    >
      <Text fontSize="3xl" fontWeight={900}>
        -
      </Text>
    </Button>
  );
};
