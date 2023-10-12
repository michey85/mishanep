import * as React from 'react';

import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import { courses, bio, youtubeList } from '../../data';
import { Bio } from '../Bio';
import { Courses } from '../Courses';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { YouTubePromo } from '../YouTubePromo';

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
