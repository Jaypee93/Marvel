import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MarvelCard from "./MarvelCard";
import Search from "./Search";
import MarvelBigCard from "./MarvelBigCard";
import './HomePage.css';

const HomePage = ({data, toggleDarkMode, isDarkMode}) => {
    const [searchInput, setSearchInput] = useState('');
    const [randomCharacter, setRandomCharacter] = useState(null);

    const handleSearchChange = (input) => {
        setSearchInput(input);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const filteredData = data.filter(char => char.description !== "");
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            setRandomCharacter(filteredData[randomIndex]);
        }, 8000);

        const filteredData = data.filter(char => char.description !== "");
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        setRandomCharacter(filteredData[randomIndex]);

        return () => clearInterval(interval);
    }, [data]);

    return ( 
        <div className="homepage-container">
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            <div className="search-container">
                <Search handleSearchChange={handleSearchChange}/>
            </div>
            <div className="homepage-secondcontainer">
                <div className="cards">
                    <MarvelCard data = {data} searchInput={searchInput}/>
                </div>
                <div className="bigCard">
                    {randomCharacter && <MarvelBigCard data={randomCharacter} />}
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;
