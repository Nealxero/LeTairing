import React from "react";
import { Navbar } from "./navbar";
import { Contact } from "./contact";
import { Inicio } from "./presentacion";
import { InstructionsComponent } from "./instructions";
import { backgroundAni } from "./background";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { Carousel } from "./card";
//create your first component

const Home = () => {
  
  return (
    <div className="text-center" id="mainBody">
      <backgroundAni/>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Galeria" element={<InstructionsComponent/>}/>
        
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default Home;
