import * as React from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading } from '@chakra-ui/react';
import 'swiper/swiper-bundle.css';

const reviews = ['2910022975983260', '2889852934666931', '2889337261385165'];

SwiperCore.use([Navigation]);

function Reviews() {
    return (
        <Box bg='gray.50' mt={12}>
            <Box p={4} maxW="container.xl" mx="auto">
                <Heading mb={8} id="courses" fontSize='5xl'>Отзывы</Heading>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    // updateOnWindowResize
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    loop={true}
                // loopedSlides={3}
                >
                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review}>
                                <iframe
                                    src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpcgramota%2Fposts%2F${review}&width=500&show_text=true&appId=1762180570691962&height=315`}
                                    width="500"
                                    height="315"
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
        </Box>

    )
}

export { Reviews }
