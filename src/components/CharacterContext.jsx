import React, { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const findCharacterByName = (name) => {
    return characters.find((char) => char.name.common === name) || null;
  };

  return (
    <CharacterContext.Provider value={{ characters, findCharacterByName }}>
      {children}
    </CharacterContext.Provider>
  );
};
