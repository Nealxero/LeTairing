import React from "react";
import Card from "react-bootstrap/Card";
import "../../styles/card.css";

import { useState } from "react";

export const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openFullSizeImage = (imageUrl) => {
    window.open(imageUrl, "_blank"); // Open image in new tab
  };

  return (
    <div>
      <h1 className="text-center mt-5">LetTairing</h1>
      <div id="CardCont">
        <Card
          style={{
            width: "100%", // Adjust the width of the card

            margin: "0 auto",
            position: "relative",
            border: "5px solid brown",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "0px",
              transform: "translateY(-50%)",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "50px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <Card.Img
            variant="top"
            src={cards[currentIndex].image}
            style={{ height: "contain", objectFit: "contain" }} // Adjust the height of the image
            onClick={() => openFullSizeImage(cards[currentIndex].image)}
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              right: "0px",
              transform: "translateY(-50%)",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "50px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            {">"}
          </button>
        </Card>
      </div>
    </div>
  );
};
