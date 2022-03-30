import styled from 'styled-components';
import { margin } from '../../spacing/spacing';
import color from '../../colors/colors';
import { font, fontWeight } from '../../typography/typography';
import container from '../../spacing/containers';

interface BlurProps {
  size: string;
  color: string;
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
  flex-wrap: wrap;
  gap: ${margin[64]};
`;

export const Container = styled(Flex)`
  width: 100%;
  background: url('/blurBackground.jpg') no-repeat left/cover;
  min-height: 500px;
  padding: 80px 40px;
`;

export const BlurBox = styled.div<BlurProps>`
  width: 45%;
  background-color: ${props => props.color};
  border-radius: 8px;
  height: 200px;
  display: grid;
  place-items: center;
  backdrop-filter: ${props => props.size};
`;

export const H6 = styled.h6<H6Props>`
  font: ${font.text.lg.font()};
  font-weight: ${fontWeight.semiBold};
  color: ${props => props.textColor};
`;
