import styled from 'styled-components';
import Container from './Container';
import { flex } from './interpolations/flex';

const Flex = styled(Container)`
  ${flex}
`;

export default Flex;
