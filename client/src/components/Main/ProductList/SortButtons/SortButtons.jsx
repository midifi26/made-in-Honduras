import React from 'react';

const SortButtons = ({ order }) => {
  return (
    <nav>
      <button onClick={() => order('name')}>Ordenar por Nombre</button>
      <button onClick={() => order('price')}>Ordenar por Precio</button>
      <button onClick={() => order('relevance')}>Ordenar por Relevancia</button>
    </nav>
  );
};

export default SortButtons;

