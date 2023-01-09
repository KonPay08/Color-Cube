import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DirectionButton } from './DirectionButton.template';

const meta: ComponentMeta<typeof DirectionButton> = {
  title: 'Template/DirectionButton',
  component: DirectionButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

const Template: ComponentStory<typeof DirectionButton> = args => <DirectionButton {...args} />;

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
