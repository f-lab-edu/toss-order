import { Meta } from '@storybook/react';
import { Scenario as CallStaff } from './call-staff.scenario';
import { Scenario as OpenBill } from './open-bill.scenario';

export default {
  title: 'Components / Forms / Button',
};
export const CallStaffStory = () => <CallStaff />;
export const OpenBillStory = () => <OpenBill />;
