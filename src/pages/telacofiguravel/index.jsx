/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import IndexPage from "../components/indexPage";
// import { Blackdiv } from "../components/utils/backgrounds";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import IndexPage from "../../components/indexPage";
import { Blackdiv } from "../../components/utils/backgrounds";


const PageStyle = styled.div`
.botao{
    /* margin-left:11rem; */
    text-align: end;
    margin-right: 1%;

    .first_next {
    border-radius: 50px;
    background-color: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 1%;
    /* margin-left: 60%; */

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
    }

    @media screen and (max-width: 910px) {
      font-size: 12px;
      padding: 5px 19px;
    }
  }

}
 
  .left {
    margin-left: 10rem;
  }
  background-color: black;
  h1 {
    text-align: center;
  }
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 768px) {
    .left {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }
`;

const Telaconfig = () => {
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
          <div className="left bg-slate-600">
            <h1> configtela2  </h1>

          </div>

        </PageStyle>
      </Blackdiv>
    </>
  );
};

export default Telaconfig;
