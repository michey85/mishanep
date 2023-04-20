import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';

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
      <Grid minH="100vh">
        <Hero />
        <Features />
        <Courses courses={courses} />
        <Bio text={bio} />
        <YouTubePromo list={youtubeList} />
        <Footer />
      </Grid>
    </Box>
  </ChakraProvider>
);
