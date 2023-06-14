import React from "react";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledAnimationBlinkingDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: relative;
  animation: ${blinkAnimation} 1s linear infinite;
`;

const BlinkingDot = () => {
  return <StyledAnimationBlinkingDot />;
};

export default BlinkingDot;
