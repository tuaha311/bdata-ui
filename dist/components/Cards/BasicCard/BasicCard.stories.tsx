import { ComponentStory } from '@storybook/react';
import BasicCardComp from './BasicCard';

export default {
  title: 'Components/Cards',
  component: BasicCardComp,
};

const Template: ComponentStory<typeof BasicCardComp> = args => <BasicCardComp {...args} />;

export const BasicCard = Template.bind({});
BasicCard.args = {
  buttonText: 'Apply Now',
  heading: 'Heading',
  subhead: 'Subhead',
};
