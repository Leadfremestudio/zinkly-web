import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`app-header ${menuOpen ? 'menu-expanded' : ''}`}>
      <Link to="/" className="logo-container" aria-label="Zinkly Home" onClick={closeMenu}>
        <div className="logo-main">
          <span className="logo-web">zink</span>
          <span className="logo-castle">ly</span>
        </div>
        <span className="logo-subtext">Think • Build • Connect</span>
      </Link>

      <nav className={`nav-container ${menuOpen ? 'active' : ''}`} aria-label="Main Navigation">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/solutions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink to="/insights" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Insights
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link to="/contact" className="talk-button" id="lets-talk-btn" onClick={closeMenu}>
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
