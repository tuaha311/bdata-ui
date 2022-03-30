import { createTheme } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

const StarRatingTheme = createTheme({
  components: {
    MuiRating: {
      styleOverrides: {
        root: {
          color: COLOR.kermit600,
        },
      },
    },
  },
});

export default StarRatingTheme;
