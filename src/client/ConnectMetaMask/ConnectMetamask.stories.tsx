import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectMetamaskTemplate } from './ConnectMetamask.template';

const meta: ComponentMeta<typeof ConnectMetamaskTemplate> = {
  title: 'Template/ConnectMetamaskTemplate',
  component: ConnectMetamaskTemplate,
};
export default meta;

const Template: ComponentStory<typeof ConnectMetamaskTemplate> = args => <ConnectMetamaskTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  activateBrowserWallet: "",
  account: "",
  router: "",
  etherBalance: "",
};

export const Connected = Template.bind({});
Connected.args = {
  activateBrowserWallet: "",
  account: "dummy",
  router: "",
  etherBalance: "",
};
