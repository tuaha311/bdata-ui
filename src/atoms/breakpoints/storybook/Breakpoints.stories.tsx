import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breakpoints from './Breakpoints';

export default {
  title: 'Atoms/Breakpoints',
  component: Breakpoints,
} as ComponentMeta<typeof Breakpoints>;

const Template: ComponentStory<typeof Breakpoints> = () => <Breakpoints />;

export const breakpoints = Template.bind({});
breakpoints.args = {};
