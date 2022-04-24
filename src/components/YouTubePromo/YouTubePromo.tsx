import * as React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import {
  MHeading,
  MBox,
} from '../../UI';

import { Playlist, PlaylistProps } from './Playlist';

interface YuTubePtomoProps {
    list: PlaylistProps[];
}

const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const playlistAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const YouTubePromo: React.FC<YuTubePtomoProps> = (props) => {
  const { list } = props;

  return (
    <MBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      py={16}
      maxW="container.xl"
      mx="auto"
    >
      <MHeading variants={titleAnimation} mb={12} fontSize="5xl">
                Бесплатные курсы на YouTube
      </MHeading>
      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        {
          list.map((item, index) => (
            <motion.div key={item.id} variants={playlistAnimation} custom={index + 1}>
              <Playlist {...item} />
            </motion.div>
          ))
        }
      </SimpleGrid>
    </MBox>
  );
};

export { YouTubePromo };