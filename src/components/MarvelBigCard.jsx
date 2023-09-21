import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MarvelBigCard = ({ data, name }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    console.log("data:", data);
    console.log("name:", name);
    setCharacter(data);
  }, [data, name]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MarvelBigCard-container">
      <img
        className="marvelpage-image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <div className="marvelpage-text">
        <h1 className="marvelpage-name">{character.name}</h1>
        <h1 className="marvelpage-description">{character.description}</h1>
      </div>
    </div>
  );
};

export default MarvelBigCard;
