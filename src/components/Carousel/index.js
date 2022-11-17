import React from "react";
import { Carouseldiv } from "./Corousel";
import Destaques from "./Destaques";
import ItemComum from "./itemComum";

const CarouselComponent = () => {
  return (
    <>
      <Carouseldiv>
        <div className="left">
          <Destaques />
          <h1> Produtos 5 estrelas </h1>
          <ItemComum />
          <h1> Tudo por até R$ 100 </h1>
          <ItemComum />
          <h1> Promoções dos Parceiros </h1>
          <ItemComum />
          <h1> Produtos pechincháveis </h1>
          <ItemComum />
        </div>
      </Carouseldiv>
    </>
  );
};
export default CarouselComponent;
