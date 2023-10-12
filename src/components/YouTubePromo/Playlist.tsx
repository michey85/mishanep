import * as React from 'react';

import { Box, Text } from '@chakra-ui/react';

export interface PlaylistProps {
  id: number;
  title: string;
  link: string;
  poster: string;
}

const Playlist: React.FC<PlaylistProps> = ({ title, link, poster }) => {
  return (
    <Box
      as="a"
      display="flex"
      href={link}
      target="_blank"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundImage={`url(${poster})`}
      minW="300px"
      minH="160px"
      p={2}
      color="white"
      fontWeight="black"
      alignItems="flex-start"
    >
      <Text as="span" bg="gray.500" py="1" px="2">
        {title}
      </Text>
    </Box>
  );
};

export { Playlist };
