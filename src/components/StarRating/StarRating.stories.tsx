import { ComponentStory } from '@storybook/react';
import StarRating from './StarRating';

export default {
  title: 'Components/Rating',
  component: StarRating,
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
  },
};

const Template: ComponentStory<typeof StarRating> = args => <StarRating {...args} />;

export const Rating = Template.bind({});
Rating.args = {
  size: 'medium',
  value: 2,
  defaultValue: 2,
  disabled: false,
  highlightSelectedOnly: false,
};
