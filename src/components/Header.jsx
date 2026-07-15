import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import zinklyLogo from '../assets/zinkly-logo.webp';
import zinklyLogoBlack from '../assets/zinkly-logo-black.webp';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('menu-open-scroll-lock');
      document.body.classList.add('menu-open-scroll-lock');
    } else {
      document.documentElement.classList.remove('menu-open-scroll-lock');
      document.body.classList.remove('menu-open-scroll-lock');
    }
    return () => {
      document.documentElement.classList.remove('menu-open-scroll-lock');
      document.body.classList.remove('menu-open-scroll-lock');
    };
  }, [menuOpen]);

  const isLightTheme = location.pathname.toLowerCase() === '/solutions' ||
                       location.pathname.toLowerCase() === '/contact';

  return (
    <header className={`app-header ${menuOpen ? 'menu-expanded' : ''}`}>
      <Link to="/" className="logo-container" aria-label="Zinkly Home" onClick={closeMenu}>
        <img src={isLightTheme ? zinklyLogoBlack : zinklyLogo} alt="Zinkly Logo" className="logo-img" />
      </Link>

      <nav 
        className={`nav-container ${menuOpen ? 'active' : ''}`} 
        aria-label="Main Navigation"
        data-lenis-prevent
      >
        <ul className="nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
          <li className="mobile-only-action">
            <Link to="/solutions" className="talk-button mobile-talk-button" onClick={closeMenu}>
              Let's Talk
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/solutions" className="talk-button" id="lets-talk-btn" onClick={closeMenu}>
          Let's Talk
        </Link>
        <button
          type="button"
          className={`menu-burger ${menuOpen ? 'open-state' : ''}`}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={toggleMenu}
          id="drawer-toggle"
        >
          <span className="burger-line"></span>
          <span className="burger-line short"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
