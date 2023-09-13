import React from "react";
import Navbar from "./Navbar";
import MarvelCard from "./MarvelCard";
import Search from "./Search";
import './HomePage.css'

const HomePage = ({data}) => {
    return ( 
        <div className="homepage-container">
            <Navbar/>
            <div className="search-container">
                <Search/>
            </div>
            <div className="cards">
                <MarvelCard data = {data}/>
            </div>
        </div>
     );
}
 
export default HomePage;