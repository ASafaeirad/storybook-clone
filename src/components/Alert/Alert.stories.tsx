import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from './Alert';

export default {
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  message: 'خطای ناشناخته',
  type: 'error',
};
