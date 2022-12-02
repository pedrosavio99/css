import React, { useState } from "react";
import styled from "styled-components";
import IndexPage from "../components/indexPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Blackdiv } from "../components/utils/backgrounds";
import { CodeCopyDiv } from "../components/CodeCopyElement/CodeCopy";
import { NavLink } from "react-router-dom";

const BaucingDiv = styled.div`
  justify-content: center;
  text-align: center;
  height: 30%;
  width: 30%;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 20%;

  @media screen and (max-width: 768px) {
    left: -20vh;
  }
  @keyframes bounce {
    10% {
      height: 50px;
      width: 50px;
    }
    30% {
      height: 50px;
      width: 40px;
    }
    50% {
      height: 30px;
      width: 57px;
      transform: translateY(240px);
    }
  }

  .ball {
    background-color: #ff1a66;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: relative;
    top: 100px;
    left: 220px;
    animation: bounce 0.9s infinite;
  }
`;

const PageStyle = styled.div`
  .botao {
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

const OdontologiaPage = () => {
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
          <div className="left">
            <h1> Bouncing Ball Animation </h1>
            {/* <ItemComum /> */}
          </div>
          <div className="botao">
            <NavLink to="/home">
              <button class="first_next">Voltar!</button>
            </NavLink>
          </div>

          <BaucingDiv>
            <div className="ball"></div>
          </BaucingDiv>
          <CodeCopyDiv>
            <div className="left">
              <h1> Base page CSS </h1>
              <div class="text-boxes">
                <div class="text-box JSBox">
                  <div class="topic">JavaScript Code:</div>
                  <xmp style={{ color: "red" }}>
                    {" "}
                    <div className="ball"></div>
                  </xmp>

                  <textarea id="JSBox" readonly>
                    preciso aprender a coloar o codigo aqui 
                  </textarea>
                  <button id="JSButton">Copy Codes</button>
                </div>
              </div>
              <div class="text-boxes">
                <div class="text-box JSBox">
                  <div class="topic">JavaScript Code:</div>
                  <textarea id="JSBox" readonly>
                    Add JavaScript Code here
                  </textarea>
                  <button id="JSButton">Copy Codes</button>
                </div>
              </div>
              <div class="text-boxes">
                <div class="text-box JSBox">
                  <div class="topic">JavaScript Code:</div>
                  <textarea id="JSBox">Add JavaScript Code here</textarea>
                  <button id="JSButton">Copy Codes</button>
                </div>
              </div>
            </div>
          </CodeCopyDiv>
        </PageStyle>
      </Blackdiv>
    </>
  );
};

export default OdontologiaPage;
