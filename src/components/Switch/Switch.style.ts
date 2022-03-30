import { styled } from '@mui/system';
import { Switch as MuiSwitch } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

const Switch = muiStyled(MuiSwitch)({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&.checked': {
    boxShadow: '0px 0px 0px 4px #F4EBFF',
  },
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: COLOR.white,
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: COLOR.primary600,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: 200,
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: COLOR.gray200,
    boxSizing: 'border-box',
  },
});

const SwitchWrapper = styled('div')`
  display: flex;
`;
const ContentWrapper = styled('div')`
  padding: 0px 0.5rem;
  line-height: normal;
`;
const Title = styled('div')`
  color: ${COLOR.secondary700};
  font-size: 0.75rem;
`;
const SubTitle = styled('div')`
  color: ${COLOR.gray500};
  font-size: 0.75rem;
`;

export { Switch, SwitchWrapper, ContentWrapper, Title, SubTitle };
