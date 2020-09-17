import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Star = ({ scale, xPos, yPos, delay }) => (
  // eslint-disable-next-line react/self-closing-comp
  <StyledStar
    initial={{ scale, x: xPos, y: yPos, opacity: 1 }}
    animate={{ opacity: [1, 0.6, 1, 0.6] }}
    transition={{ duration: 3, delay, repeat: Infinity }}
  ></StyledStar>
);

const StyledStar = styled(motion.div)`
  position: absolute;
  top: 0;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background: white;
`;

export default Star;
