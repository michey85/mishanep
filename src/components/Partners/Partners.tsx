import * as React from 'react';

import { Stack } from '@chakra-ui/react';
import { Variants } from 'framer-motion';

import { MBox, MHeading, MImage } from '../../UI';
import Epam from '../../assets/epam.png';
import Gnivz from '../../assets/gnivz.png';
import Specialist from '../../assets/specialist.png';

const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Partners = () => {
  return (
    <MBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      mb={24}
      mt={12}
    >
      <MHeading variants={titleAnimation} mb={16} id="courses" fontSize="5xl">
        С кем я работаю
      </MHeading>
      <Stack
        direction={['column', null, 'row']}
        spacing={12}
        justify="center"
        align="center"
      >
        <MImage
          custom={1}
          variants={imageAnimation}
          src={Epam}
          htmlWidth="250"
          title="Место работы frontend-разработчиком"
        />
        <MImage
          custom={2}
          variants={imageAnimation}
          src={Specialist}
          title="Здесь преподаю в очном формате"
        />
        <MImage
          custom={3}
          variants={imageAnimation}
          src={Gnivz}
          title="Корпоративное обучение"
        />
      </Stack>
    </MBox>
  );
};

export { Partners };
