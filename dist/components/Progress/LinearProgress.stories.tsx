import { ComponentStory } from '@storybook/react';
import Progress from './LinearProgress';

export default {
  title: 'Molecules/Progress',
  component: Progress,
};

const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />;

export const LinearProgress = Template.bind({});
LinearProgress.args = {
  value: 30,
  labelPosition: 'right',
};
