import { useState } from 'react';
import { SelectChangeEvent, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

interface SelectProps {
  list: string[];
  defaultValue: string;
  label: string;
  onChange: (arg: string) => void;
}

const SelectComp = ({ list, defaultValue, label, onChange }: SelectProps) => {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { value: newValue } = event.target;
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
        defaultValue={defaultValue}>
        {list.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectComp.defaultProps = {
  onChange: () => null,
};

export default SelectComp;
