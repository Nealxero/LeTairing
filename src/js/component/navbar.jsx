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
        <img
          src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png"
          alt="My Awesome Website"
        />
      </a>

      <div className="menu">
        <ul></ul>
        <ul>
          <li>
            <a href="/">inicio</a>
          </li>
          <li>
            <a href="/Galeria">mi trabajo</a>
          </li>
          <li>
            <a href="/Contacto">contactame</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
