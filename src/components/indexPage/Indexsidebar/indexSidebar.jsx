import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  position: fixed;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.1s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 10rem;
    }
  }

  @media screen and (max-height: 860px) {
    font-size: 0px;
    top: 0px;
    left: 0px;
    width: 300px;
  }

  @media screen and (max-width: 768px) {
    display: none;
    > svg {
      display: none;
      color: black;
    }
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  > svg {
    position: relative;
    color: white;
    width: 30px;
    height: 30px;
    left: 16rem;
    bottom: 0rem;
    cursor: pointer;
  }
  
  @media screen and (max-height: 860px) {
    margin-top: 5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
    > svg {
      display: none;
      color: black;
    }
  }
`;
