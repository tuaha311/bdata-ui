import styled, { css } from 'styled-components';
import { LineProgressProps } from './LinearProgress';
import { COLOR } from '../../styles/colors';

const labelStyles = css`
  position: absolute;
  justify-content: flex-end;
  align-items: flex-end;
  p {
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05);
    background: ${COLOR.white};
    color: black;
    padding: 8px 12px;
    color: ${COLOR.gray700};
    border-radius: 8px;
  }
`;

const ProgressValueWrapper = styled.div<LineProgressProps>`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0;
  ${props =>
    props.labelPosition === 'right' &&
    css`
      top: 0;
      transform: translateY(-30%);
      right: -3.5%;
    `}
  ${props =>
    props.labelPosition === 'topFloating' &&
    css`
      top: unset;
      bottom: 10px;
      ${labelStyles}
    `}
  ${props =>
    props.labelPosition === 'bottomFloating' &&
    css`
      ${labelStyles}
    `}
`;

const ProgressBarContainer = styled.div<LineProgressProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 7px;
  z-index: 0;
  border-radius: 4px;
  margin: 30px 0;
  background: ${COLOR.primary50};
  ${props =>
    props.labelPosition === 'right' &&
    `
      width: 96.5%;
    `}
`;

const ProgressBar = styled.div<LineProgressProps>`
  width: ${props => `${props.value}%`};
  background-color: ${COLOR.primary600};
  height: 100%;
  transition: width 1s ease-in-out;
  border-radius: 4px;
  position: relative;
  ${props =>
    props.labelPosition === 'right' &&
    `position:unset;
  `}
  ${props =>
    props.labelPosition === 'bottom' &&
    `position:unset;
  `}
`;

export { ProgressValueWrapper, ProgressBarContainer, ProgressBar };
