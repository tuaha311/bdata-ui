import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLOR } from '../../../styles/colors';

const CardWrapper = styled.div`
  background-color: ${props => props.theme.palette.primary.dark};
  width: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
  border-radius: 4px;
`;
const CardInner = styled.div`
  max-width: 440px;
`;
const CardHeading = styled.h3`
  color: ${props => props.theme.palette.text.primary};
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.5;
  margin: 0 0 0.5rem;
  font-family: 'Averta', sans-serif;
`;
const CardDetails = styled.p`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6875rem;
  margin: 0 0 1rem;
  font-family: 'Averta', sans-serif;
`;
const RatingsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-weight: 600;
  font-size: 1.75rem;
  font-family: 'Averta', sans-serif;
  line-height: 1.5;
  color: #4da74e;
  margin-bottom: 0.5rem;
  span {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    color: #4da74e;
    font-family: 'Averta', sans-serif;
    StarIcon {
      color: #4da74e;
    }
  }
`;
const CardDetailsRecommended = styled(CardDetails)`
  color: ${props => props.theme.palette.text.primary};
  font-weight: 600;
  margin: 0 0 0.5rem;
  font-family: 'Averta', sans-serif;
`;
const EditLink = styled(Link)`
  color: ${COLOR.neutral600};
  font-weight: 600;
  margin: 0;
  font-family: 'Averta', sans-serif;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  column-gap: 0.6875rem;
`;
export { CardWrapper, CardInner, CardDetails, CardHeading, CardDetailsRecommended, EditLink, RatingsWrapper };
