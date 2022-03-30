import { BlurBox, Container, H1, H6, Intro } from './Blurs.style';
import blur from '../blurs';
import color from '../../colors/colors';

const Blurs = () => {
  const blurArray = [
    {
      color: blur.background.light,
      size: blur.sm,
      name: 'sm',
      colorName: 'light',
      textColor: color.gray[900],
    },
    {
      color: blur.background.dark,
      size: blur.sm,
      name: 'sm',
      colorName: 'dark',
      textColor: color.common.white,
    },
    {
      color: blur.background.light,
      size: blur.md,
      name: 'md',
      colorName: 'light',
      textColor: color.gray[900],
    },
    {
      color: blur.background.dark,
      size: blur.md,
      name: 'md',
      colorName: 'dark',
      textColor: color.common.white,
    },
    {
      color: blur.background.light,
      size: blur.lg,
      name: 'lg',
      colorName: 'light',
      textColor: color.gray[900],
    },
    {
      color: blur.background.dark,
      size: blur.lg,
      name: 'lg',
      colorName: 'dark',
      textColor: color.common.white,
    },
    {
      color: blur.background.light,
      size: blur.xl,
      name: 'xl',
      colorName: 'light',
      textColor: color.gray[900],
    },
    {
      color: blur.background.dark,
      size: blur.xl,
      name: 'xl',
      colorName: 'dark',
      textColor: color.common.white,
    },
  ];

  return (
    <div>
      <H1>Blurs</H1>
      <Intro>
        Background blurs are often used stylistically in modern UI design. However, just like shadows, they allow you to
        add depth and realism to designs by positioning elements on a z-axis.
      </Intro>
      <Container>
        {blurArray.map(({ name, color: blurColor, size, textColor, colorName }) => (
          <BlurBox key={name} size={size} color={blurColor}>
            <H6 textColor={textColor}>
              {name} {colorName}
            </H6>
          </BlurBox>
        ))}
      </Container>
    </div>
  );
};

export default Blurs;
