import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import "./App.css";
import md5 from "md5";

function App() {
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkmode = () => {
  
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const public_key = import.meta.env.VITE_CLIENT_ID;
        const private_key = import.meta.env.VITE_CLIENT_SECRET;
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + private_key + public_key);
        const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters'
        const limit = 100;
        const url = `${baseUrl}?limit=${limit}&ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
        const response = await fetch(url);    
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage data={data} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkmode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
