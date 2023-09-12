import React from "react";
import Navbar from "./Navbar";
import MarvelCard from "./MarvelCard";
import './HomePage.css'

const HomePage = () => {
    return ( 
        <div className="homepage-container">
            <Navbar/>
            <div className="cards">
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
                <MarvelCard/>
            </div>
        </div>
     );
}
 
export default HomePage;