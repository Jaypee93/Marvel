import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MarvelCard from "./MarvelCard";
import Search from "./Search";
import MarvelBigCard from "./MarvelBigCard";
import './HomePage.css';

const HomePage = ({data}) => {
    const [searchInput, setSearchInput] = useState('');
    const [randomCharacter, setRandomCharacter] = useState(null);

    const handleSearchChange = (input) => {
        setSearchInput(input);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a random index within the data array
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomCharacter(data[randomIndex]);
        }, 8000);

        // Set the initial random character
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCharacter(data[randomIndex]);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [data]);

    return ( 
        <div className="homepage-container">
            <Navbar/>
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
