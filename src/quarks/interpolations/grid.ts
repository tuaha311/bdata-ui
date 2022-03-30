import { css } from 'styled-components';
import { Properties } from 'csstype';
import { parseProps, handleResponsiveness, handlePseudoClasses, GetAllPropTypes } from './utilities';

const gridCSS = {
  gap: (value: Properties['gap']) => css`
    gap: ${value};
  `,
  columnGap: (value: Properties['columnGap']) => css`
    column-gap: ${value};
  `,
  rowGap: (value: Properties['rowGap']) => css`
    row-gap: ${value};
  `,
  grid: (value: Properties['grid']) => css`
    grid: ${value};
  `,
  gridArea: (value: Properties['gridArea']) => css`
    grid-area: ${value};
  `,
  gridAutoColumns: (value: Properties['gridAutoColumns']) => css`
    grid-auto-columns: ${value};
  `,
  gridAutoFlow: (value: Properties['gridAutoFlow']) => css`
    grid-auto-flow: ${value};
  `,
  gridAutoRows: (value: Properties['gridAutoRows']) => css`
    grid-auto-rows: ${value};
  `,
  gridColumn: (value: Properties['gridColumn']) => css`
    grid-column: ${value};
  `,
  gridColumnStart: (value: Properties['gridColumnStart']) => css`
    grid-column-start: ${value};
  `,
  gridColumnEnd: (value: Properties['gridColumnEnd']) => css`
    grid-column-end: ${value};
  `,
  gridRowStart: (value: Properties['gridRowStart']) => css`
    grid-row-start: ${value};
  `,
  gridRowEnd: (value: Properties['gridRowEnd']) => css`
    grid-row-end: ${value};
  `,
  gridTemplate: (value: Properties['gridTemplate']) => css`
    grid-template: ${value};
  `,
  gridTemplateAreas: (value: Properties['gridTemplateAreas']) => css`
    grid-template-areas: ${value};
  `,
  gridTemplateColumns: (value: Properties['gridTemplateColumns']) => css`
    grid-template-columns: ${value};
  `,
  gridTemplateRows: (value: Properties['gridTemplateRows']) => css`
    grid-template-rows: ${value};
  `,
};

type GridProps = GetAllPropTypes<typeof gridCSS>;

export const grid = css<GridProps>`
  display: grid;
  ${props => props && parseProps(props, gridCSS, props.theme.palette)}

  ${props => handleResponsiveness(props, gridCSS)}

  ${props => handlePseudoClasses(props, gridCSS)}
`;
