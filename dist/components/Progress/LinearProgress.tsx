import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { ProgressValueWrapper, ProgressBarContainer, ProgressBar } from './Progress.style';

export interface LineProgressProps {
  value?: number;
  labelPosition?: 'right' | 'bottom' | 'topFloating' | 'bottomFloating';
}

const LinearProgress: FC<LineProgressProps> = props => {
  const { value, labelPosition } = props;
  return (
    <ProgressBarContainer labelPosition={labelPosition}>
      <ProgressBar {...props}>
        {value && (
          <ProgressValueWrapper {...props}>
            <Typography variant="body2">{`${Math.round(value)}%`}</Typography>
          </ProgressValueWrapper>
        )}
      </ProgressBar>
    </ProgressBarContainer>
  );
};

export default LinearProgress;
