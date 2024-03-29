import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IndexPage from "../components/indexPage";
import { Blackdiv } from "../components/utils/backgrounds";
import { StyledContainer, StyledDot } from "./animations/hoover";
import { StyledAnimationBlinkingDot } from "./animations/hoverBolAnimation";
import { StyledAnimation } from "./exemploAnimação";
import { PageStyle } from "./index";

const MyfistAnimationPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Blackdiv>
        <IndexPage />
        <PageStyle>
          <div className="left flex items-center justify-center">
            <h1>First Animation</h1>
            <StyledAnimation />
          </div>
          <div className="left flex items-center justify-center mt-6">
            <h1>second Animation</h1>
            <StyledAnimationBlinkingDot />
          </div>
          <div className="left flex items-center justify-center mt-6">
            <h1>third Animation</h1>
            <StyledContainer>
      <StyledDot />
      <StyledDot />
      <StyledDot />
      <StyledDot />
    </StyledContainer>
          </div>
        </PageStyle>
      </Blackdiv>
    </>
  );
};

export default MyfistAnimationPage;
