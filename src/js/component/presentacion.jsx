import React from "react";
import cafe from "../../img/cafe.jpg";
import "../../styles/inicio.css";

export const Inicio = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={cafe} alt="Lettering" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="stylish-text">
              Descubre el mundo del Lettering y atrae a las personas con diseños
              llamativos y personalizados, ideal para negocios abiertos de calle
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
