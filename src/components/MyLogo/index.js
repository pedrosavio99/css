import React from "react";
import { MyLogodiv } from "./Mylogo";
import Myfoto from "../../img/foto.png";

const Mylogo = () => {
  return (
    <>
      <MyLogodiv
        onClick={(e) => {
          e.preventDefault();
          window.open("https://psvo.netlify.app", "_blank");
        }}
      >
        <img src={Myfoto} alt="myfoto" />
        <span> Hey, I'm Pedro </span>
      </MyLogodiv>
    </>
  );
};
export default Mylogo;
