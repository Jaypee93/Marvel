import "./Navbar.css";
import Marvel from "../assets/Marvel.png";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div
      className={`Navbar-container ${isDarkMode ? "Dark Mode" : "Light Mode"}`}
    >
      <h2 className="navbar-text">Marvel Charachters</h2>
      <img className="marvel-logo" src={Marvel} alt="marvel" srcset="" />
      <div className="theme-container">
        <img src="" alt="" />
        <button className="navbar-button" onClick={toggleDarkMode}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
