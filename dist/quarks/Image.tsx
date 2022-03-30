import styled from 'styled-components';
import { basic, BasicProps } from './interpolations/basic';

const Image = styled.img<BasicProps>`
  ${basic}
`;

export default Image;
