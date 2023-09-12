import ironman from '../assets/ironman.png'
import './MarvelCard.css'

const MarvelCard = () => {
    return ( 
        <div className="MarvelCard-container">
            <div className="card">
                <img src={ironman} alt="" />
                <p>Iron man</p>
                <p>Iron man</p>
                <p>Iron man</p>
            </div>
        </div>
     );
}
 
export default MarvelCard;