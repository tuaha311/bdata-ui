import * as Icon from 'react-feather';
import Icons, { IconProps } from '../Icons';
import { Wrapper, IconWrapper, Intro, H1 } from './Icons.style';

const StoryIcons = (props: IconProps) => (
  <div>
    <H1>Icons</H1>
    <Intro>
      Feather is a collection of simply beautiful open source icons designed by Cole Bemis (@colebemis). Each icon is
      designed on a 24x24 grid with an emphasis on simplicity, consistency and readability. Colors can also be changed
      via symbol overrides. All strokes in these icons have been converted to single vectors so color overrides are
      respected within variants.
    </Intro>
    <Wrapper>
      {Object.keys(Icon).map(IconName => (
        <IconWrapper key={IconName}>
          <h4>{IconName}</h4>
          <Icons {...props} name={IconName as IconProps['name']} />
        </IconWrapper>
      ))}
    </Wrapper>
  </div>
);

export default StoryIcons;
