import { FunctionComponent } from 'react';
import Button from '../../Button/Button';
import { CardWrapper, CardInner, CardHeading, CardDetails } from './BasicCard.style';

interface BasicCardProps {
  heading?: string;
  subhead?: string;
  buttonColor?: 'primary' | 'secondary';
  buttonText: string;
  icon?: boolean;
  // variant?: string;
  className?: string;
  buttonSize?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  onClick: () => void;
}

const BasicCard: FunctionComponent<BasicCardProps> = ({
  heading,
  subhead,
  buttonColor,
  icon,
  className,
  disabled,
  buttonSize,
  buttonText,
  onClick,
}) => (
  <CardWrapper>
    <CardInner>
      <CardHeading>{heading}</CardHeading>
      <CardDetails>{subhead}</CardDetails>
      <Button
        color={buttonColor}
        icon={icon}
        className={className}
        disabled={disabled}
        size={buttonSize}
        label={buttonText}
        onClick={onClick}
      />
    </CardInner>
  </CardWrapper>
);

export default BasicCard;
