import * as React from 'react';

import { AlertIcon } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import { MAlert, MHeading, MBox, MSimpleGrid } from '../../UI';
import { Course, CourseProps } from './Course';

interface ICourses {
  courses: CourseProps[];
}

const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const alertAnimation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 1 },
  },
};

const coursesAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Courses: React.FC<ICourses> = props => {
  const { courses } = props;
  return (
    <MBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      p={4}
      maxW="container.xl"
      mx="auto"
      mt="12"
    >
      <MHeading variants={titleAnimation} mb={8} id="courses" fontSize="5xl">
        Видео курсы
      </MHeading>
      <MAlert status="info" variants={alertAnimation} mb={8}>
        <AlertIcon />
        На Stepik.org до конца 2024-го на все курсы действует промокод - TIMETOCODE.
      </MAlert>
      <MSimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {courses.map((course, index) => (
          <motion.div key={course.id} custom={index + 1} variants={coursesAnimation}>
            <Course {...course} />
          </motion.div>
        ))}
      </MSimpleGrid>
    </MBox>
  );
};

export { Courses };
