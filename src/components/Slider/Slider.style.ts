import { createTheme } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

const SliderTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: COLOR.white,
        },
        track: {
          color: COLOR.primary600,
        },
        rail: {
          color: COLOR.gray200,
        },
      },
    },
  },
});

export default SliderTheme;
