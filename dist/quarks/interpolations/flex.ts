import { css } from 'styled-components';
import { Properties } from 'csstype';
import { parseProps, handleResponsiveness, handlePseudoClasses, GetAllPropTypes } from './utilities';

const flexCSS = {
  alignItems: (value: Properties['alignItems']) => css`
    align-items: ${value};
  `,
  justifyContent: (value: Properties['justifyContent']) => css`
    justify-content: ${value};
  `,
  flexWrap: (value: Properties['flexWrap']) => css`
    flex-wrap: ${value};
  `,
  flexDirection: (value: Properties['flexDirection']) => css`
    flex-direction: ${value};
  `,
  order: (value: Properties['order']) => css`
    order: ${value};
  `,
  flexBasis: (value: Properties['flexBasis']) => css`
    flex-basis: ${value};
  `,
  flexGrow: (value: Properties['flexGrow']) => css`
    flex-grow: ${value};
  `,
  flexShrink: (value: Properties['flexShrink']) => css`
    flex-shrink: ${value};
  `,
  gap: (value: Properties['gap']) => css`
    gap: ${value};
  `,
};

type FlexProps = GetAllPropTypes<typeof flexCSS>;

export const flex = css<FlexProps>`
  display: flex;
  ${props => props && parseProps(props, flexCSS, props.theme.palette)}

  ${props => handleResponsiveness(props, flexCSS)}

  ${props => handlePseudoClasses(props, flexCSS)}
`;
