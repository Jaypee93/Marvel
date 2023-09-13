import { useState} from "react";
import Navbar from "./Navbar";
import MarvelCard from "./MarvelCard";
import Search from "./Search";
import './HomePage.css'

const HomePage = ({data}) => {
    const [searchInput, setSearchInput] = useState('')

    const handleSearchChange = (input) => {
        setSearchInput(input);

    }

    return ( 
        <div className="homepage-container">
            <Navbar/>
            <div className="search-container">
                <Search handleSearchChange={handleSearchChange}/>
            </div>
            <div className="cards">
                <MarvelCard data = {data} searchInput={searchInput}/>
            </div>
        </div>
     );
}
 
export default HomePage;