import { CTAButton } from 'ui/button';
import { Box } from '@chakra-ui/react';

export const CallStaff: () => JSX.Element = () => (
  <Box h={10}>
    <CTAButton className="bg-blue" content={<>직원 호출</>} />
  </Box>
);
