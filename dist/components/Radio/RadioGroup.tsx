import { FunctionComponent, useState } from 'react';
import { RadioGroup as MuiRadioGroup, FormControlLabel, FormControl } from '@mui/material';
import Radio from './Radio';

interface RadioListObject {
  label: string;
  value: string;
}

interface RadioGroupProps {
  defaultValue?: string;
  row: boolean;
  name: string;
  list: RadioListObject[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: FunctionComponent<RadioGroupProps> = ({ list, defaultValue, row, name, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl component="fieldset">
      <MuiRadioGroup defaultValue={defaultValue} name={name} row={row} value={value}>
        {list.map(item => (
          <FormControlLabel
            key={item.label}
            value={item}
            sx={{
              '& .MuiFormControlLabel-root': {
                margin: 0,
              },
            }}
            control={
              <Radio
                value={item.value}
                label={item.label}
                defaultChecked={item.label === defaultValue}
                onChange={handleChange}
              />
            }
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

RadioGroup.defaultProps = {
  list: [],
  name: '',
};

export default RadioGroup;
