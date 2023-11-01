'use client';

import { Button, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const THeader = () => (
  <VStack w="100%" position="sticky">
    <HStack />
    <HStack />
  </VStack>
);

const RectangleButton = () => (
  <Button bgColor="blue" color="white">
    22테스트버튼22
  </Button>
);

// const RectangleButton = () => (
//   <Button bgColor="var(--main-theme-blue)" p="5px">
//     버튼123213
//   </Button>
// );

export { THeader, RectangleButton };
