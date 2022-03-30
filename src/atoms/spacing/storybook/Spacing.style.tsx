import styled from 'styled-components';
import { margin } from '../spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';
import container from '../containers';

interface SpacingProps {
  width: string;
}

interface H6Props {
  textColor: string;
}

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

export const Flex = styled.div`
  display: flex;
  gap: ${margin[64]};
  padding: 0.25rem;
`;

export const SpacingBox = styled.div<SpacingProps>`
  width: ${props => props.width};
  background-color: ${color.primary[500]}10;
  height: 20px;
  position: relative;
  color: ${color.primary[700]};
  font: ${font.text.xs.font()};
  padding-left: 0.25rem;
  margin: 16px;
`;

export const H6 = styled.h6<H6Props>`
  font: ${font.text.lg.font()};
  font-weight: ${fontWeight.semiBold};
  color: ${props => props.textColor};
`;
