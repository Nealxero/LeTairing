import React from "react";
import { Navbar } from "./navbar";
import { Contact } from "./contact";
import { Inicio } from "./presentacion";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import cafe from "../../img/cafe.jpg";
import desayuno from "../../img/desayuno.jpg";
import cocktails from "../../img/cocktails.jpg";
import magia from "../../img/magia.jpg";
import sandwich from "../../img/sandwichBar.jpg";
import dolly from "../../img/villaDolly.jpg";
import { Carousel } from "./card";
//create your first component

const Home = () => {
  const cards = [
    { title: "Card 1", content: "Content for Card 1", image: cafe },
    { title: "Card 2", content: "Content Card 2 ", image: desayuno },
    { title: "Card 2", content: "Content Card 2 ", image: cocktails },
    { title: "Card 2", content: "Content Card 2 ", image: magia },
    { title: "Card 2", content: "Content Card 2 ", image: sandwich },
    { title: "Card 2", content: "Content Card 2 ", image: dolly },
  ];

  return (
    <div className="text-center" id="mainBody">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Galeria" element={<Carousel cards={cards} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default Home;
