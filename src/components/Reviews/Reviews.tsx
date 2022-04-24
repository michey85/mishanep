import * as React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import {
  MHeading,
  MBox,
} from '../../UI';

const animation: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const directionOffset = 800;
const variants: Variants = {
  enter: direction => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
};

const reviews = ['2911664792485745', '2910022975983260', '2889852934666931', '2889337261385165'];

function Reviews() {
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [activeBullet, setActiveBullet] = React.useState(0);

  const paginate = (newDirection: number) => {
    if (page + newDirection < reviews.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      setActiveBullet(page + newDirection);
    } else if (page + newDirection === reviews.length) {
      setPage([0, 0]);
      setActiveBullet(0);
    } else if (page + newDirection === -1) {
      setPage([reviews.length - 1, 0]);
      setActiveBullet(reviews.length - 1);
    }
  };
  
  return (
    <MBox
      bg="gray.50"
      mt={12}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box p={4} maxW="container.xl" mx="auto" style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}>
        <MHeading variants={animation} mb={8} id="courses" fontSize="5xl">Отзывы</MHeading>
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <motion.div
            style={{position: 'relative'}}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: 'spring',
                stiffness: 800,
                damping: 100,
                duration: 0.1,
              },
              opacity: { duration: 0.6 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < swipeConfidenceThreshold) {
                paginate(-1);
              } else if (swipe > -swipeConfidenceThreshold) {
                paginate(1);
              }
            }}
          >
            <motion.iframe
              key={reviews[page]}
              variants={animation}
              custom={page + 1}
              title={reviews[page]}
              src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpcgramota%2Fposts%2F${reviews[page]}&width=500&show_text=true&appId=1762180570691962&height=315`}
              width="500"
              height="100"
              className="facebook-iframe"
              style={{
                border: 'none',
                overflow: 'hidden',
                margin: 'auto',
              }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </motion.div>
        </AnimatePresence>
        <Flex
          position="relative"
          alignItems="center"
          justifyContent="center"
          mt="2"
          gap="4"
        >
          <MdArrowBack onClick={() => paginate(-1)} style={{cursor: 'pointer'}} />
          {reviews.map((item, index) => (
            <Box
              key={item}
              onClick={() => {
                setPage([index, 0]);
                setActiveBullet(index);
              }}
              bg={activeBullet === index ? 'black' : '#ccc'}
              style={{
                borderRadius: '50px',
                height: 12,
                width: 12,
                margin: 1,
                cursor: 'pointer',
              }}
            />
          ))}
          <MdArrowForward onClick={() => paginate(1)} style={{cursor: 'pointer'}} />
        </Flex>
      </Box>
    </MBox>

  );
}

export { Reviews };


const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity;
};
