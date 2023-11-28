import { Box, Image as ChakraImage } from '@chakra-ui/react';
import NextImage from 'next/image';

type ItemImageT = {
  alt: string;
  src: string;
};

export const Image = ({ alt, src }: ItemImageT): JSX.Element =>
  src ? (
    <Box aspectRatio={1} h="100%" position="relative">
      <ChakraImage alt={alt} fit="cover" h="100%" src={src} w="100%" />
      {/* <NextImage alt={alt} fill sizes="(max-height: 600px) 25vw" src={src} /> */}
    </Box>
  ) : null;
