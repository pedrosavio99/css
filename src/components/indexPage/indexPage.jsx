import styled from "styled-components";

export const Container = styled.div`
  height: 0px;
  display: flex;
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    > svg {
      display: none;
      color: black;
    }
  }
`;
