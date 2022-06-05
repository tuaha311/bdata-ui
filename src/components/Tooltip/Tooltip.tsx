import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { Tooltip as MUITooltip } from '@mui/material';
import { LIGHT_MODE_THEME } from '../../utils/constants';
import { COLOR } from '../../styles/colors';

interface TooltipProviderProps {
  children?: JSX.Element;
}

interface TooltipProps {
  title: string;
  arrowPosition: string;
  arrow?: boolean;
  children: TooltipProviderProps;
  className: string;
}

const Tooltip = ({ children, className, ...props }: any) => (
  <MUITooltip {...props} classes={{ popper: className }}>
    <div>{children}</div>
  </MUITooltip>
);

const BootstrapTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.mode === LIGHT_MODE_THEME ? COLOR.secondary900 : COLOR.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    color: theme.palette.mode === LIGHT_MODE_THEME ? COLOR.white : COLOR.secondary700,
    backgroundColor: theme.palette.mode === LIGHT_MODE_THEME ? COLOR.secondary900 : COLOR.white,
  },
}));

const BootstrapTooltipFunc: FC<TooltipProps> = ({ children, title, arrowPosition, arrow, ...rest }) => (
  <BootstrapTooltip title={title} placement={arrowPosition} arrow={arrow} {...rest}>
    {children}
  </BootstrapTooltip>
);

BootstrapTooltipFunc.defaultProps = {
  arrowPosition: 'bottom',
};

export default BootstrapTooltipFunc;
