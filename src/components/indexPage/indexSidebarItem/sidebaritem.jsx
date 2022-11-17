import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a202c;
  font-size: 16px;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: black;
  }

  @media screen and (max-height: 860px) {
    font-size: 14px;
    width: 260px;
    height: 12px;
    color: white;
    padding: 8px;
    margin: 0 15px 10px;
    cursor: pointer;
    border-radius: 10px;
  }
`;
