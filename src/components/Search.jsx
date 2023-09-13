import { React, useState } from "react";
import "./Search.css";

const Search = ({ handleSearchChange }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    handleSearchChange(input);
  };

  return (
    <div className="Search-container">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchInput}
        placeholder="Find your Charachter..."
      />
    </div>
  );
};

export default Search;
