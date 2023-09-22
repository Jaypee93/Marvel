import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MarvelCard.css";

const MarvelCard = ({ data, searchInput }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchInput) {
      const filteredCharacters = data.filter(
        (character) =>
          character.name.toLowerCase().includes(searchInput.toLowerCase()) &&
          character.thumbnail &&
          character.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );
      setFilteredData(filteredCharacters);
    } else {
      const charactersWithPictures = data.filter(
        (character) =>
          character.thumbnail &&
          character.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );
      setFilteredData(charactersWithPictures);
    }
  }, [data, searchInput]);

  return (
    <div className="MarvelCard-container">
      {filteredData.map((marvel, index) => {
        const imageSrc = `${marvel.thumbnail.path}.${marvel.thumbnail.extension}`;
        return (
          <Link to={`/${marvel.name}`} key={index}>
            <div className="one-card">
              <img src={imageSrc} alt="" className="marvel-picture" />
              <p className="marvel-name">{marvel.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MarvelCard;
