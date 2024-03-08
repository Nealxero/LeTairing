import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/card.css";

import { useState } from "react";

export const CarouselComponent = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullSizeImage = (imageUrl) => {
    window.open(imageUrl, "_blank"); // Open image in new tab
  };

  return (
    <div>
      <h1 className="text-center mt-5">LetTairing</h1>
      <div id="CarouselCont">
        <Carousel
          activeIndex={currentIndex}
          onSelect={(selectedIndex, e) => setCurrentIndex(selectedIndex)}
          interval={5000}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)", // slight blur effect
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {cards.map((card, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={card.image}
                alt={`Slide ${index}`}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  maxHeight: "500px",
                }}
                onClick={() => openFullSizeImage(card.image)}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
