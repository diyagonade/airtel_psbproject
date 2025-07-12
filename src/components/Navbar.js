import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img src="/Airtel.png" alt="Airtel" className="navbar-logo" />
            <span className="navbar-title">Airtel Intelligence</span>
          </div>
          <button className="navbar-login-btn">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;