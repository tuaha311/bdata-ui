import { ComponentStory, Meta } from '@storybook/react';
import Button from '../Button/Button';
import TooltipComp from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: TooltipComp,
  argTypes: {
    arrowPosition: {
      options: [
        'top-start',
        'top',
        'top-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: ComponentStory<typeof TooltipComp> = args => (
  <TooltipComp {...args}>
    <Button label="Hover me" size="small" />
  </TooltipComp>
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  arrowPosition: 'top-start',
  title: 'Hover',
  arrow: true,
};
