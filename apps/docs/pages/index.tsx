// import { Button } from "api3-ui";
import styled, { ThemeProvider, ThemeContext } from 'styled-components';
import theme from '../../../themes/default';
import { Flex } from 'rebass'

export default function Docs() {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppRoot flexDirection={'column'} minHeight={'100vh'}>
        <h1>Docs</h1>
        {/* <Button variant='primary'>What a spanking button</Button> */}
      </StyledAppRoot>
    </ThemeProvider>
  );
}

const StyledAppRoot = styled(Flex)``;
