import { useState, useEffect, useRef } from 'react';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import aboutOfficeMain from './assets/about_office_main.png';
import aboutOfficeSub from './assets/about_office_sub.png';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayTimer = useRef(null);

  const slides = [
    {
      id: 0,
      label: 'Partner',
      subtitle: 'Think • Build • Connect',
      title: (
        <>
          Trusted{' '}
          <span className="title-accent-wrapper">
            <span className="accent-green-dot"></span>
            <span className="accent-green-symbol">T</span>
            r
          </span>
          ansformation
          <br />
          Partner
        </>
      ),
      description: 'Design Your Dreams And Build Success, Transform Your Digital Presence With Our Innovative And Ingenious Solutions.',
      bg: slide1
    },
    {
      id: 1,
      label: 'Solutions',
      subtitle: 'Innovation • Performance • Speed',
      title: (
        <>
          Cutting-Edge
          <br />
          <span className="title-accent-wrapper">
            <span className="accent-green-dot"></span>
            <span className="accent-green-symbol">D</span>
            i
          </span>
          gital Solutions
        </>
      ),
      description: 'Empowering your business with high-performance architectures, premium tailored web portals, and frictionless user experiences.',
      bg: slide2
    },
    {
      id: 2,
      label: 'Systems',
      subtitle: 'Secure • Robust • Scalable',
      title: (
        <>
          Cloud-Native
          <br />
          <span className="title-accent-wrapper">
            <span className="accent-green-dot"></span>
            <span className="accent-green-symbol">A</span>
            u
          </span>
          tomation Hub
        </>
      ),
      description: 'Scale seamlessly with secure infrastructures, fast-loading cloud assets, and high-conversion landing pages built for growth.',
      bg: slide3
    }
  ];

  const stats = [
    { num: '16', label: 'Years of Expertise' },
    { num: '800', label: 'Clients Globally' },
    { num: '150', label: 'Dedicated Zinklers' },
    { num: '1000', label: 'Completed Projects' }
  ];

  // Reset autoplay timer whenever the active slide changes
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Transition slide every 6 seconds
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    startAutoplay(); // Restart interval on manual user interaction
  };

  return (
    <>
      {/* Immersive Glassmorphic Header Navbar */}
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

      {/* Main Premium Banner Carousel */}
      <main className="carousel-container" id="carousel-hero">
        {slides.map((slide, idx) => (
          <section
            key={slide.id}
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            {/* High Definition Ken Burns slide background */}
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            {/* Glowing neon overlays */}
            <div className="slide-overlay" />

            {/* Slide Content */}
            <div className="carousel-content">
              <div className="slide-content-wrapper">
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>
              </div>

              {/* Glassmorphic Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx} className="stat-card">
                    <div className="stat-num">
                      {stat.num}
                      <span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Carousel Navigation Indicators */}
        <div className="carousel-indicators" role="tablist" aria-label="Slides controls">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Slide ${idx + 1}: ${slide.label}`}
              className={`indicator-btn ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(idx)}
            >
              <span className="indicator-label">0{idx + 1} // {slide.label}</span>
              <span className="indicator-line" />
            </button>
          ))}
        </div>
      </main>

      {/* About Us Section */}
      <section id="about" className="about-section">
        {/* Glow backdrop */}
        <div className="about-bg-glow"></div>

        {/* Left Column: Overlapping Rounded Images */}
        <div className="about-image-column">
          <div className="about-collage">
            <div className="collage-image-wrapper main">
              <img src={aboutOfficeMain} alt="Zinkly Workspace - Think Build Connect" className="collage-image" />
            </div>
            <div className="collage-image-wrapper sub">
              <img src={aboutOfficeSub} alt="Zinkly Collaborative Lounge Cabin" className="collage-image" />
            </div>
          </div>
        </div>

        {/* Right Column: Reference Headline, Copy, and Pill Button */}
        <div className="about-content">
          <span className="about-badge">ABOUT US</span>
          <h2 className="about-heading">
            Empowering Businesses <br />
            Grow Worldwide with <br />
            <span className="accent-green">Innovative Digital Solutions</span>
          </h2>
          <p className="about-description">
            Zinkly is committed to connecting businesses across the world towards digitalisation highlighting the knowledge of skills. We, the ideal digital agency, provide bespoke solutions to meet all your digital needs. Zinkly aims to expand, innovate, or enhance businesses and propel your projects to new heights. Zinkly holds the power for better experiences.
          </p>
          <a href="#learn-more" className="learn-more-btn" id="about-learn-more">
            Learn More
          </a>
        </div>
      </section>

      {/* Floating Action Badge - WhatsApp (Bottom Left) */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Contact us on WhatsApp"
        id="whatsapp-widget"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.023 14.067.99 11.457.99 6.021.99 1.597 5.36 1.593 10.79c-.001 1.745.486 3.447 1.411 4.951L2.04 21.084l5.607-1.468-.999-.472-.001-.008z" />
          <path d="M17.486 14.4c-.3-.149-1.776-.874-2.05-.974-.275-.099-.475-.149-.675.15-.2.299-.775.974-.95 1.173-.175.199-.35.224-.65.075-.3-.15-1.267-.467-2.413-1.487-.893-.794-1.496-1.77-1.671-2.07-.175-.299-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.675-1.623-.925-2.224-.244-.587-.493-.508-.675-.518-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.497 0 1.471 1.075 2.893 1.225 3.093.15.199 2.115 3.227 5.125 4.525.715.309 1.275.493 1.713.632.719.228 1.375.196 1.893.118.577-.087 1.777-.724 2.025-1.396.248-.672.248-1.246.173-1.396-.074-.15-.274-.249-.574-.397z" />
        </svg>
      </a>

      {/* Floating Action Badge - Instant Chat (Bottom Right) */}
      <button
        type="button"
        className="floating-btn floating-chat"
        aria-label="Open support chat"
        id="chat-widget"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </button>
    </>
  );
}

export default App;
