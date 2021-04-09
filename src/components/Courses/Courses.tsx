import * as React from 'react'
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';

import { Course, CourseProps } from './Course';

interface ICourses {
    courses: CourseProps[];
}

const Courses: React.FC<ICourses> = (props) => {
    const { courses } = props;
    return (
        <Box p={4} maxW="container.xl" mx='auto' mt="12">
            <Heading mb={8} id="courses" fontSize='5xl'>Видео курсы</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {
                    courses.map((course) => (
                        <Course key={course.id} {...course} />
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}

export { Courses }