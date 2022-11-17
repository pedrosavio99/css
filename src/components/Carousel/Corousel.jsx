import styled from "styled-components";


export const Carouseldiv = styled.div`
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
