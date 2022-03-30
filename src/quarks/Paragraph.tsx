import styled from 'styled-components';
import { basic, BasicProps } from './interpolations/basic';
import { text, TextProps } from './interpolations/text';

const Paragraph = styled.p<BasicProps & TextProps>`
  ${text}
  ${basic}
`;

export default Paragraph;

Paragraph.defaultProps = {
  textStyle: 'lg',
};
