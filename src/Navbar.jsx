import React, { useState } from "react";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          TED<span>x</span> NITKSurathkal
        </h1>
        <p>≡ independently organized TED event</p>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#salon">Salon</a></li>
        <li><a href="#theme">Theme</a></li>
        <li><a href="#past-editions">Past Editions</a></li>
        <li><a href="#talk-archives">Talk Archives</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
