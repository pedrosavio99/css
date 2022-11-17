import styled from "styled-components";

export const Carouseldiv = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: #7206ee;
    color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    margin-left: 10rem;
    margin-right: 0rem;
  }
  .container .carousel {
    display: flex;
    overflow-x: hidden;
    height: 20rem;
    /* overflow-y: hidden; */
    scroll-behavior: smooth;
  }

  .container .carousel::-webkit-scrollbar {
    display: flex;
  }

  .container .carousel .item {
    background-color: transparent;
    margin: 2%;
    padding: 0px;
    width: 95%;
    height: 15rem;
    border-radius: 16px;
    flex: none;
  }

  .itemInfo{
    font-size: 1.5rem;
  }

  .container .carousel .item .image img {
    width: 100%;
    height: 15rem;
    border-radius: 16px;
    object-fit: cover;
    background-color: transparent;
  }

  .container .carousel .item .info {
    /* height: 140px; */
    flex-direction: column;
    justify-content: space-between;
  }



  .container .carousel .item .info .name {
    /* position: absolute; */
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: white;
  }

  .container .carousel .item .info .oldPrice {
    font-size: 0.8rem;
    text-decoration: line-through;
    flex-grow: 1;
    color: #e81a5d;
  }

  .container .carousel .item .info .price {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }

  .container .buttons {
    width: 100%;
    text-align: center;
    svg {
      color: white;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .container .buttons button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .container .buttons button:first-child img {
    transform: rotate(180deg);
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-left: 0rem;
      margin-right: 0rem;
    }
  }

  /* .destaque {
  } */
`;
