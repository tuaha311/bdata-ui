import { FC } from 'react';
import { TextField, TextFieldProps, ThemeProvider } from '@mui/material';
import inputTheme from './Input.theme';

const Input: FC<TextFieldProps> = ({ ...props }) => (
  <ThemeProvider theme={inputTheme}>
    <TextField {...props} />
  </ThemeProvider>
);

Input.defaultProps = {
  variant: 'filled',
};

export default Input;
