import React, { useState } from "react";
import "./Navbar.css"
import "./NavMQ.css"
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  // Toggle mobile menu
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container Navbar">
      {/* Navbar */}

      {/* Nav Left Part */}
      <div className="navLeft">
        <div className="HomeLogo"><span className="E">E</span>asy <span className="E">T</span>our</div>
      </div>

      {/* Nav Right Part */}
      <div className="navRight">
        <div className={showMenu ? "menu-mobile" : "menu-web"}>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>

          {/* Nav Login and Signup Buttons*/}
          <div className="NavControls">
            <button className="Navbtn" type="submit"><Link to="/signup">Signup</Link></button>
            <Logout/>
          </div>
        </div>

      </div>
      {/* Hamburger */}
      <div className="ham-menu">
        <button onClick={handleButtonToggle}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
