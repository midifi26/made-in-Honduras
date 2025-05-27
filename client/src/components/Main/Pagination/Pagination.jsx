// Pagination.jsx
import React from 'react';

const Pagination = ({ page, setPage, hasMore }) => {
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span> {page} </span>
      <button onClick={() => setPage(page + 1)} disabled={!hasMore}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
