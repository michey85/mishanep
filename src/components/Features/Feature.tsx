import * as React from 'react';

import { Text, Stack, Flex } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
  more?: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon, more }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        alignSelf="center"
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize={'4xl'}>
        {title}
      </Text>
      <Text color={'gray.600'}>{text}</Text>
      {more}
    </Stack>
  );
};

export { Feature };
