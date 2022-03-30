import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StarRating from '../../StarRating/StarRating';
import {
  CardWrapper,
  CardInner,
  CardHeading,
  CardDetails,
  RatingsWrapper,
  EditLink,
  CardDetailsRecommended,
} from './GlassdoorCard.style';
import editIconSVG from '../../../assets/svg/edit-icon.svg';

interface GlassdoorCardProps {
  title: string;
  description?: string;
  rating?: number;
  recommendedText?: string;
  readReviews?: string;
  editIcon?: string;
  // editLinkText?: string;
}

const GlassdoorCard: FunctionComponent<GlassdoorCardProps> = props => {
  const { title, description, rating, recommendedText, readReviews, editIcon } = props;
  return (
    <CardWrapper>
      <CardInner>
        <CardHeading>{title}</CardHeading>
        <CardDetails>{description}</CardDetails>
        <RatingsWrapper>
          {rating}
          <span>
            <StarRating value={rating} readOnly />
          </span>
        </RatingsWrapper>
        <CardDetailsRecommended className="employees">{recommendedText}</CardDetailsRecommended>
        <Router>
          <EditLink to="/">
            {readReviews && readReviews}
            {readReviews && <img src={editIcon} alt="edit-icon" />}
          </EditLink>
        </Router>
      </CardInner>
    </CardWrapper>
  );
};

GlassdoorCard.defaultProps = {
  readReviews: 'Read our reviews',
  editIcon: editIconSVG,
};

export default GlassdoorCard;
