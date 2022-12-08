import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>Página no encontrada</h1>
    <p>Lo sentimos, la página que buscas no se ha encontrado.</p>
    <a>
      <Link to="/">Volver al inicio</Link>
    </a>
  </div>
);

export default NotFound;
