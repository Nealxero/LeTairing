import React from "react";

import "../../styles/inicio.css";
import { Carousel } from "./card";
import * as images from "./images";


export const Inicio = () => {
  const cards = [
    { title: "Card 1", content: "Content for Card 1", image: images.cafe },
    { title: "Card 2", content: "Content Card 2", image: images.desayuno },
    { title: "Card 3", content: "Content Card 3", image: images.cocktails },
    { title: "Card 4", content: "Content Card 4", image: images.magia },
    { title: "Card 5", content: "Content Card 5", image: images.sandwich },
    { title: "Card 6", content: "Content Card 6", image: images.dolly },
  ];

  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <Carousel cards={cards} />
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="stylish-text">
              Descubre el mundo del Lettering y atrae a las personas con diseños
              llamativos y personalizados, ideal para negocios abiertos de calle
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
