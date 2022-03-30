import { font } from '../typography';
import { Flex, FontTile, H1, Intro } from './Typography.style';

const Typography = () => {
  const fontArray = [
    {
      name: 'Display xxl',
      font: font.display.xxl.font(),
    },
    {
      name: 'Display xl',
      font: font.display.xl.font(),
    },
    {
      name: 'Display lg',
      font: font.display.lg.font(),
    },
    {
      name: 'Display md',
      font: font.display.md.font(),
    },
    {
      name: 'Display sm',
      font: font.display.sm.font(),
    },
    {
      name: 'Display xs',
      font: font.display.xs.font(),
    },
    {
      name: 'Text xl',
      font: font.text.xl.font(),
    },
    {
      name: 'Text lg',
      font: font.text.lg.font(),
    },
    {
      name: 'Text md',
      font: font.text.md.font(),
    },
    {
      name: 'Text sm',
      font: font.text.sm.font(),
    },
    {
      name: 'Text xs',
      font: font.text.xs.font(),
    },
  ];

  const weightArray = [
    {
      name: 'Regular',
      weight: 400,
    },
    {
      name: 'Semibold',
      weight: 600,
    },
    {
      name: 'Bold',
      weight: 700,
    },
    {
      name: 'Extrabold',
      weight: 800,
    },
    {
      name: 'Black',
      weight: 900,
    },
  ];

  return (
    <div>
      <H1>Typography</H1>
      <Intro>
        Our design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale
        across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as
        accessible as possible for everyone.
      </Intro>
      {fontArray.map(fontItem => (
        <Flex key={fontItem.name} className="flex-cont">
          {weightArray.map(weight => (
            <FontTile key={weight.name} font={fontItem.font} weight={weight.weight}>
              <div>{fontItem.name}</div>
              <div>{weight.name}</div>
            </FontTile>
          ))}
        </Flex>
      ))}
    </div>
  );
};

export default Typography;
