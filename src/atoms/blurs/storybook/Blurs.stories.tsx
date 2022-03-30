import { ComponentStory, ComponentMeta } from '@storybook/react';
import Blurs from './Blurs';

export default {
  title: 'Atoms/Blurs',
  component: Blurs,
} as ComponentMeta<typeof Blurs>;

const Template: ComponentStory<typeof Blurs> = () => <Blurs />;

export const blurs = Template.bind({});
blurs.args = {};
