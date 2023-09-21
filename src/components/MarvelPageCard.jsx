import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './MarvelPageCard.css'

const MarvelPageCard = ({ data, findCharachterByName }) => {
    const { name: characterName } = useParams();

    console.log("characterName:", characterName);

    const character = findCharachterByName(characterName, data);
    console.log(character)

    if (!character) {
      return <div>Loading...</div>;
    }

    console.log("character:", character);

    return (
      <div className="card-container">
        <img
          className="marvelpagecard-image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <div className="marvelpagecard-text">
          <h1 className="marvelpagecard-name">{character.name}</h1>
          <h1 className="marvelpagecard-description">{character.description}</h1>
        </div>
      </div>
    );
};

export default MarvelPageCard;
