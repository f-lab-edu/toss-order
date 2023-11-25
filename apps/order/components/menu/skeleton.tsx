import { Skeleton, VStack } from '@chakra-ui/react';

export const MenuSkeleton = (): JSX.Element => (
  <VStack alignItems="center" justifyContent="center" mb={12} px="2%">
    {[...Array(10).keys()].map((index: number) => (
      <Skeleton key={`skeleton-${index}`} borderRadius="8px" h="24" marginBottom="6px" w="94%" />
    ))}
  </VStack>
);
