import { FC } from 'react';
import { SwitchProps as MuiSwitchProps } from '@mui/material';
import { Switch, SwitchWrapper, ContentWrapper, Title, SubTitle } from './Switch.style';

interface SwitchProps extends MuiSwitchProps {
  title?: string;
  subTitle?: string;
}

const SwitchComp: FC<SwitchProps> = ({ title, subTitle, ...props }) => (
  <SwitchWrapper>
    <Switch {...props} />
    <ContentWrapper>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </ContentWrapper>
  </SwitchWrapper>
);

export default SwitchComp;
