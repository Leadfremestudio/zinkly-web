import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="zinkly-premium-footer">
      <div className="footer-max-container">
        
        {/* Top Header Row: Logo & Social Media */}
        <div className="footer-top-row">
          <Link to="/" className="footer-logo-link">
            <span className="logo-text-zinkly">zinkly</span>
          </Link>
          
          <div className="footer-social-section">
            <span className="social-label-text">Social Media</span>
            <div className="social-icons-wrapper">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-pill-icon" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-horizontal-divider" />

        {/* Middle Directory Content Grid */}
        <div className="footer-directory-grid-premium">
          {/* Column 1: Bio message or quote (Telegram block removed) */}
          <div className="footer-left-col-premium">
            <p className="footer-mission-statement">
              Designing dreams and scaling software systems with frictionless, low-latency, modular ecosystems built to grow.
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-links-col-premium">
            <h4 className="footer-col-title-premium">Quick Links</h4>
            <ul className="footer-links-list-premium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
            </ul>
          </div>

          {/* Column 4: Help */}
          <div className="footer-links-col-premium">
            <h4 className="footer-col-title-premium">Help</h4>
            <ul className="footer-links-list-premium">
              <li><a href="mailto:hello@zinkly.com">Email Support</a></li>
            </ul>
          </div>
        </div>

        {/* Giant Faded Brand Name Background Graphic */}
        <div className="footer-giant-watermark-container">
          <span className="footer-giant-watermark-text">zinkly</span>
        </div>

        {/* Bottom copyright segment */}
        <div className="footer-bottom-bar-premium">
          <span className="footer-copyright-text">
            ©2026 Zinkly. All rights reserved.
          </span>
          <div className="footer-legal-links-premium">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
