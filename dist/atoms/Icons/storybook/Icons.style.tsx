import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';
import container from '../../spacing/containers';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: ${margin[20]};
  padding: 0 0 2rem;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-bottom: ${margin[20]};
  color: ${color.gray[900]};
  font: ${font.display.xl.font()};
  font-weight: ${fontWeight.bold};
`;

export const H4 = styled.h4`
  color: ${color.primary[500]};
`;

export const Intro = styled.p`
  color: ${color.gray[500]};
  font: ${font.text.xl.font()};
  max-width: ${container.md};
  margin: 0.5rem 0 2rem;
`;
