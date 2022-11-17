import styled from "styled-components";

export const Footerdiv = styled.div`
  footer {
    /* position: absolute; */
    bottom: 0;
    left: 300px;
    right: 300px;
    /* width: 300px; */
    background: black;
    height: auto;
    /* width: 100vw; */
    z-index: 150;
    padding-top: 40px;
    color: #fff;
  }
  .footer-content {
    /* display: flex; */
    /* align-items: center;
    justify-content: center; */
    flex-direction: column;
    text-align: center;
    a{
      color: #0baf70;
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .footer-content h3 {
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }
  .footer-content p {
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
  }
  .socials {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
  }
  .socials li {
    margin: 0 10px;
  }
  .socials a {
    text-decoration: none;
    color: #fff;
    border: 1.1px solid white;
    padding: 5px;

    border-radius: 50%;
  }
  .socials a i {
    font-size: 1.1rem;
    /* width: 20px; */

    transition: color 0.4s ease;
  }
  .socials a:hover i {
    color: #0baf70;
  }

  .footer-bottom {
    background: #000;
    /* width: 100%; */
    padding: 3rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .footer-bottom p {
    float: right;
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .footer-bottom p a {
    color: #0baf70;
    font-size: 16px;
    text-decoration: none;
  }
  .footer-bottom span {
    text-transform: uppercase;
    opacity: 0.4;
    font-weight: 200;
  }

  @media (max-width: 500px) {
    .footer-menu ul {
      display: flex;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    /* display: none;
    > svg {
      display: none;
      color: black;
    } */
  }
`;
