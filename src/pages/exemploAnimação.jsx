import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    background-color: red;
  }
  25% {
    transform: rotate(90deg);
    background-color: blue;
  }
  50% {
    transform: rotate(180deg);
    background-color: green;
  }
  75% {
    transform: rotate(270deg);
    background-color: yellow;
  }
  100% {
    transform: rotate(360deg);
    background-color: red;
  }
`;

export const StyledAnimation = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50%;
  position: relative;
  animation: ${spinAnimation} 4s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    animation: ${spinAnimation} 2s linear infinite;
  }
`;
const ComplexAnimationExample = () => {
  return <StyledAnimation />;
};

export default ComplexAnimationExample;
