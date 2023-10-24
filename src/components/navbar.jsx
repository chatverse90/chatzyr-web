import React, { useState } from 'react';
import logo from './weblogo.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo1" />
          <a className="menu-link2" href="/">Chatzyr</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="menu-item">
            <a className="menu-link" href="/">Home</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/">Shop</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/report">Report</a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/suggestion">Suggest</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
