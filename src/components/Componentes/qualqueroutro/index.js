import React, { useState } from "react";
import Rate from "./Rate";
const SimpleStarRate = () => {
    const [rating, setRating] = useState(0);
    const [rating2, setRating2] = useState(0);
  return (
    <>
      <div
        style={{
          background: "black",
          color: "white",
        }}
      />
      <div className="row">
        <div className="col text-center">
          <p>Rating component</p>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
          <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
          <p>Rating - {rating2}</p>
        </div>
      </div>
    </>
  );
};

export default SimpleStarRate;
