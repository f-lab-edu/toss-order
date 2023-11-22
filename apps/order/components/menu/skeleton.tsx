import { Skeleton } from '@chakra-ui/react';

export const MenuSkeleton = (): JSX.Element => (
  <>
    {[...Array(10).keys()].map((index: number) => (
      <Skeleton borderRadius="8px" h="24" key={index} marginBottom="6px" w="94%" />
    ))}
  </>
);
