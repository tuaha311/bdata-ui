import { createTheme } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'Averta-Regular', sans- serif,",
          fontWeight: 900,
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            color: COLOR.white,
            backgroundColor: COLOR.neutral600,
            fontWeight: '900',
            '&:hover': {
              backgroundColor: COLOR.neutral900,
              boxShadow: '0px 8px 24px -4px rgba(40, 133, 246, 0.1), 0px 8px 8px -4px rgba(40, 133, 246, 0.04)',
            },
            '&:focus': {
              border: `2px solid ${COLOR.neutral900}`,
            },
            '&:disabled': {
              color: COLOR.white,
              backgroundColor: COLOR.neutral50,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: COLOR.neutral900,
            fontWeight: '900',
            backgroundColor: COLOR.neutral50,
            '&:hover': {
              backgroundColor: COLOR.neutral100,
              boxShadow: '0px 8px 24px -4px rgba(40, 133, 246, 0.1), 0px 8px 8px -4px rgba(40, 133, 246, 0.04)',
            },
            '&:disabled': {
              color: COLOR.white,
              backgroundColor: COLOR.neutral100,
            },
            '&:focus': {
              backgroundColor: COLOR.persianBlue,
              border: `2px solid ${COLOR.neutral50}`,
            },
          },
        },
        // {
        //     props: { color: 'tertiary' },
        //     style: {
        //         color: COLOR.black,
        //         fontWeight: '900',
        //         backgroundColor: COLOR.white,
        //         border: `1px solid ${COLOR.secondary300}`,
        //         '&:hover': {
        //             backgroundColor: COLOR.secondary50,
        //             boxShadow: '0px 8px 24px -4px rgba(40, 133, 246, 0.1), 0px 8px 8px -4px rgba(40, 133, 246, 0.04)'
        //         },
        //         '&:disabled': {
        //             backgroundColor: COLOR.secondary50
        //         },
        //         '&:focus': {
        //             border: `2px solid ${COLOR.neutral600}`,
        //             backgroundColor: COLOR.secondary50
        //         }
        //     },
        // },
      ],
    },
  },
});

export default buttonTheme;
