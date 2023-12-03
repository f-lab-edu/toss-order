import { Button, Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { addItemInBasket, removeItemFromBasket } from '../../../app/stores';

export const AddButton = ({ id }: { id: string }) => {
  const addItem = useSetRecoilState(addItemInBasket);
  return (
    <Button
      _hover={{ bgColor: null }}
      alignItems="flex-end"
      aspectRatio={1}
      bgColor="black"
      borderRadius="full"
      color="white"
      onClick={() => addItem(id)}
      p={0}
      size="sm"
    >
      <Text fontSize="3xl" fontWeight={900}>
        +
      </Text>
    </Button>
  );
};

export const RemoveButton = ({ id }: { id: string }) => {
  const removeItem = useSetRecoilState(removeItemFromBasket);
  return (
    <Button
      _hover={{ bgColor: null }}
      alignItems="flex-end"
      aspectRatio={1}
      bgColor="black"
      borderRadius="full"
      color="white"
      onClick={() => removeItem(id)}
      p={0}
      size="sm"
    >
      <Text fontSize="3xl" fontWeight={900}>
        -
      </Text>
    </Button>
  );
};
