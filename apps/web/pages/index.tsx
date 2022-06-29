// import { Button, Text } from "rebass";
import { useState } from 'react';
import { Button, Navbar } from 'api3-ui';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from 'api3-ui/dist/themes/default';


import { Box, Text, Flex } from 'rebass/styled-components';
import Head from 'next/head';

export default function Web() {
  // console.log(theme)
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>API3 | The Web3 API Economy</title>
      </Head>
      <StyledAppRoot flexDirection={'column'} minHeight={'100vh'}>
        <Box data-aos={'fade'} sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: theme.gradients.backgroundGradient
        }} />
        <Navbar />
        <Flex sx={theme.layouts.main} pt={['5.75rem', '5.75rem', '5.75rem', '5rem']} mx={'auto'}>
          <Flex flexDirection={'column'} width={[1, 1, 1, '48.5rem']}>
            <Text data-aos={'fade-up'} as="h1" sx={{
              fontSize: [
                theme.fontSizes[5],
                theme.fontSizes[5],
                theme.fontSizes[5],
                theme.fontSizes[7],
              ],
              fontWeight: 600,
              mb: [
                '1.312rem',
                '1.312rem',
                '1.312rem',
                '2.1rem'
              ],
              lineHeight: [
                '2.875rem',
                'auto',
                'auto',
                '5.75rem',
                ]
              }}
            >
              The Web3<Box as='br' display={['block', 'none', 'none', 'block']}/> API Economy
            </Text>
            <Text data-aos={'fade-up'} sx={{
              ...theme.text.medium,
              color: theme.colors.esmerald,
              mb: [
                '1.312rem',
                '1.312rem',
                '1.312rem',
                '2.1rem'
              ],
            }}>
              Create trustless applications that interact with Web APIs
            </Text>
            <Text variant={'medium'} data-aos={'fade-up'} sx={{
              ...theme.text.medium,
              color: theme.colors.text[7],
              mb: '2.1rem'
            }}>
              First-party oracles are the next-generation technology to access off-chain data. API3 is leading the movement from legacy third-party oracle networks to first-party oracle solutions that deliver more security, efficiency, and data-source transparency.
            </Text>
            <Box data-aos={'fade-up'}>
              <Button variant='primary'>What a spanking button!</Button>
            </Box>
          </Flex>
        </Flex>
      </StyledAppRoot>
    </ThemeProvider>
  );
}

const StyledAppRoot = styled(Flex)`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text[9]}
`;
