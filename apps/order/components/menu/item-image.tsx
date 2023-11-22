import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type ItemImageT = {
  alt: string;
  src: string;
};

export const ItemImage = ({ alt, src }: ItemImageT): JSX.Element =>
  src ? (
    <Box aspectRatio={1} h="100%" position="relative">
      <Image alt={alt} src={src} fill />
    </Box>
  ) : null;
