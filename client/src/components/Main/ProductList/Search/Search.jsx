import React, { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  // Estado local para input
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.trim() !== "") {
        onSearch(inputValue);
        setInputValue("");
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, onSearch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;

