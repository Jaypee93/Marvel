import ironman from '../assets/ironman.png'
import './MarvelCard.css'

const MarvelCard = ({data}) => {
    return ( 
        <div className="MarvelCard-container">
            {data.map((marvel, index) => {
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