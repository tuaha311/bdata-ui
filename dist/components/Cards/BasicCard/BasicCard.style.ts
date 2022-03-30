import styled from 'styled-components';

const CardWrapper = styled.div`
  max-width: 370px;
  min-width: 270px;
  background-color: ${props => props.theme.palette.primary.dark};
  border-radius: 8px;
  padding: 0.5rem;
  box-sizing: border-box;
`;
const CardInner = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.theme.palette.divider};
  border-radius: 4px;
`;
const CardHeading = styled.h5`
  color: ${props => props.theme.palette.text.primary};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
  font-family: ${props => props.theme.typography.fontFamily};
  margin: 0 0 0.5rem;
`;
const CardDetails = styled.p`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6875rem;
  margin: 0 0 1rem;
  font-family: ${props => props.theme.typography.fontFamily};
`;

export { CardWrapper, CardInner, CardDetails, CardHeading };
