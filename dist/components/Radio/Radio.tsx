import { FC, ReactNode } from 'react';
import { FormControlLabel, Radio } from '@mui/material';
import { BpCheckedIcon, BpIcon } from './Radio.style';

interface RadioInputProps {
  label: string;
  value: string;
  isDisabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedIcon?: ReactNode;
  icon?: ReactNode;
}

const RadioComp: FC<RadioInputProps> = ({ isDisabled, value, defaultChecked, onChange, label, ...rest }) => (
  <FormControlLabel
    control={
      <Radio value={value} disabled={isDisabled} onChange={onChange} defaultChecked={defaultChecked} {...rest} />
    }
    label={label || ''}
  />
);

RadioComp.defaultProps = {
  onChange: () => null,
  checkedIcon: BpCheckedIcon,
  icon: BpIcon,
};

export default RadioComp;
