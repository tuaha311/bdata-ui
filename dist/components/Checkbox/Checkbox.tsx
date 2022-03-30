import { ReactNode } from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { BpCheckedIcon as DefaultCheckedItem, BpIcon as DefaultIcon } from './Checkbox.style';

interface CheckboxProps {
  disabled?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedIcon: ReactNode;
  icon: ReactNode;
}

const Checkbox = ({ disabled, label, checked, onChange, ...props }: CheckboxProps) => (
  <FormControlLabel
    control={<MuiCheckbox checked={checked} onChange={onChange} {...props} />}
    disabled={disabled}
    label={label || ''}
  />
);

Checkbox.defaultProps = {
  onChange: () => null,
  label: '',
  BpIcon: DefaultIcon,
  BpCheckedIcon: DefaultCheckedItem,
};

export default Checkbox;
