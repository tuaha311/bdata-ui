import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectComp from './Select';

const list = ['one', 'two', 'three'];

export default {
  title: 'BData/Select',
  component: SelectComp,
  argTypes: {
    defaultValue: {
      options: list,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SelectComp>;

const Template: ComponentStory<typeof SelectComp> = args => <SelectComp {...args} />;

export const Select = Template.bind({});
Select.args = {
  list,
  label: 'Select',
  // defaultValue: 'three'
};
