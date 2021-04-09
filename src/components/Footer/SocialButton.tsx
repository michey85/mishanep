import * as React from 'react'
import {
    chakra,
    // useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: React.ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg="blackAlpha.100"
            // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                // bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                bg: 'blackAlpha.200',
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export { SocialButton }