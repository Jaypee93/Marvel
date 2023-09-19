import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "./CharacterContext";
import Navbar from "./Navbar";
import "./MarvelPage.css";

const MarvelPage = ({ data }) => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    console.log("data:", data);
    console.log("name:", name);
    const foundCharacter = data.find((char) => char.name === name);
    console.log(foundCharacter);
    setCharacter(foundCharacter);
  }, [data, name]);

  useEffect(() => {
    setIsLoading(false);
  }, [character]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="marvelpage-container">
      <Navbar />
      <div className="marvelpagecard-container">
      <img
        className="marvelpage-image"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <div className="marvelpage-text">
        <h1 className="marvelpage-name">{character?.name}</h1>
        <h1 className="marvelpage-description">{character?.description}</h1>
      </div>
      </div>
    </div>
  );
};

export default MarvelPage;
