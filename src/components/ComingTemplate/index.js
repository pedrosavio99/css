import React from "react";
import Mylogo from "../MyLogo";
import RoadMapElement from "../RoadMap";
import { ComingTemp, ComingTempBackground } from "./Coming";

const ComingDiv = () => {
  return (
    <>
      <ComingTempBackground>
        <div>
          <h1>COMING SOON</h1>
          <hr style={{ margin: "auto", width: "40%", marginBottom: "20px" }} />

          <span> Dr. Pechincha  </span>
        </div>
        <ComingTemp>
          <RoadMapElement />
          <Mylogo />
        </ComingTemp>
      </ComingTempBackground>
    </>
  );
};
export default ComingDiv;
