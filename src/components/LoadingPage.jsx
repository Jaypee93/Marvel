import React from "react";
import marvel from "../assets/marvel.png"; 
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-image-container">
        <img className="loading-image" src={marvel} alt="Marvel Logo" />
      </div>
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
