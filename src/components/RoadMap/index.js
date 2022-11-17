import React from "react";
import { ButtonCustom, RoadMapDiv } from "./RoadMap";
import { Link } from "react-router-dom";

const RoadMapElement = () => {
  return (
    <>
      <RoadMapDiv>
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <p>Create Frontend</p>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <p>Create Backend</p>
            </div>
          </div>

          <div className="container right">
            <div className="content">
              <p>Integrate Fullstack</p>
            </div>
          </div>

          <div className="container left">
            <div className="content">
              <p>Create payment method</p>
            </div>
          </div>
        </div>

        {/* <ButtonCustom
          onClick={(e) => {
            e.preventDefault();
            window.open("http://google.com", "_blank");
          }}
        >
          Check yourself !
        </ButtonCustom> */}

        <Link to="/home">
          <ButtonCustom> Check yourself ! </ButtonCustom>
        </Link>
      </RoadMapDiv>
    </>
  );
};
export default RoadMapElement;
