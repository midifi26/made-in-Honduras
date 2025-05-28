import React, { useState, useEffect } from "react";
import "./Search.css";
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
    
    <div id="search-container">
      
      <input
        type="text"
        placeholder="Buscar productos..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={() => onSearch(inputValue)}>
        Buscar      
      </button>
    </div>
  );
};

export default Search;

