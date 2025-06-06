import * as React from 'react';

import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export interface CourseProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  poster: string;
  link?: string;
  stepik?: string;
}

const Course: React.FC<CourseProps> = props => {
  const { title, subtitle, tags, link, poster, stepik } = props;

  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg="white"
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
      >
        <Avatar
          size="xl"
          src={poster}
          name={title + ' ' + subtitle}
          mb={4}
          pos="relative"
        />
        <Heading fontSize="2xl" fontFamily="body">
          {title}
        </Heading>
        <Text fontWeight={600} color="gray.500" mb={4}>
          {subtitle}
        </Text>
        {/* <Text
          textAlign={'center'}
          color="gray.700"
          px={3}>
          {description}
        </Text> */}

        <Stack align="center" justify="center" direction="row" mt={6}>
          {tags.map((tag, index) => (
            <Badge key={index} px={2} py={1} bg="gray.50" fontWeight="400">
              {tag}
            </Badge>
          ))}
        </Stack>

        <Stack mt={8} direction="row" spacing={4}>
          {stepik && (
            <Button
              flex={1}
              as="a"
              href={stepik}
              data-provider="stepik"
              target="_blank"
              fontSize="sm"
              rounded="full"
              bg="black"
              color="white"
              boxShadow={
                '0px 1px 25px -5px rgb(166 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'black',
              }}
              _focus={{
                bg: 'black',
              }}
            >
              На Stepik
            </Button>
          )}
          {link && (
            <Button
              flex={1}
              as="a"
              href={link}
              data-provider="udemy"
              target="_blank"
              fontSize="sm"
              rounded="full"
              bg="blue.400"
              color="white"
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              На Udemy
            </Button>
          )}
        </Stack>
      </Box>
    </Center>
  );
};
export { Course };
