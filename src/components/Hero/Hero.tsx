import * as React from 'react';
import { Variants } from 'framer-motion';
import {
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import {
  MButton,
  MStack,
  MText,
  MHeading,
  MImage,
} from '../../UI';

import Img from '../../assets/hero.jpg';


const container: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
  
const item: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <MStack
          variants={container}
          initial="hidden"
          animate="show"
          spacing={6}
          w={'full'} 
          maxW={'lg'}
        >
          <MHeading variants={item} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: '\'\'',
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
                            FrontEnd
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
                            Обучение веб-разработке
            </Text>{' '}
          </MHeading>
          <MText variants={item} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Научитесь создавать сайты разного уровня сложности. От работы с WordPress до полноценной frontend-разработки.
          </MText>
          <MStack variants={item} direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent="center">
            <MButton
              whileTap={{ scale: 0.9 }}
              as="a"
              href="#courses"
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                            Смотреть курсы
            </MButton>
            <MButton
              whileTap={{ scale: 0.9 }}
              as="a"
              href="#bio"
              rounded={'full'}
            >
                            О преподавателе
            </MButton>
          </MStack>
        </MStack>
      </Flex>
      <Flex flex={1}>
        <MImage
          initial={{
            filter: 'blur(100px)',
            opacity: 0,
          }}
          animate={{
            filter: 'blur(0px)',
            opacity: 1,
            transition: {duration: 2},
          }}
          alt={'Login Image'}
          objectFit={'cover'}
          src={Img}
        />
      </Flex>
    </Stack>
  );
}

export { Hero };