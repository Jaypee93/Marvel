import React, { useState, useEffect } from "react";
import './MarvelBigCard.css'

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
        className="marvelbigcard-image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <div className="marvelbigcard-text">
        <h1 className="marvelbigcard-name">{character.name}</h1>
        <h1 className="marvelbigcard-description">{character.description}</h1>
      </div>
    </div>
  );
};

export default MarvelBigCard;
