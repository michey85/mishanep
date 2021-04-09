import * as React from "react"
import { Box, SimpleGrid, Icon, Heading } from '@chakra-ui/react';
import { FcAssistant, FcIdea, FcVideoFile } from 'react-icons/fc';

import { Feature } from './Feature'

const Features: React.FC = () => {
    return (
        <Box p={4} bg='gray.50' py={20}>
            <Box maxW="container.xl" mx='auto'>
                <Heading mb={12} fontSize='5xl'>Что я предлагаю</Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Feature
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        title={'Консультации'}
                        text={
                            'Для начинающих и практикующих разработчиков, а также для владельцев сайтов.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcVideoFile} w={10} h={10} />}
                        title={'Видео курсы'}
                        text={
                            'Записанные многочасовые видео курсы с обратной связью.'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcIdea} w={10} h={10} />}
                        title={'Обучение'}
                        text={
                            'Индивидуально, в группах, с практическими заданиями и code review.'
                        }
                    />
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export { Features }