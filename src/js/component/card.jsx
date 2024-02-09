import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/card.css";
import cafe from "../../img/cafe.jpg";
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

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", position: "relative" }}>
      {/* Adjust the max width and margin */}
      <div style={{ position: "relative", display: "flex" }}>
        <button
          style={{
            alignSelf: "center",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "20px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <Card style={{ width: "100%" }}>
          {/* Set the width to 100% */}
          <Card.Img
            variant="top"
            src={cards[currentIndex].image}
            style={{ height: "contain", objectFit: "contain" }}
          />{" "}
          {/* Adjust the height */}
          <Card.Body>
            <Card.Title>{cards[currentIndex].title}</Card.Title>
            <Card.Text>{cards[currentIndex].content}</Card.Text>
          </Card.Body>
        </Card>
        <button
          style={{
            alignSelf: "center",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "20px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
