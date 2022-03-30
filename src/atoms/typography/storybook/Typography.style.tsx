import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';
import container from '../../spacing/containers';

interface TileProps {
  font: string;
  weight: number;
}

export const Flex = styled.div`
  display: flex;
  gap: ${margin[32]};
  border-top: 1px solid ${color.gray[300]};
  padding: 1rem 0;
`;

export const FontTile = styled.div<TileProps>`
  min-width: 400px;
  font: ${props => props.font};
  font-weight: ${props => props.weight};
`;

export const H1 = styled.h1`
  margin-bottom: ${margin[20]};
  color: ${color.gray[900]};
  font: ${font.display.xl.font()};
  font-weight: ${fontWeight.bold};
`;

export const Intro = styled.p`
  color: ${color.gray[500]};
  font: ${font.text.xl.font()};
  max-width: ${container.md};
  margin: 0.5rem 0 2rem;
`;
