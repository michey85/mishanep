import * as React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    // useColorModeValue,
} from '@chakra-ui/react';

export interface CourseProps {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    link: string;
    poster: string;
}

const Course: React.FC<CourseProps> = (props) => {
    const { id, title, subtitle, description, tags, link, poster } = props;

    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg="white"
                // bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    src={poster}
                    alt={title + ' ' + subtitle}
                    mb={4}
                    pos={'relative'}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {title}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {subtitle}
                </Text>
                <Text
                    textAlign={'center'}
                    color="gray.700"
                    // color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {description}
                </Text>

                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                    {tags.map(tag => (
                        <Badge
                            px={2}
                            py={1}
                            bg="gray.50"
                            // bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            {tag}
                        </Badge>
                    ))}
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        as="a"
                        href={link}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Подробнее
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
}
export { Course }