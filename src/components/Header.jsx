import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../components/header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo">
          <Link to="/">Do&Be</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/packages" className={location.pathname === '/packages' ? 'active' : ''}>Packages</Link>
          </li>
          <li>
            <Link to="/places" className={location.pathname === '/places' ? 'active' : ''}>What we offer</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
