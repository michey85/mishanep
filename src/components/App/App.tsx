import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import { Hero } from '../Hero';
import { Features } from '../Features';
import { Courses } from '../Courses';
import { Bio } from '../Bio';
import { YouTubePromo } from '../YouTubePromo';
import { Footer } from '../Footer';

import { courses, bio, youtubeList } from '../../data';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Hero />
      <Features />
      <Courses courses={courses} />
      <Bio text={bio} />
      <YouTubePromo list={youtubeList} />
      <Footer />
    </Box>
  </ChakraProvider>
);
