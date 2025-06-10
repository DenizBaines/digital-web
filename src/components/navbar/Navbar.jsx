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
      
      // Close menu when scrolling
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navbar-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          BLUE SAGE
        </Link>
        <div className="menu" onClick={toggleMenu}>
          Menu
        </div>
      </div>

      {menuOpen && (
        <div className="dropdown">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          
          <Link to="/ourideology" onClick={closeMenu}>Our Ideology</Link>
          
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;