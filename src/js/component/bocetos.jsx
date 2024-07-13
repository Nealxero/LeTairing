import React from "react";

import "../../styles/inicio.css";
import { CarouselComponent } from "./card";
import * as imagesB from "./imagesB";

export const Bocetos = () => {
  const cards = [
    {title: "Card 1", content: "Content Card 1", image: imagesB.boceto1 },
    { title: "Card 2", content: "Content Card 2", image: imagesB.boceto2 },
    { title: "Card 3", content: "Content Card 3", image: imagesB.boceto3 },
    { title: "Card 4", content: "Content Card 4", image: imagesB.boceto4 },
    { title: "Card 5", content: "Content Card 5", image: imagesB.boceto5 },
    { title: "Card 6", content: "Content Card 6", image: imagesB.boceto6 },
  
  ];

  return (
    <div className="container">
      
        <div className="">
          {" "}
          {/* Adjusted column width */}
          <CarouselComponent cards={cards} />
        
        </div>
        
      
    </div>
  );
};
