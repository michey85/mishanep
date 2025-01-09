import * as React from 'react';
import { FcAssistant, FcIdea, FcVideoFile } from 'react-icons/fc';

import { Box, Icon } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import { MHeading, MBox, MSimpleGrid } from '../../UI';
import { ConsultFAQ } from '../ConsultFAQ';
import { Feature } from './Feature';

const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const featuresAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Features: React.FC = () => {
  return (
    <Box p={4} bg="gray.50" py={20}>
      <MBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        maxW="container.xl"
        mx="auto"
      >
        <MHeading variants={titleAnimation} mb={12} fontSize="5xl">
          Что я предлагаю
        </MHeading>
        <MSimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <motion.div custom={1} variants={featuresAnimation}>
            <Feature
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              title="Консультации"
              text={
                'Для начинающих и практикующих разработчиков, а также для владельцев сайтов.'
              }
              more={<ConsultFAQ />}
            />
          </motion.div>
          <motion.div custom={2} variants={featuresAnimation}>
            <Feature
              icon={<Icon as={FcVideoFile} w={10} h={10} />}
              title={'Видео курсы'}
              text={'Записанные многочасовые видео курсы с обратной связью.'}
            />
          </motion.div>
          <motion.div custom={3} variants={featuresAnimation}>
            <Feature
              icon={<Icon as={FcIdea} w={10} h={10} />}
              title={'Обучение'}
              text={'Индивидуальные проекты и code review.'}
            />
          </motion.div>
        </MSimpleGrid>
      </MBox>
    </Box>
  );
};

export { Features };
