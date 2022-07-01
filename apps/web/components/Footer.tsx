import React from 'react';

import { Box, Flex, Link, Text } from 'rebass';
import styled from 'styled-components';
import theme from 'api3-ui/dist/themes/default';
// import './../styles/globals.css'

export const Footer = (props : any) => {

  const onClick = () => {
    props.onClick && props.onClick();
  };

  const FooterNavigation = [
    {
        header: 'Solutions',
        items: [
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
        ]
    },
    {
        header: 'Solutions',
        items: [
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
        ]
    },
    {
        header: 'Solutions',
        items: [
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
        ]
    },
    {
        header: 'Solutions',
        items: [
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
        ]
    },
    {
        header: 'Solutions',
        items: [
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
            {
                label: 'Item'
            },
        ]
    },
  ]

  return (
    <StyledFooter 
        theme={theme} 
        {...props}
        >
        <Flex sx={theme.layouts.main} pt={'5rem'} pb={'2.75rem'} justifyContent={'space-between'} >
            <Box 
                src={'/API Logo.svg'}
                alt="API3" 
                as='img'
                sx={{
                    filter: props.type == 'dark' ? 'none' : 'invert(0.7)'
                }}
            />
            <Flex>
                {FooterNavigation.map((footerLinks, index) => (
                    <Flex flexDirection={'column'} ml={'4.5rem'} sx={{'&:first-child': {ml: 0}}}>
                        <Text fontSize={'0.875rem'} sx={{mb: '0.5rem'}}>
                            {footerLinks.header}
                        </Text>
                        <Flex as="ul" flexDirection={'column'} >
                            {footerLinks.items.map((item, index) => (
                                <Link 
                                    fontSize={'0.875rem'} 
                                    sx={{
                                        mb: '0.5rem',
                                        transition: '0.25s ease-in-out all',
                                        cursor: 'pointer',
                                        '&:last-child': {
                                            mb: 0
                                        },
                                        '&:hover': {
                                            color: theme.colors.text[10]
                                        }
                                    }} 
                                    color={theme.colors.text[5]}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    </StyledFooter>
  )
};

const StyledFooter = styled(Flex)``;

Footer.defaultProps = {
    type: 'dark'
}

export default Footer;