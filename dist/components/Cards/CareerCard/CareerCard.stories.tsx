import { ComponentStory } from '@storybook/react';
import CareerCardComp from './CareerCard';

export default {
  title: 'Components/Cards',
  component: CareerCardComp,
};

const Template: ComponentStory<typeof CareerCardComp> = args => <CareerCardComp {...args} />;

export const Career = Template.bind({});
Career.args = {
  title: 'Account Executive - Mid-Market',
  heading: 'Sales',
  details: 'San Diego, CA',
};
