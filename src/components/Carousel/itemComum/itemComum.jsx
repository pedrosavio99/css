import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;

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
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .container .carousel::-webkit-scrollbar {
    display: flex;
  }

  .container .carousel .item {
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
  }

  .container .carousel .item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: white;
  }

  .container .carousel .item .info {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .container .carousel .item .info span {
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
  }

  .container .carousel .item .info .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
    color: #00a8fb;
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
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
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
`;
