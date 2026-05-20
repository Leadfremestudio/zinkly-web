

function Header() {
  return (
    <header className="app-header">
      <a href="/" className="logo-container" aria-label="Zinkly Home">
        <div className="logo-main">
          <span className="logo-web">zink</span>
          <span className="logo-castle">ly</span>
        </div>
        <span className="logo-subtext">Think • Build • Connect</span>
      </a>

      <nav className="nav-container" aria-label="Main Navigation">
        <ul className="nav-list">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#solutions" className="nav-link">Solutions</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <button type="button" className="talk-button" id="lets-talk-btn">
          Let's Talk
        </button>
        <button type="button" className="menu-burger" aria-label="Open Menu" id="drawer-toggle">
          <span className="burger-line"></span>
          <span className="burger-line short"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
