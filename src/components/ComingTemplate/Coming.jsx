import styled from "styled-components";
import Bridge from "../../img/bridge.jpg";

export const ComingTemp = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 16px;
`;

export const ComingTempBackground = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  background-image: url(${Bridge});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    :hover {
      font-size: 14px;
    }
  }
`;
