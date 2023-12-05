import { Button, IconButton, Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { CloseIcon } from '@chakra-ui/icons';
import { addItemInBasket, deleteItemFromBasket, removeItemFromBasket } from '../../../app/stores';

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

export const SubtractButton = ({ id }: { id: string }) => {
  const subtractItem = useSetRecoilState(removeItemFromBasket);
  return (
    <Button
      _hover={{ bgColor: null }}
      alignItems="flex-end"
      aspectRatio={1}
      bgColor="black"
      borderRadius="full"
      color="white"
      onClick={() => subtractItem(id)}
      p={0}
      size="sm"
    >
      <Text fontSize="3xl" fontWeight={900}>
        -
      </Text>
    </Button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteItem = useSetRecoilState(deleteItemFromBasket);
  return (
    <IconButton aria-label={`delete ${id}`} icon={<CloseIcon />} onClick={() => deleteItem(id)} size="sm" />
    // <Button
    //   _hover={{ bgColor: null }}
    //   alignItems="flex-end"
    //   aspectRatio={1}
    //   bgColor="black"
    //   borderRadius="full"
    //   color="white"
    //   onClick={() => deleteItem(id)}
    //   p={0}
    //   size="sm"
    // >
    //   <Text fontSize="3xl" fontWeight={900}>
    //     X
    //   </Text>
    // </Button>
  );
};
