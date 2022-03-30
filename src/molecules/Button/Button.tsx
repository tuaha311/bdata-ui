import { FC } from 'react';
import { Button as MUIButton } from '@mui/material';
import styled from 'styled-components';
import { basic, BasicProps } from '../../quarks/interpolations/basic';
import Icons, { IconName } from '../../atoms/Icons/Icons';

const StyledButton = styled(MUIButton)`
  && {
    ${basic}
  }
`;

interface ButtonProps extends BasicProps {
  children: string | JSX.Element;
  /**
   * The name of the icon being displayed at the end of the Button.The names are all written in PascalCase.
   */
  endIcon?: IconName;
  /**
   * The name of the icon being displayed at the start of the Button.The names are all written in PascalCase.
   */
  startIcon?: IconName;
  /**
   * Determines the size of the icon. Can be passed either a number `'75'`, a pixel value `'75px'`, or rem units `'10rem'`.
   *
   * **default value `'18'`**
   */
  iconSize?: string;
  /**
   * Determines the stroke width of the icon. Can be passed either a number `'75'`, a pixel value `'75px'`, or rem units `'10rem'`.
   *
   * **default value `'2'`**
   */
  iconStrokeWidth?: string;
  /**
   * Determines between an outlined, text, or contained button
   *
   * **default value** `'contained'`
   */
  variant?: 'contained' | 'text' | 'outlined';
  /**
   * The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * If `true`, the button is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the component.
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}

const Button: FC<ButtonProps> = ({
  children,
  endIcon,
  startIcon,
  iconSize,
  iconStrokeWidth,
  size,
  disabled,
  fullWidth,
  href,
  variant,
  ...props
}) => (
  <StyledButton
    {...props}
    variant={variant}
    href={href}
    size={size}
    fullWidth={fullWidth}
    disabled={disabled}
    startIcon={startIcon && <Icons name={startIcon} size={iconSize} strokeWidth={iconStrokeWidth} alt={startIcon} />}
    endIcon={endIcon && <Icons name={endIcon} size={iconSize} strokeWidth={iconStrokeWidth} alt={endIcon} />}>
    {children}
  </StyledButton>
);

export default Button;

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  iconSize: '18',
  iconStrokeWidth: '2',
};
