import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import IndexPage from "../components/indexPage";
import { Blackdiv } from "../components/utils/backgrounds";
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
        </PageStyle>
      </Blackdiv>
    </>
  );
};

export default MyfistAnimationPage;
