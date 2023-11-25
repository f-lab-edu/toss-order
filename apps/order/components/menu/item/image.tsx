import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';

type ItemImageT = {
  alt: string;
  src: string;
};

export const Image = ({ alt, src }: ItemImageT): JSX.Element =>
  src ? (
    <Box aspectRatio={1} h="100%" position="relative">
      <NextImage alt={alt} fill src={src} />
    </Box>
  ) : null;
