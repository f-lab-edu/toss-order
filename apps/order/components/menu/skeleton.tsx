import { Skeleton } from '@chakra-ui/react';

export const MenuSkeleton = (): JSX.Element => (
  <>
    {[...Array(10).keys()].map((index: number) => (
      <Skeleton key={`skeleton-${index}`} borderRadius="8px" h="24" marginBottom="6px" w="94%" />
    ))}
  </>
);
