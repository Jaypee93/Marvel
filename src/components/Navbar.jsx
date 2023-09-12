import './Navbar.css'
import Marvel from '../assets/Marvel.png'

const Navbar = () => {
    return ( 
        <div className="Navbar-container">
            <h2>Marvel Charachters</h2>
            <img className = 'marvel-logo' src={Marvel} alt="marvel" srcset="" />
            <div className="theme-container">
                <img src="" alt="" />
                <button className="navbar-button">Light Mode</button>
            </div>
        </div>
     );
}
 
export default Navbar;