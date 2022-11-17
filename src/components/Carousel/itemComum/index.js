import React from "react";
import {  useState, useRef } from "react";
import { Carouseldiv } from "./itemComum";
import { FaAngleDoubleLeft,FaAngleDoubleRight } from "react-icons/fa";
import sapato from "../../../img/sapato.jpg";

const ItemComum = () => {
  // const [data, setData] = useState([]);
  const carousel = useRef(null);

  const [items] = useState([1,2,3,4,5,6,7])

  // useEffect(() => {
  //   fetch("http://localhost:3000/static/shoes.json")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  // if (!data || !data.length) return null;

  return (
    <>
      <Carouseldiv>
        <div className="container">
          {/* <div className="logo">
            <img src="/static/images/super-shoes.png" alt="Super Shoes Logo" />
          </div> */}
          <div className="carousel" ref={carousel}>
            {items.map((items) => {
              // const { id, name, price, oldPrice, image } = item;
              // const { id, name, price, oldPrice, } = item;
              return (
                <div className="item" key={items}>
                  <div className="image">
                    <img src={sapato} alt={items} />
                  </div>
                  <div className="info">
                    <span className="name">{items}</span>
                    {/* <span className="oldPrice">U$ {items}</span> */}
                    <span className="price">U$ {items}</span>
                    <span className="price"> Fale com o vendedor</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}>
              <FaAngleDoubleLeft />
            </button>
            <button onClick={handleRightClick}>
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </Carouseldiv>
    </>
  );
};
export default ItemComum;
