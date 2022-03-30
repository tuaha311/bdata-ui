import { css } from 'styled-components';
import { font } from '../../atoms/typography/typography';
import { parseProps, handleResponsiveness, handlePseudoClasses, GetAllPropTypes } from './utilities';

type TextStyles = keyof typeof font.text;

const textCSS = {
  textStyle: (value: TextStyles) => css`
    font: ${font.text[value].font()};
  `,
};

export type TextProps = GetAllPropTypes<typeof textCSS>;

export const text = css<TextProps>`
  ${props => props && parseProps(props, textCSS, props.theme.palette)}

  ${props => handleResponsiveness(props, textCSS)}

  ${props => handlePseudoClasses(props, textCSS)}
`;
