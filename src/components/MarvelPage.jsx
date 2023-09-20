import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "./CharacterContext";
import Navbar from "./Navbar";
import MarvelBigCard from './MarvelBigCard'
import "./MarvelPage.css";

const MarvelPage = ({ data }) => {

  return (
    <div className="marvelpage-container">
      <Navbar />
      <div className="marvelpagecard-container">
        <MarvelBigCard data={data}/>
      </div>
    </div>
  );
};

export default MarvelPage;
