import { ComponentStory, ComponentMeta } from '@storybook/react';
import Colors from './ColorSwatches';

export default {
  title: 'Atoms/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = () => <Colors />;

export const colors = Template.bind({});
colors.args = {};
