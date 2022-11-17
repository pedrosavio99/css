import styled from "styled-components";

export const MyLogodiv = styled.div`
  background-color: #3a1569;
  border-radius: 4px;


  width: 200px;
  height: 45px;
  margin-top: 4%;

  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  gap: 10%;
  img{
    width: 45px;
    height: 45px;
  }
  span{
    font-size: 12px;
    color: #ffffff;
  }

  :hover{
    background-color: #7441b8;
    cursor: pointer;
  }
`;
