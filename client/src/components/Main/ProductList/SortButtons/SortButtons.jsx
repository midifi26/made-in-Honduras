import React from 'react';
import './SortButtons.css';

const SortButtons = ({ order }) => {
  return (
    <nav>
      <button className ="sortButtons" onClick={() => order('name')}>Ordenar por Nombre</button>
      <button className ="sortButtons" onClick={() => order('price')}>Ordenar por Precio</button>
      <button className ="sortButtons" onClick={() => order('relevance')}>Ordenar por Relevancia</button>
    </nav>
  );
};

export default SortButtons;

