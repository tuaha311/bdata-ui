import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import shadow from '../../shadows/shadows';
import { font, fontWeight } from '../../typography/typography';
import container from '../../spacing/containers';

interface SwatchProps {
  backgroundColor: string;
}

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${margin[32]};
`;

export const Swatch = styled.div`
  min-height: 150px;
  min-width: 100px;
  box-shadow: ${shadow.lg};
  background-color: ${props => props.theme.palette.background.paper};
`;

export const Description = styled.p`
  color: ${props => props.theme.palette.text.secondary};
  font: ${font.text.sm.font()};
  max-width: ${container.md};
  margin: 0.5rem 0 1rem;
`;

export const Intro = styled(Description)`
  font: ${font.text.xl.font()};
`;

export const SwatchColor = styled.div<SwatchProps>`
  min-height: 80px;
  background-color: ${props => props.backgroundColor};
`;

export const H1 = styled.h1`
  margin-bottom: ${margin[20]};
  color: ${props => props.theme.palette.text.primary};
  font: ${font.display.xl.font()};
  font-weight: ${fontWeight.bold};
`;

export const H3 = styled.h3`
  margin: 3rem 0 0;
  color: ${props => props.theme.palette.text.primary};
  font: ${font.text.xl.font()};
  font-weight: ${fontWeight.semiBold};
`;

export const H4 = styled.h4`
  color: ${props => props.theme.palette.text.primary};
  margin: 0.25rem 0.25rem 0.5rem;
  font: ${font.text.lg.font()};
  font-weight: ${fontWeight.semiBold};
`;

export const H6 = styled.h6`
  color: ${props => props.theme.palette.text.secondary};
  margin: 0 0.25rem;
  font: ${font.text.sm.font()};
`;
