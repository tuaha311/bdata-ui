import color from '../colors';
import { Flex, H1, H3, H4, H6, Swatch, SwatchColor, Description, Intro } from './ColorSwatches.style';

const ColorSwatches = () => {
  const colorArray = [
    {
      color: 'Gray',
      description:
        'Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.',
      values: Object.entries(color.gray),
    },
    {
      color: 'Primary',
      description:
        'The primary color is your "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.',
      values: Object.entries(color.primary),
    },
    {
      color: 'Swaggy',
      description:
        'Error colors are used across error states and in "destructive" actions. They communicate a destructive/negative action, such as removing a user from your team.',
      values: Object.entries(color.swaggy),
    },
    {
      color: 'Cream Soda',
      description:
        'Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users’ attention.',
      values: Object.entries(color.creamSoda),
    },
    {
      color: 'Kermit',
      description:
        'Success colors communicate a positive action, positive trend, or a successful confirmation. If you’re using green as your primary color, it can be helpful to introduce a different hue for your success green.',
      values: Object.entries(color.kermit),
    },
    {
      color: 'Bleu',
      values: Object.entries(color.bleu),
    },
    {
      color: 'Snorlax',
      values: Object.entries(color.snorlax),
    },
    {
      color: 'Blue',
      values: Object.entries(color.blue),
    },
    {
      color: 'Indigo',
      values: Object.entries(color.indigo),
    },
    {
      color: 'Purple',
      values: Object.entries(color.purple),
    },
    {
      color: 'Pink',
      values: Object.entries(color.pink),
    },
    {
      color: 'Rose',
      values: Object.entries(color.rose),
    },
    {
      color: 'Orange',
      values: Object.entries(color.orange),
    },
  ];

  return (
    <div>
      <H1>Colors</H1>
      <Intro>
        Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or
        project. When it comes to color, contrast is critical for ensuring text is legible. We&apos;ve added WCAG 2.1
        contrast ratios to our color system so you can make sure you&apos;re designing with accessibility in mind.
      </Intro>
      {colorArray.map(swatch => (
        <div key={swatch.color}>
          <H3>{swatch.color}</H3>
          <Description>{swatch.description}</Description>
          <Flex>
            {swatch.values.map(colorValue => (
              <Swatch key={colorValue[0]}>
                <SwatchColor backgroundColor={colorValue[1]} />
                <H4>{colorValue[0]}</H4>
                <H6>{colorValue[1]}</H6>
              </Swatch>
            ))}
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default ColorSwatches;
