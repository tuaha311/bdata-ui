import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';

interface BreakpointProp {
  breakpoint: string;
}

export const H1 = styled.h1`
  margin-bottom: ${margin[20]};
  color: ${color.gray[900]};
  font: ${font.display.xl.font()};
  font-weight: ${fontWeight.bold};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${margin[64]};
  padding: 0.25rem;
  margin: 16px;
`;

export const Px = styled.h4`
  color: ${color.gray[700]};
  font: ${font.text.md.font()};
`;

export const BreakpointDisplay = styled.div<BreakpointProp>`
  min-width: ${props => props.breakpoint};
  display: inline-block;
  position: relative;
  min-height: 160px;
  background-color: ${color.white};
  padding-left: 0.25rem;
`;
