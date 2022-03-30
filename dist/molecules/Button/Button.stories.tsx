import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { colorListArray } from '../../atoms/colors/colors';
import { iconOptionsArray } from '../../atoms/Icons/Icons';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      control: { type: 'radio' },
    },
    borderColor: {
      options: [...colorListArray, undefined],
      control: { type: 'select' },
    },
    textColor: {
      options: [...colorListArray, undefined],
      control: { type: 'select' },
    },
    backgroundColor: {
      options: [...colorListArray, undefined],
      control: { type: 'select' },
    },
    iconSize: {
      control: { type: 'number' },
    },
    iconStrokeWidth: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
      description: 'Text or JSX element',
    },
    endIcon: {
      options: [...iconOptionsArray, undefined],
      control: { type: 'select' },
    },
    startIcon: {
      options: [...iconOptionsArray, undefined],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const button = Template.bind({});
button.parameters = {
  controls: {
    include: [
      'size',
      'children',
      'variant',
      'disabled',
      'fullWidth',
      'endIcon',
      'startIcon',
      'backgroundColor',
      'textColor',
      'borderColor',
      'iconSize',
      'iconStrokeWidth',
    ],
  },
};
button.args = {
  children: 'Button CTA',
  variant: 'contained',
  disabled: false,
  fullWidth: false,
  size: 'medium',
};
