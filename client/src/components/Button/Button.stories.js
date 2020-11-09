import React from 'react';

import { Button } from './Button';

// eslint-disable-next-line
export default {
  title: 'Fishman/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Fishman Buttons',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Fishman Buttons',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Fishman Buttons',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Fishman Buttons',
};
