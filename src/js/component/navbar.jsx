import React from "react";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <a href="/" className="menu-logo">
        <p>Evelyn</p>
      </a>

      <div className="menu">
        <ul></ul>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
         
          <li>
            <a href="#Contacto">Contactame</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
