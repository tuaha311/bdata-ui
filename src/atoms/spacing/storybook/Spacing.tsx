import { Flex, H1, Intro, SpacingBox } from './Spacing.style';
import { padding as spacing } from '../spacing';
import Container from '../../../quarks/Container';

const Spacing = () => {
  const spacingArray = Object.entries(spacing);
  return (
    <div>
      <H1>Spacing</H1>
      <Intro>
        Just like your color scale, working from a defined spacing system allows you to work faster and more
        consistently. Consistent, and scalable spacing helps you eliminate guesswork whilst designing and developing
        because you’re designing with a limited set of options.
      </Intro>
      <Flex>
        <Container>
          {spacingArray.map(box => (
            <SpacingBox key={box[0]} width={box[1]}>
              {box[0]}px
            </SpacingBox>
          ))}
        </Container>
        <Container>
          {spacingArray.map(box => (
            <SpacingBox key={box[0]} width={box[1]}>
              {box[1]}
            </SpacingBox>
          ))}
        </Container>
      </Flex>
    </div>
  );
};

export default Spacing;
