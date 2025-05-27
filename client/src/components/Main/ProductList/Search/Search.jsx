import React, { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.trim() !== "") {
        onSearch(inputValue);
        setInputValue("");
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [inputValue, onSearch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    
    <div>
      <button onClick={() => onSearch(inputValue)}>
        Buscar      
      </button>
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

