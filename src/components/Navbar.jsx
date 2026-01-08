import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Aliens</li>
        <li>Episodes</li>
        <li>Games</li>
        <li>About</li>
      </ul>

      
    </div>
  );
};

export default Navbar;
