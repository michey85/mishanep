import * as React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaYoutube, FaVk } from 'react-icons/fa';

import { SocialButton } from './SocialButton'

const Footer = () => {
    return (
        <Box
            bg="gray.50"
            color="gray.700"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>&copy; {new Date().getFullYear()} Михаил Непомнящий</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/pcgramota'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCFq12kPZg4wTNPO7V_g3B-A'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/pcgramota'}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={'VK'} href={'https://vk.com/pcgramota'}>
                        <FaVk />
                    </SocialButton>
                </Stack>
            </Container>
        </Box >
    );
}

export { Footer }