import { FC } from 'react';
import { Slider, SliderProps, ThemeProvider } from '@mui/material';
import SliderTheme from './Slider.style';

const SliderSingle: FC<SliderProps> = ({ ...props }) => (
  <ThemeProvider theme={SliderTheme}>
    <Slider {...props} />
  </ThemeProvider>
);

export default SliderSingle;
