import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className={`menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className='logoContainer'><h2>WebDevWeather</h2></div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="navigationElement"><a href="/Home">Home</a></li>
        <li className="navigationElement"><a href="/Favourites">Favourites</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
