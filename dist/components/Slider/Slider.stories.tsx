import { ComponentStory, ComponentMeta } from '@storybook/react';
import SliderComp from './Slider';

export default {
  title: 'Molecules/Inputs',
  component: SliderComp,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SliderComp>;

const Template: ComponentStory<typeof SliderComp> = args => <SliderComp {...args} />;

export const Slider = Template.bind({});
Slider.args = {
  min: 10,
  max: 100,
  defaultValue: 30,
  disabled: false,
  marks: true,
};
