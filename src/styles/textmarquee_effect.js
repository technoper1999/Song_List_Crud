import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

const MarqueeText = styled.span`
  display: inline-block;
  animation: ${marqueeAnimation} 10s linear infinite;
`;

const Marquee = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeText>{text}</MarqueeText>
    </MarqueeContainer>
  );
};

export default Marquee;