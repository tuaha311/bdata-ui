import { ComponentStory } from '@storybook/react';
import StoryIcons from './Icons';

const Template: ComponentStory<typeof StoryIcons> = args => <StoryIcons {...args} />;

export const Icons = Template.bind({});
Icons.args = {
  color: '#2493FF',
  size: '75px',
  strokeWidth: '1.5px',
  alt: 'Set alt name for Icon',
};
