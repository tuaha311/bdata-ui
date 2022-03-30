import { ComponentStory } from '@storybook/react';
import GlassdoorCardComp from './GlassdoorCard';

export default {
  title: 'Components/Cards',
  component: GlassdoorCardComp,
};

const Template: ComponentStory<typeof GlassdoorCardComp> = args => <GlassdoorCardComp {...args} />;

export const Glassdoor = Template.bind({});
Glassdoor.args = {
  title: 'What employees are saying.',
  description:
    'Thanks to HubSpotters’ feedback and reviews over the years, we’ve been lucky to be named a great place to work globally.',
  rating: 3.5,
  recommendedText: '98% of employees on Glassdoor recommend BData',
  readReviews: 'Read our reviews',
};
