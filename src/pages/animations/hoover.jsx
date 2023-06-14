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

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

export const StyledDot = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  position: relative;
  animation: ${blinkAnimation} 1s linear infinite;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: purple;
  }
`;

const BlinkingDotsMatrix = () => {
  return (
    <StyledContainer>
      <StyledDot />
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledContainer>
  );
};

export default BlinkingDotsMatrix;
