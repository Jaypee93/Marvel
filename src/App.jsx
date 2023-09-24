import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import md5 from "md5";
import MarvelPage from "./components/MarvelPage";
import LoadingPage from "./components/LoadingPage";
import { CharacterProvider } from "./components/CharacterContext";

function App() {
  const [data, setData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      //Har varit dark-mode, gör till light-mode
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#f2f2f2");
      document
        .querySelector(":root")
        .style.setProperty("--component-color", "black");
      document.querySelector(":root").style.setProperty("--text-color", "#ffffff");
    } else {
      // Har varit light-mode och ska bli dark-mode
      document
        .querySelector(":root")
        .style.setProperty("--background-color", "#000");
      document
        .querySelector(":root")
        .style.setProperty("--component-color", "grey");
      document.querySelector(":root").style.setProperty("--text-color", "#ffffff");
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const public_key = import.meta.env.VITE_CLIENT_ID;
        const private_key = import.meta.env.VITE_CLIENT_SECRET;
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + private_key + public_key);
        const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
        const limit = 100;
        let offset = 0;
        let allData = [];

        while (true) {
          const url = `${baseUrl}?limit=${limit}&offset=${offset}&ts=${timestamp}&apikey=${public_key}&hash=${hash}`;
          const response = await fetch(url);
          const jsonData = await response.json();
          const newResults = jsonData.data.results;
          if (newResults.length === 0) break; 
          allData.push(...newResults);
          offset += limit;
        }

        setData(allData);
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching data", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const findCharachterByName = (name, data) => {
    return data.find((char) => char.name === name) || null;
  };

  return (
    <CharacterProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  data={data}
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              }
            />
            <Route
              path="/:name"
              element={
                <MarvelPage
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  findCharachterByName={findCharachterByName}
                  data={data}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </CharacterProvider>
  );
}

export default App;
