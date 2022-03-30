/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme, FlattenSimpleInterpolation, ThemedStyledProps, css } from 'styled-components';
import { media } from '../../atoms/breakpoints/breakpoints';

type ObjectCSS = { [key: string]: (...args: any[]) => FlattenSimpleInterpolation };

export const parseProps = (props: Record<string, any>, objectCSS: ObjectCSS, palette: DefaultTheme['palette']) => {
  const validPassedProps = Object.entries(props).filter(([propKey]) => objectCSS[propKey]);

  return validPassedProps.map(([propKey, propValue]) => {
    const functionFromProp = objectCSS[propKey];

    return functionFromProp(propValue, palette);
  });
};

const breakpointArray = Object.keys(media) as [keyof typeof media];

export const handleResponsiveness = (
  props: ThemedStyledProps<Record<string, any>, DefaultTheme>,
  objectCSS: ObjectCSS,
) => {
  const validPassedBreakpoints = breakpointArray.filter(display => props[display]);

  return validPassedBreakpoints.map(breakpoint => {
    const mediaQuery = media[breakpoint];
    const responsiveProps = props[breakpoint];

    return css`
      ${mediaQuery} {
        ${parseProps(responsiveProps, objectCSS, props.theme.palette)}
      }
    `;
  });
};

const pseudos = {
  hover: 'hover',
  active: 'active',
  focus: 'focus',
  focusWithin: 'focus-within',
  focusVisible: 'focus-visible',
} as const;

const pseudoClasses = Object.keys(pseudos) as [keyof typeof pseudos];

export const handlePseudoClasses = (
  props: ThemedStyledProps<Record<string, any>, DefaultTheme>,
  objectCSS: ObjectCSS,
) => {
  const validPassedPseudos = pseudoClasses.filter(pseudo => props[pseudo]);

  return validPassedPseudos.map(pseudo => {
    const pseudoSelector = `&:${pseudos[pseudo]}`;
    const pseudoProps = props[pseudo];

    return css`
      ${pseudoSelector} {
        ${parseProps(pseudoProps, objectCSS, props.theme.palette)}
      }
    `;
  });
};

type DirectProps<T extends ObjectCSS> = {
  [P in keyof T]?: Parameters<T[P]>[0];
};

type ResponsiveProps<T extends ObjectCSS> = {
  [S in keyof typeof media]?: DirectProps<T>;
};

type PseudoProps<T extends ObjectCSS> = {
  [C in keyof typeof pseudos]?: DirectProps<T>;
};

export type GetAllPropTypes<T extends ObjectCSS> = DirectProps<T> & ResponsiveProps<T> & PseudoProps<T>;
