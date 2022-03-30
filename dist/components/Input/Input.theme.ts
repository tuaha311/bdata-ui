import { createTheme } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

const inputTheme = createTheme({
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: COLOR.primary50,
            borderBottom: 'none',
          },
          '&.Mui-focused': {
            backgroundColor: COLOR.primary50,
            borderBottom: 'none',
            border: `2px solid ${COLOR.primary500}`,
          },
          '&:hover:not(.Mui-focused):before': {
            borderBottom: 'none',
          },
          '&:before': {
            border: 'none',
          },
          '&:after': {
            border: 'none',
          },
        },
      },
    },
  },
});

export default inputTheme;
