import { Box, Image as ChakraImage } from '@chakra-ui/react';
// import NextImage from 'next/image';

export const Image = ({ alt, src }: ItemImageT): JSX.Element =>
  src ? (
    <Box aspectRatio={1} boxSizing="border-box" h="100%" position="relative">
      <ChakraImage
        alt={alt}
        bgColor="#F1F1F1"
        borderRadius="14px 8px 10px 14px"
        boxSizing="border-box"
        fit="cover"
        h="100%"
        src={src}
        w="100%"
      />
      {/* <NextImage alt={alt} borderRadius="0 12px 12px 0" fill sizes="(max-height: 600px) 25vw" src={src} /> */}
    </Box>
  ) : null;
