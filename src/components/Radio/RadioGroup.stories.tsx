import { ComponentStory } from '@storybook/react';
import RadioGroupComp from './RadioGroup';

const list = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export default {
  title: 'Molecules/Inputs/Radio',
  component: RadioGroupComp,
};

const Template: ComponentStory<typeof RadioGroupComp> = args => <RadioGroupComp {...args} />;

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  list,
  row: false,
  name: 'select',
};
