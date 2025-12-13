import React, { useState } from 'react';
import './Navbar.css';
import ChatZyrNews from '../screens/News';
import chatzylogo from '../assets/chatzyr2.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            {/* <h2 className="brand-text">ChatZyr</h2> */}
            <img src={chatzylogo} alt="ChatZyr Logo" className="logo" />
          </div>
          
          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-link">Home</a>
            {/* <a href="#waitlist" className="nav-link">Waitlist</a> */}
            <a href="/news" className="nav-link" component={ChatZyrNews}>News</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/#homecta_ID"
            // target="_blank"
            className="try-free-btn">Try for Free</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
