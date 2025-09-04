import { useEffect, useState } from "react";
import "./Navbar.css";
import "./NavMQ.css";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Toggle mobile menu
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container Navbar">
      {/* Nav Left Part (Logo) */}
      <div className="navLeft">
        <div className="HomeLogo">
          <span className="E">E</span>asy <span className="E">T</span>our
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="menu-web">
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="NavControls">
          {!isAuthenticated ? (
            <button className="Navbtn">
              <Link to="/signup">Signup</Link>
            </button>
          ) : (
            <Logout />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`menu-mobile ${showMenu ? "open" : ""}`}>
        <ul>
          <li><Link to="/home" onClick={() => setShowMenu(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setShowMenu(false)}>About</Link></li>
          <li><Link to="/gallery" onClick={() => setShowMenu(false)}>Gallery</Link></li>
        </ul>
        <div className="NavControls">
          {!isAuthenticated ? (
            <button className="Navbtn">
              <Link to="/signup">Signup</Link>
            </button>
          ) : (
            <Logout />
          )}
        </div>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${showMenu ? "open" : ""}`}
        onClick={handleButtonToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
