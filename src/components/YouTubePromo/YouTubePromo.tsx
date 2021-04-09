import * as React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react'
import { Playlist, PlaylistProps } from './Playlist'


interface YuTubePtomoProps {
    list: PlaylistProps[];
}

const YouTubePromo: React.FC<YuTubePtomoProps> = (props) => {
    const { list } = props;

    return (
        <Box py={16} maxW='container.xl' mx='auto'>
            <Heading mb={12} fontSize='5xl'>
                Бесплатные курсы на YouTube
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={10}>
                {
                    list.map(item => (
                        <Playlist key={item.id} {...item} />
                    ))
                }
            </SimpleGrid>
        </Box>
    );
}

export { YouTubePromo }