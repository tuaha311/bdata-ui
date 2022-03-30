import { FunctionComponent } from 'react';
import Button from '../../Button/Button';
import { CardWrapper, CardInner, CardTitle, CardHeading, CardDetails } from './CareerCard.style';

interface CareerCardProps {
  title?: string;
  heading?: string;
  details?: string;
}

const CareerCard: FunctionComponent<CareerCardProps> = (props: CareerCardProps) => {
  const { title, heading, details } = props;
  return (
    <CardWrapper>
      <CardInner>
        <CardTitle>{title}</CardTitle>
        <CardHeading>{heading}</CardHeading>
        <CardDetails>{details}</CardDetails>
        <Button label="Apply Now" size="large" />
      </CardInner>
    </CardWrapper>
  );
};

export default CareerCard;
