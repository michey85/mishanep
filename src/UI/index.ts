import {
    Box, BoxProps,
    Button,
    Stack, StackProps,
    Flex, FlexProps,
    Text, TextProps,
    Heading, HeadingProps,
    Image, ImageProps,
    SimpleGrid, SimpleGridProps,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';

export const MBox = motion<BoxProps>(Box);
export const MButton = motion(Button);
export const MStack = motion<StackProps>(Stack);
export const MFlex = motion<FlexProps>(Flex);
export const MText = motion<TextProps>(Text);
export const MHeading = motion<HeadingProps>(Heading);
export const MImage = motion<ImageProps>(Image);
export const MSimpleGrid = motion<SimpleGridProps>(SimpleGrid);
