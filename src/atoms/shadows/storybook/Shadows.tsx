import { Flex, H1, Intro, ShadowBox } from './Shadows.style';
import shadow from '../shadows';

const Shadows = () => {
  const shadowArray = [
    {
      name: 'xs',
      shadow: shadow.xs,
    },
    {
      name: 'sm',
      shadow: shadow.sm,
    },
    {
      name: 'md',
      shadow: shadow.md,
    },
    {
      name: 'lg',
      shadow: shadow.lg,
    },
    {
      name: 'xl',
      shadow: shadow.xl,
    },
    {
      name: 'xxl',
      shadow: shadow.xxl,
    },
    {
      name: 'xxxl',
      shadow: shadow.xxxl,
    },
  ];

  return (
    <div>
      <H1>Shadows</H1>
      <Intro>Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.</Intro>
      <Flex>
        {shadowArray.map(box => (
          <div key={box.name}>
            <h4>{box.name}</h4>
            <ShadowBox shadow={box.shadow} />
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default Shadows;
