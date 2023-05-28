/* eslint-disable react-hooks/rules-of-hooks */
import { Carousel } from "@trendyol-js/react-carousel";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import IndexPage from "../../components/indexPage";
import { Blackdiv } from "../../components/utils/backgrounds";

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

const Telacarrosel = () => {
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
          <div className=" left bg-slate-600 overflow-hidden z-0 px-20">
            <h1> carrosel </h1>

            <Carousel className="relative overflow-hidden z-0" show={5.5} slide={3} swiping={true}>
              <div className="overflow-hidden z-0 w-[150px] h-[150px] bg-lime-700">
                We love Web 🌐
              </div>
              <div className="w-[150px] h-[150px] bg-lime-700">
                We love Developers 👩🏻‍
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">This is our github</div>
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">https://trendyol.github.io/react-carousel/docs/swipible/</div>
              </div>
              <div className="w-[150px] h-[150px] bg-lime-700">
                We love Web 🌐
              </div>
              <div className="w-[150px] h-[150px] bg-lime-700">
                We love Developers 👩🏻‍
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">This is our github</div>
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">https://trendyol.github.io/react-carousel/docs/swipible/</div>
              </div>
              <div className="w-[150px] h-[150px] bg-lime-700">
                We love Web 🌐
              </div>
              <div className="w-[150px] h-[150px] bg-lime-700">
                We love Developers 👩🏻‍
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">This is our github</div>
              </div>
              <div
                className="w-[150px] h-[150px] bg-lime-700"
              >
                <div color="#d53f8c">https://trendyol.github.io/react-carousel/docs/swipible/</div>
              </div>
            </Carousel>
          </div>
        </PageStyle>
      </Blackdiv>
    </>
  );
};

export default Telacarrosel;
