import * as React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

import 'swiper/swiper-bundle.css';

import {
    MHeading,
    MBox,
} from '../../UI';

const animation: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
    }
}

const reviews = ['2911664792485745', '2910022975983260', '2889852934666931', '2889337261385165'];

SwiperCore.use([Navigation]);

function Reviews() {
    return (
        <MBox
            bg='gray.50'
            mt={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Box p={4} maxW="container.xl" mx="auto">
                <MHeading variants={animation} mb={8} id="courses" fontSize='5xl'>Отзывы</MHeading>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop={true}
                >
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review}>
                                <motion.iframe
                                    variants={animation}
                                    title={review}
                                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpcgramota%2Fposts%2F${review}&width=500&show_text=true&appId=1762180570691962&height=315`}
                                    width="500"
                                    height="355"
                                    className="facebook-iframe"
                                    style={{
                                        border: 'none',
                                        overflow: 'hidden',
                                        margin: 'auto',
                                    }}
                                    scrolling="no"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </MBox>

    )
}

export { Reviews }
