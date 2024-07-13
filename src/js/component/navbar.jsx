import React from "react";
import "../../styles/navbar.css";

export const Navbar = () => {

  const handleContactClick = (e) => {
    // Previene el comportamiento por defecto del enlace
    e.preventDefault();
    // Cambia la ubicación del hash para navegar a la sección Contacto
    window.location.href = '/#Contacto';
  };

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
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="/Bocetos">Bocetos</a>
          </li>
         
          <li>
            <a href="#Contacto" onClick={handleContactClick}>Contactame</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
