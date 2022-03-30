import styled from 'styled-components';
import { basic, BasicProps } from './interpolations/basic';
import { text, TextProps } from './interpolations/text';

const Text = styled.span<BasicProps & TextProps>`
  ${text}
  ${basic}
`;

export default Text;

Text.defaultProps = {
  textStyle: 'lg',
};
