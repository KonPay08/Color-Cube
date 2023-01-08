import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ViewTemplate } from './View.template';

const meta: ComponentMeta<typeof ViewTemplate> = {
  title: 'Template/ViewTemplate',
  component: ViewTemplate,
};
export default meta;

const Template: ComponentStory<typeof ViewTemplate> = args => <ViewTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  view: {
    surface1: ["red", "red", "red", "red"],
    surface2: ["green", "green", "green", "green"],
    surface3: ["orange", "orange", "orange", "orange"],
    surface4: ["blue", "blue", "blue", "blue"],
    surface5: ["yellow", "yellow", "yellow", "yellow"],
    surface6: ["white", "white", "white", "white"],
  },
  handleSurface_Vertica_Left_Back: () => {},
  handleSurface_Vertical_Left_Front: () => {},
  handleSurface_Vertica_Right_Back: () => {},
  handleSurface_Vertical_Right_Front: () => {},
  handleSurface_Beside_Top_Left: () => {},
  handleSurface_Beside_Bottom_Left: () => {},
  handleSurface_Beside_Top_Right: () => {},
  handleSurface_Beside_Bottom_Right: () => {},
  handleDestination_right: () => {},
  handleDestination_left: () => {},
  randomSurface: () => {},
  handleResetClick: () => null,
  handleRandomClick: () => null,
  complete: () => null,
};

export const ModalRandom = Template.bind({});
ModalRandom.args = {
  view: {
    surface1: ["red", "red", "red", "red"],
    surface2: ["green", "green", "green", "green"],
    surface3: ["orange", "orange", "orange", "orange"],
    surface4: ["blue", "blue", "blue", "blue"],
    surface5: ["yellow", "yellow", "yellow", "yellow"],
    surface6: ["white", "white", "white", "white"],
  },
  handleSurface_Vertica_Left_Back: () => {},
  handleSurface_Vertical_Left_Front: () => {},
  handleSurface_Vertica_Right_Back: () => {},
  handleSurface_Vertical_Right_Front: () => {},
  handleSurface_Beside_Top_Left: () => {},
  handleSurface_Beside_Bottom_Left: () => {},
  handleSurface_Beside_Top_Right: () => {},
  handleSurface_Beside_Bottom_Right: () => {},
  handleDestination_right: () => {},
  handleDestination_left: () => {},

  modalConfig: {
    onClose: () => {},
    title: "シャッフルします。よろしいですか?",
    message: "※シャッフルすると現在の情報が失われます。",
    approveText: "OK",
    rejectionText: "CANCEL",
    isComplete: false,
  },
  randomSurface: () => {},
  handleResetClick: () => null,
  handleRandomClick: () => null,
  complete: () => null,
};

export const ModalComplete = Template.bind({});
ModalComplete.args = {
  view: {
    surface1: ["red", "red", "red", "red"],
    surface2: ["green", "green", "green", "green"],
    surface3: ["orange", "orange", "orange", "orange"],
    surface4: ["blue", "blue", "blue", "blue"],
    surface5: ["yellow", "yellow", "yellow", "yellow"],
    surface6: ["white", "white", "white", "white"],
  },
  handleSurface_Vertica_Left_Back: () => {},
  handleSurface_Vertical_Left_Front: () => {},
  handleSurface_Vertica_Right_Back: () => {},
  handleSurface_Vertical_Right_Front: () => {},
  handleSurface_Beside_Top_Left: () => {},
  handleSurface_Beside_Bottom_Left: () => {},
  handleSurface_Beside_Top_Right: () => {},
  handleSurface_Beside_Bottom_Right: () => {},
  handleDestination_right: () => {},
  handleDestination_left: () => {},

  modalConfig: {
    onClose: () => {},
    title: "おめでとうございます🎉",
    approveText: "もう一度プレイする",
    isComplete: true,
  },
  randomSurface: () => {},
  handleResetClick: () => null,
  handleRandomClick: () => null,
  complete: () => null,
};