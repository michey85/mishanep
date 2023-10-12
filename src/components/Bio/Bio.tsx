import * as React from 'react';

import { Flex, Stack, Text } from '@chakra-ui/react';
import { Variants } from 'framer-motion';

import { MButton, MFlex, MStack, MText, MHeading, MImage } from '../../UI';
import Img from '../../assets/bio.jpg';

interface BioProps {
  text: string;
}

const imageAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const bioAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};

const Bio: React.FC<BioProps> = props => {
  const { text } = props;

  return (
    <MFlex
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="bio"
      direction={{ base: 'column-reverse', md: 'row' }}
      bg="gray.50"
    >
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <MHeading
            custom={1}
            variants={bioAnimation}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            <Text color={'blue.400'} as={'span'}>
              Михаил Непомнящий
            </Text>
          </MHeading>
          <MText
            custom={2}
            variants={bioAnimation}
            fontSize={{ base: 'md', lg: 'lg' }}
            color="gray.500"
          >
            {text}
          </MText>
          <MStack
            custom={3}
            variants={bioAnimation}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
          >
            <MButton
              whileTap={{ scale: 0.9 }}
              as="a"
              href="https://www.youtube.com/channel/UCFq12kPZg4wTNPO7V_g3B-A"
              target="_blank"
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
            >
              Смотреть YouTube
            </MButton>
          </MStack>
        </Stack>
      </Flex>
      <Flex flex={1} mb={0}>
        <MImage variants={imageAnimation} alt="Login Image" objectFit="cover" src={Img} />
      </Flex>
    </MFlex>
  );
};

export { Bio };
