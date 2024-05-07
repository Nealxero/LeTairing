import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../../styles/card.css";
import { Modal, Button, Carousel } from "react-bootstrap";

export const CarouselComponent = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openFullSizeImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  return (
    <div>
      <div id="CarouselCont">
        <Carousel
          activeIndex={currentIndex}
          onSelect={(selectedIndex, e) => setCurrentIndex(selectedIndex)}
          interval={5000}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)", // slight blur effect
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          {cards.map((card, index) => (
            <Carousel.Item key={index} onClick={() => openFullSizeImage(card.image)}>
              <img
                className="d-block w-100"
                src={card.image}
                alt={`Slide ${index}`}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  maxHeight: "500px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered dialogClassName="custom-modal">
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Full size"
            style={{ width: "100%", height: "auto", maxHeight: "calc(100vh - 120px)" }}
          />
        </Modal.Body>
       
      </Modal>

      
    </div>
  );
};
