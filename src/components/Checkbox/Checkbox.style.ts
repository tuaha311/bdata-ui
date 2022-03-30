import { styled } from '@mui/material/styles';
import { COLOR } from '../../styles/colors';

export const BpIcon = styled('span')({
  borderRadius: 4,
  width: 20,
  height: 20,
  border: `1px solid ${COLOR.secondary300}`,
  backgroundColor: COLOR.white,
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  '.Mui-checked &': {
    boxShadow: '0px 0px 0px 4px #F4EBFF',
  },
  'input:hover ~ &': {
    backgroundColor: COLOR.primary50,
    border: `1px solid ${COLOR.neutral600}`,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    border: `1px solid ${COLOR.secondary200}`,
    background: COLOR.secondary100,
  },
});

export const BpCheckedIcon = styled(BpIcon)({
  '&:before': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    color: COLOR.neutral600,
    content: '"✔"',
  },
});
