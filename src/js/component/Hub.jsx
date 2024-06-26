import React from "react";

import "../../styles/inicio.css";
import { CarouselComponent } from "./card";
import * as images from "./images";
import { Contact } from "./contact";
export const Inicio = () => {
  const cards = [
    {title: "Card 1", content: "Content Card 1", image: images.magia },
    { title: "Card 2", content: "Content Card 2", image: images.desayuno },
    { title: "Card 3", content: "Content Card 3", image: images.cocktails },
    { title: "Card 4", content: "Content for Card 4", image: images.cafe },
    { title: "Card 5", content: "Content Card 5", image: images.sandwich },
    { title: "Card 6", content: "Content Card 6", image: images.dolly },
    { title: "Card 7", content : "Content Card 7", image: images.verano},
    { title: "Card 8", content : "Content Card 8", image: images.panama},
    { title: "Card 9", content : "Content Card 9", image: images.creer},
    { title: "Card 10", content : "Content Card 10", image: images.magia2}
  ];

  return (
    <div className="container">
      
        <div className="">
          {" "}
          {/* Adjusted column width */}
          <CarouselComponent cards={cards} />
          <Contact/>
        </div>
        
      
    </div>
  );
};
