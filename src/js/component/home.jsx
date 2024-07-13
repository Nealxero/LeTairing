import React from "react";
import { Navbar } from "./navbar";
import { Contact } from "./contact";
import { Inicio } from "./Hub";
import { Bocetos } from "./bocetos";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { Carousel } from "./card";
//create your first component

const Home = () => {
  
  return (
    <div className="text-center" id="mainBody">
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Contacto" element={<Contact />} />
          <Route path= "/Bocetos" element={<Bocetos/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default Home;
