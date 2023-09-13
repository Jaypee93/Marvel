import React from 'react';
import { useState, useEffect } from 'react';
import './MarvelCard.css'

const MarvelCard = ({data, searchInput}) => {
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        if (searchInput) {
            const filteredCharachters = data.filter((charachter) =>
            charachter.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredData(filteredCharachters);
        } else {
            setFilteredData(data)
        }
    },[data, searchInput])

    return ( 
        <div className="MarvelCard-container">
            {filteredData.map((marvel, index) => {
                const imageSrc = `${marvel.thumbnail.path}.${marvel.thumbnail.extension}`
                return (
                    <div className="one-card">
                        <img src={imageSrc} alt="" className="marvel-picture" />
                        <p>{marvel.name}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default MarvelCard;