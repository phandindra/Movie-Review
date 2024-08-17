
import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'; 

const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-link btn"  >Movie List</Link>
       
        <div className="navbar-buttons">
          <Link to="/login" className="navbar-button btn">Login</Link>
          <Link to="/register" className="navbar-button btn">Register</Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
