import styled from 'styled-components';
import { basic, BasicProps } from './interpolations/basic';

const Link = styled.a<BasicProps>`
  cursor: pointer;
  ${basic}
`;

export default Link;
