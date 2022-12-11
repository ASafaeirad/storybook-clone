import { Button } from '@mantine/core';
import type { ComponentMeta, Story } from '@storybook/react';

import { DashboardHeader, HeaderProps } from './DashboardHeader';

export default {
  component: DashboardHeader,
  args: {
    button: <Button>Create a Family</Button>,
    router: {
      path: '/',
      meta: {
        breadcrumb: 'Title',
      },
    },
  },
} as ComponentMeta<typeof DashboardHeader>;

const Template: Story<HeaderProps> = args => <DashboardHeader {...args} />;

export const Default: Story<HeaderProps> = Template.bind({});
