import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="app-footer-global">
      {/* 1. Global Call-to-Action Segment */}
      <div className="footer-cta-container">
        <div className="footer-cta-glow"></div>
        <div className="footer-cta-card">
          <span className="cta-badge">LET'S COLLABORATE</span>
          <h2 className="cta-heading">
            Ready to Engineer <br />
            <span className="accent-green">the Future?</span>
          </h2>
          <p className="cta-sub">
            Partner with Zinkly to design and scale your next high-performance digital systems.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn primary" id="footer-cta-contact">
              Book a Strategy Session
            </Link>
            <Link to="/services" className="cta-btn secondary" id="footer-cta-services">
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Structured Directory Links */}
      <div className="footer-directory-grid">
        <div className="footer-info-col">
          <Link to="/" className="logo-container" aria-label="Zinkly Home">
            <div className="logo-main">
              <span className="logo-web">zink</span>
              <span className="logo-castle">ly</span>
            </div>
            <span className="logo-subtext">Think • Build • Connect</span>
          </Link>
          <p className="footer-bio">
            Premium software engineering and digital transformation consulting. Designing modular ecosystems that scale seamlessly.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links-list">
            <li><Link to="/services">Website Development</Link></li>
            <li><Link to="/services">Application Development</Link></li>
            <li><Link to="/services">Workflow Automation</Link></li>
            <li><Link to="/services">IT Consulting</Link></li>
            <li><Link to="/services">Custom Software</Link></li>
            <li><Link to="/services">Talent Programs</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Case Studies</Link></li>
            <li><Link to="/solutions">SLA & Solutions</Link></li>
            <li><Link to="/insights">Insights Blog</Link></li>
            <li><Link to="/contact">Project Planner</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links-list contact-info">
            <li>
              <span className="contact-label">HQ Office:</span>
              <span className="contact-val">242 Cyber Hub, Tower B, Bangalore, India</span>
            </li>
            <li>
              <span className="contact-label">Email:</span>
              <a href="mailto:hello@zinkly.com" className="contact-val email-link">hello@zinkly.com</a>
            </li>
            <li>
              <span className="contact-label">Helpline:</span>
              <span className="contact-val">+91 80 4920 1800</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Legal Baseline */}
      <div className="footer-legal-bar">
        <span className="legal-copy">© {new Date().getFullYear()} Zinkly Technologies Pvt. Ltd. All rights reserved.</span>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <span className="legal-divider">•</span>
          <a href="#terms">Terms & SLA Service Level Agreement</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
