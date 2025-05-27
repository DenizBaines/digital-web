import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <div className="logo">WHITE</div>
        <div className="menu" onClick={toggleMenu}>
          Menu
        </div>
      </div>

      {menuOpen && (
        <div className="dropdown">
         
        
         <Link to="/">Home</Link>
         <Link to="/about">About Us</Link>
         <Link to="/services">Services</Link>
         <Link to="/clients">Clients & Projects</Link>
         <Link to="/luxury">Luxury Study</Link>
         <Link to="/contact">Contact</Link>



        </div>
      )}
    </nav>
  );
};

export default Navbar;
