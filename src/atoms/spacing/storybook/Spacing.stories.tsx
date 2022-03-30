import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spacing from './Spacing';

export default {
  title: 'Atoms/Spacing',
  component: Spacing,
} as ComponentMeta<typeof Spacing>;

const Template: ComponentStory<typeof Spacing> = () => <Spacing />;

export const spacing = Template.bind({});
spacing.args = {};
