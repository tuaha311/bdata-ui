import { css } from 'styled-components';
import { typography } from '../../theme/typography';
import { parseProps, handleResponsiveness, handlePseudoClasses, GetAllPropTypes } from './utilities';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headingCSS = {
  as: (value: HeadingTypes) => css`
    font-size: ${typography.typography[value].fontSize};
    line-height: ${typography.typography[value].lineHeight};
    letter-spacing: ${typography.typography[value].letterSpacing};
    font-weight: ${typography.typography[value].fontWeight};
  `,
};

export type HeadingProps = GetAllPropTypes<typeof headingCSS>;

export const heading = css<HeadingProps>`
  ${props => props && parseProps(props, headingCSS, props.theme.palette)}

  ${props => handleResponsiveness(props, headingCSS)}

  ${props => handlePseudoClasses(props, headingCSS)}
`;
