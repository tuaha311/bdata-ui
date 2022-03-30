import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => <Typography />;

export const typography = Template.bind({});
typography.args = {};
