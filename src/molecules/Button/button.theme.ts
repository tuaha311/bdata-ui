import { fontWeight } from '../../atoms/typography/typography';
import { padding } from '../../atoms/spacing/spacing';
import color from '../../atoms/colors/colors';
import shadow from '../../atoms/shadows/shadows';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xsmall: true;
    xlarge: true;
  }
}

const themeOverrides = {
  root: {
    textTransform: 'capitalize',
    fontWeight: fontWeight.black,
    borderRadius: '8px',
    fontSize: '0.875rem',
    paddingLeft: padding[16],
    paddingRight: padding[16],
    boxShadow: shadow.xs,
  },
};

const sizeVariants = [
  {
    props: { size: 'xsmall' },
    style: {
      paddingTop: padding[4],
      paddingBottom: padding[4],
    },
  },
  {
    props: { size: 'small' },
    style: {
      lineHeight: '2.3',
      paddingLeft: padding[20],
      paddingRight: padding[20],
    },
  },
  {
    props: { size: 'medium' },
    style: {
      fontSize: '1rem',
      lineHeight: '2',
      paddingLeft: padding[20],
      paddingRight: padding[20],
    },
  },
  {
    props: { size: 'large' },
    style: {
      fontSize: '1rem',
      lineHeight: '2.05',
      paddingLeft: padding[24],
      paddingRight: padding[24],
    },
  },
  {
    props: { size: 'xlarge' },
    style: {
      fontSize: '1.125rem',
      lineHeight: '2.4',
      paddingLeft: padding[24],
      paddingRight: padding[24],
    },
  },
];

export const lightButton = {
  MuiButton: {
    styleOverrides: themeOverrides,
    variants: [
      ...sizeVariants,
      {
        props: { variant: 'contained' },
        style: {
          backgroundColor: color.primary[600],
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          color: color.common.black,
          borderColor: color.gray[300],
        },
      },
      {
        props: { variant: 'text' },
        style: {
          color: color.primary[600],
        },
      },
    ],
  },
};

export const darkButton = {
  MuiButton: {
    styleOverrides: themeOverrides,
    variants: [
      ...sizeVariants,
      {
        props: { variant: 'contained' },
        style: {
          color: color.common.black,
          backgroundColor: color.gray[25],
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          color: color.common.white,
          borderColor: color.gray[300],
        },
      },
      {
        props: { variant: 'text' },
        style: {
          color: color.gray[25],
        },
      },
    ],
  },
};
