import * as React from 'react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Box,
} from '@chakra-ui/react';
import KodixImg from '../../assets/kodix.svg';
import Specialist from '../../assets/specialist.png';
import Gnivz from '../../assets/gnivz.png';

const Partners = () => {
    return (
        <Box mb={24} mt={12}>
            <Heading mb={16} id="courses" fontSize='5xl'>С кем я работаю</Heading>
            <Stack direction={["column", "row"]} spacing={12} justify="center" align="center">
                <Image src={KodixImg} htmlWidth="250" title="Место работы frontend-разработчиком"/>
                <Image src={Specialist} title="Здесь преподаю в очном формате" />
                <Image src={Gnivz} title="Корпоративное обучение"/>
                
            </Stack>
        </Box>
    )
}

export {Partners}
