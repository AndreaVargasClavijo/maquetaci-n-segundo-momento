import React from 'react';
import '../index.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="titulo">Contacto</h1>
      <div className="form-container">
        <label htmlFor="fecha">Selecciona una fecha:</label>
        <input type="date" id="fecha" className="input-field" />

        <label htmlFor="contacto">Selecciona un contacto:</label>
        <select id="contacto" className="input-field">
          <option value="">--Seleccione un contacto--</option>
          <option value="contacto1">Contacto 1</option>
          <option value="contacto2">Contacto 2</option>
          <option value="contacto3">Contacto 3</option>
        </select>
      </div>
    </div>
  );
};

export default Contacto;
