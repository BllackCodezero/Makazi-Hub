import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
import Listings from '../Listings/Listings.jsx';
const Navbar = () => {
  return (
    <header>
      <nav>
      <div className="logo" style={{ width: '150px', height: '50px' }}> 
          <img
            src="../../../assets/logo.png"
            alt="MkaziHub"
            style={{ width: '100%', height: 'auto' }} 
          />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Listing</Link></li>
          <li><Link to="/property">Property</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
        <div className="nav-buttons">
        <nav className="header-nav">
        </nav>
        <button><Link to="/login" className="nav-link">Sign in / Sign Up</Link></button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;