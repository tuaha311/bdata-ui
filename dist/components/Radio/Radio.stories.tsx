import { ComponentStory } from '@storybook/react';
import RadioComp from './Radio';

export default {
  title: 'Molecules/Inputs/Radio',
  component: RadioComp,
};

const Template: ComponentStory<typeof RadioComp> = args => <RadioComp {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  label: 'Male',
  isDisabled: false,
};
