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

export const SeracheDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 12px;
    width: 20px;
  }
  .text {
    width: 12rem;
    height: 1.7rem;
    color: #1665aa;
    text-decoration: none;
    background-color: #ffffff;
    padding: 6px;
    font-size: 13px;
    border: none;
  }

  .seach {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.7rem;
    background-color: #ffffff;
    cursor: pointer;
    :hover {
        background-color: #c3ccc5;
    }
  }
`;
