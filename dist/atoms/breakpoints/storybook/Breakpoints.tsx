import { H1, Flex, BreakpointDisplay } from './Breakpoints.style';
import { breakpoints } from '../breakpoints';

const Breakpoints = () => {
  const breakpointArr = Object.entries(breakpoints);

  return (
    <div>
      <H1>Breakpoints</H1>
      <Flex>
        {breakpointArr.map(breakpoint => (
          <div key={breakpoint[0]}>
            <h4>
              {breakpoint[0]}
              <span> {breakpoint[1]}</span>
            </h4>
            <BreakpointDisplay breakpoint={breakpoint[1]} />
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default Breakpoints;
