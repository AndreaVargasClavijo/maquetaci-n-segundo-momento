
import React from 'react';
import '../index.css';

const Productos = () => {
  const imageSrc = 'https://static.vecteezy.com/system/resources/previews/011/136/821/non_2x/emoji-face-happy-free-vector.jpg'; // URL de la imagen de ejemplo

  return (
    <div className="productos-container">
      <h1 className="titulo">Productos</h1>
      <div className="gallery">
        {Array.from({ length: 10 }, (_, index) => (
          <img key={index} src={imageSrc} alt={`Producto ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Productos;

  