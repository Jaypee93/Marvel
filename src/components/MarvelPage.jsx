import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import MarvelPageCard from "./MarvelPageCard";
import "./MarvelPage.css";

const MarvelPage = ({ data, findCharachterByName, isDarkMode, toggleDarkMode }) => {
    const {name} = useParams();
    const navigate = useNavigate();

    const handleback = () => {
      navigate(-1);
    }



  return (
    <div className="marvelpage-container">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="button" onClick={handleback}>
        <button>Back</button>
      </div>
      <div className="marvelpagecard-container">
        <MarvelPageCard data={data} name={name} findCharachterByName={findCharachterByName}/>
      </div>
    </div>
  );
};

export default MarvelPage;
