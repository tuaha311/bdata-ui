import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#101828',
    },
    divider: '#1D2939',
    background: {
      default: '#101828',
      paper: '#101828',
    },
    // divider: '#944054',

    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
});

export default darkTheme;
