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

  const toggleDarkmode = () => {};

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
          if (newResults.length === 0) break; // Inga fler resultat att hämta
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
    return data.find((char) => char.name.common === name) || null;
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
                toggleDarkMode={toggleDarkmode}
              />
            }
          />
          <Route
            path="/:name"
            element={
              <MarvelPage
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
