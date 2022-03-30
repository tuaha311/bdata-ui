import styled from 'styled-components';
import Container from './Container';
import { grid } from './interpolations/grid';

const Grid = styled(Container)`
  ${grid}
`;

export default Grid;
