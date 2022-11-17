import styled from "styled-components";

export const CodeCopyDiv = styled.div`
  .left {
    margin-left: 10rem;
  }
  background-color: black;
  h1 {
    text-align: center;
  }
  color: white;
  height: 100%;
  width: 100%;

  .text-boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 8rem;
  }
  .text-boxes .text-box {
    display: flex;
    flex-direction: column;
    height: 350px;
  }
  .text-boxes .text-box .topic {
    font-size: 18px;
    font-weight: 600;
    color: #fdfdfd;
    margin: 4px;
  }
  .text-boxes .text-box textarea {
    height: 50%;
    width: 60vw !important;

    border: 1px solid #2e2c2c;
    border-radius: 8px;
    background: #9095aa;
  }
  .text-box textarea::-webkit-scrollbar {
    display: none;
  }
  .text-boxes .text-box button {
    height: 45px;
    width: 155px;
    color: #fff;
    background: #444549;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 400;
    margin: 8px 0;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .text-boxes .text-box button:hover {
    background: #3a4153;
  }

  @media screen and (max-width: 768px) {
    .left {
      margin-left: 0rem;
      margin-right: 0rem;
    }
    .text-boxes {
      margin-left: 0rem;
      margin-right: 0rem;
      margin-left: 4vw;
    }
    .text-boxes .text-box textarea {
      height: 50%;
      width: 90vw !important ;
    }
  }
`;
