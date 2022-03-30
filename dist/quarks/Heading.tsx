import styled from 'styled-components';
import { basic, BasicProps } from './interpolations/basic';
import { heading, HeadingProps } from './interpolations/heading';

const Heading = styled.h1<BasicProps & HeadingProps>`
  ${heading}
  ${basic}
`;

export default Heading;

Heading.defaultProps = {
  as: 'h2',
};
