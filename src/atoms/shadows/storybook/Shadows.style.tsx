import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';
import container from '../../spacing/containers';

interface ShadowProp {
  shadow: string;
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
  flex-wrap: wrap;
  gap: ${margin[64]};
  padding: 0 0 4rem;
`;

export const ShadowBox = styled.div<ShadowProp>`
  min-width: 160px;
  min-height: 160px;
  background-color: ${color.white};
  box-shadow: ${props => props.shadow};
`;
