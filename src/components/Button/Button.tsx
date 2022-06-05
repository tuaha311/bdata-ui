import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button, ThemeProvider } from '@mui/material';
import buttonTheme from './buttons.theme';

interface Props {
  color?: 'primary' | 'secondary';
  label: string;
  icon?: boolean;
  className?: string;
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  onClick: () => void;
  // variant?: string;
}

const ButtonComp = ({ color, label, icon, className, disabled, size, onClick }: Props) => (
  <ThemeProvider theme={buttonTheme}>
    <Button
      color={color}
      endIcon={icon && <ArrowForwardIcon />}
      className={className}
      disabled={disabled}
      size={size}
      onClick={onClick}>
      {label}
    </Button>
  </ThemeProvider>
);

ButtonComp.defaultProps = {
  icon: false,
  size: 'large',
  variant: 'contained',
  className: '',
};

export default ButtonComp;
