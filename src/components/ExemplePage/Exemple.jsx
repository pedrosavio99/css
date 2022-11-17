import styled from "styled-components";

export const ExempleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% 5% 5% 5%;

  body {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    background-color: #000000;
  }

  .item {
    width: auto;
    height: auto;
  }

  .heading_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #ffffff;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
  }


  .veg_section .box {
    margin-top: 45px;
    text-align: center;
  }

  .veg_section .box .img-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 275px;
    padding: 25px;
    background-color: #252525;
    padding: 25px;
    border-radius: 5px;
  }

  .veg_section .box .img-box img {
    max-width: 175px;
    max-height: 175px;
  }

  .veg_section .box .detail-box {
    margin-top: 15px;
    color: #ffffff;
  }

  .veg_section .box .detail-box a {
    font-size: 18px;
    color: #ffffff;
  }

  .veg_section .box .detail-box .price_heading {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .veg_section .box .detail-box .price_heading span {
    color: #b6eb7a;
  }


`;
