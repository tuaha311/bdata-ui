export const breakpoints = {
  xs: '375px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
} as const;

export const media = {
  xs: `@media screen and (min-width: ${breakpoints.xs})`,
  sm: `@media screen and (min-width: ${breakpoints.sm})`,
  md: `@media screen and (min-width: ${breakpoints.md})`,
  lg: `@media screen and (min-width: ${breakpoints.lg})`,
  xl: `@media screen and (min-width: ${breakpoints.xl})`,
} as const;
