import { ComponentStory, ComponentMeta } from '@storybook/react';
import Shadows from './Shadows';

export default {
  title: 'Atoms/Shadows',
  component: Shadows,
} as ComponentMeta<typeof Shadows>;

const Template: ComponentStory<typeof Shadows> = () => <Shadows />;

export const shadows = Template.bind({});
shadows.args = {};
