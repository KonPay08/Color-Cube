import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button.template';

const meta: ComponentMeta<typeof Button> = {
  title: 'Template/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;


export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
