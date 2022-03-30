import { FC } from 'react';
import { Rating as MuiRating, RatingProps as MuiRatingProps, ThemeProvider } from '@mui/material';

import StarRatingTheme from './StarRating.style';

// interface RatingProps extends MuiRatingProps {
// }

const Rating: FC<MuiRatingProps> = ({ size, precision, ...props }) => (
  <ThemeProvider theme={StarRatingTheme}>
    <MuiRating size={size} precision={precision} {...props} />
  </ThemeProvider>
);

Rating.defaultProps = {
  size: 'medium',
  precision: 0.1,
};

export default Rating;
