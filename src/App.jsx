import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import slide1 from './assets/slide1.png';
import slide2 from './assets/slide2.png';
import slide3 from './assets/slide3.png';
import aboutOfficeMain from './assets/about_office_main.png';
import aboutOfficeSub from './assets/about_office_sub.png';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorText, setCursorText] = useState("");
  const [isCursorActive, setIsCursorActive] = useState(false);
  const autoplayTimer = useRef(null);
  const cursorRef = useRef(null);

  const slides = [
    {
      id: 0,
      label: 'Partner',
      subtitle: 'Think • Build • Connect',
      title: (
        <>
          Trusted{' '}
          <span className="accent-word">
            <span className="accent-green-char">T</span>ransformation
          </span>
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
          <span className="accent-word">
            <span className="accent-green-char">D</span>igital
          </span>{' '}
          Solutions
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
          <span className="accent-word">
            <span className="accent-green-char">A</span>utomation
          </span>{' '}
          Hub
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

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y-raw', window.scrollY.toString());
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(handleScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const isMobileOrTouch = window.innerWidth <= 1024 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isMobileOrTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let rafId;
    const tick = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    // 1. Check user accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 2. Bypass on mobile & touch screens to eliminate touch-lag and keep native hardware-optimized inertia scroll
    const isMobileOrTouch = window.innerWidth <= 1024 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isMobileOrTouch) return;

    // 3. Initialize lightweight, extremely smooth Lenis scrolling on desktop
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
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
            {/* High Definition Ken Burns slide background with parallax container */}
            <div className="slide-bg-parallax">
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
            </div>
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

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="services-header">
          <div className="services-header-left">
            <span className="services-badge">What We Do</span>
            <h2 className="services-heading">Perfect Solution For Your Business</h2>
          </div>
          <div className="services-header-right">
            <a href="#services" className="view-all-btn">
              View All
            </a>
          </div>
        </div>

        <div className="services-grid">
          {/* Card 1: Website Development */}
          <div 
            className="service-card" 
            id="service-web"
            onMouseEnter={() => {
              setCursorText("Web");
              setIsCursorActive(true);
            }}
            onMouseLeave={() => {
              setIsCursorActive(false);
            }}
          >
            <div className="service-icon-wrapper">
              <div className="circle-icon pink-bg">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-3l-3-3 3-3 1.4 1.4-1.6 1.6 1.6 1.6L12 15zm4-3l-3 3-1.4-1.4 1.6-1.6-1.6-1.6L16 12z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Website Development</h3>
            <p className="service-card-desc">
              Zinkly is a top quality web development company aimed at creating a better brand impression and user-friendly interface for your website.
            </p>
            <div className="service-tech-logos">
              <div className="tech-item" title="WordPress">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.158 12.786l-2.698 7.84a9.755 9.755 0 01-4.762-2.124l4.242-11.666 3.218 5.95zm3.626.353l-2.029-5.918h.078c1.09 0 1.954-.878 1.954-1.953 0-.74-.467-1.363-1.13-1.637a9.742 9.742 0 015.35 4.316l-4.223 5.192zm-3.666-9.01a1.218 1.218 0 011.22 1.22c0 .546-.35 1.01-.842 1.17L10.373 11.23 7.822 4.13zm6.657 12.164a9.73 9.73 0 01-5.748 3.522l3.435-9.972 2.313 6.45zm3.031-4.218l.194-.582a9.771 9.771 0 01-1.077 7.781l.883-7.199zm-9.806 8.163a9.789 9.789 0 01-7.234-8.816l4.498 12.338a9.71 9.71 0 012.736-3.522zm-7.66-9.822a9.745 9.745 0 016.924-3.136l-4.143 11.385a9.728 9.728 0 01-2.781-8.25zM12 0a12 12 0 1012 12A12.013 12.013 0 0012 0z"/>
                </svg>
              </div>
              <div className="tech-item" title="Strapi">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M12 2L2 22h20L12 2zm0 3.99L18.01 18H5.99L12 5.99zM11 14h2v2h-2v-2zm0-5h2v3h-2V9z"/>
                </svg>
                <span style={{ fontSize: '11px', fontWeight: '700' }}>strapi</span>
              </div>
              <div className="tech-item" title="Layout Blocks">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M4 4h7v7H4zm9 0h7v7h-7zm0 9h7v7h-7zm-9 0h7v7H4z"/>
                </svg>
                <span style={{ fontSize: '11px', fontWeight: '700' }}>blocks</span>
              </div>
              <div className="tech-item" title="Node.js">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M12 2L2 7.77v11.54L12 22l10-4.69V7.77L12 2zm8 16.27l-8 3.75-8-3.75V8.93l8-3.75 8 3.75v9.34z"/>
                </svg>
                <span style={{ fontSize: '11px', fontWeight: '700' }}>node</span>
              </div>
            </div>
          </div>

          {/* Card 2: Application Development */}
          <div 
            className="service-card" 
            id="service-app"
            onMouseEnter={() => {
              setCursorText("App");
              setIsCursorActive(true);
            }}
            onMouseLeave={() => {
              setIsCursorActive(false);
            }}
          >
            <div className="service-icon-wrapper">
              <div className="circle-icon blue-bg">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zM16 8H8v2h8V8zm0 3H8v2h8v-2z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Application Development</h3>
            <p className="service-card-desc">
              We develop successful data-driven strategies to deal with the different mobile and enterprise application challenges.
            </p>
            <div className="service-tech-logos">
              <div className="tech-item" title="Shopify">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.8 6.4L17 2H7L5.2 6.4C4.5 7.1 4 8 4 9v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1-.5-1.9-1.2-2.6zM12 4c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2z"/>
                </svg>
              </div>
              <div className="tech-item" title="WooCommerce" style={{ gap: '2px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.05em' }}>Woo</span>
              </div>
              <div className="tech-item" title="CS-Cart">
                <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.02em' }}>cs cart</span>
              </div>
            </div>
          </div>

          {/* Card 3: Automation */}
          <div 
            className="service-card" 
            id="service-auto"
            onMouseEnter={() => {
              setCursorText("Auto");
              setIsCursorActive(true);
            }}
            onMouseLeave={() => {
              setIsCursorActive(false);
            }}
          >
            <div className="service-icon-wrapper">
              <div className="circle-icon green-bg">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </div>
            </div>
            <h3 className="service-card-title">Automation</h3>
            <p className="service-card-desc">
              Using the latest technology, our custom automation services deliver seamless efficiency and streamline your workflows.
            </p>
            <div className="service-tech-logos">
              <div className="tech-item" title="Android">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM12 2c-2.45 0-4.5 1.76-4.93 4h9.86c-.43-2.24-2.48-4-4.93-4zm7.25 4.25c-.39-.39-1.02-.39-1.41 0L16.2 7.9c.73.57 1.33 1.29 1.76 2.1l1.29-1.29c.39-.39.39-1.03 0-1.41zM6.22 7.9L4.58 6.25c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L4.8 9.3c.43-.81 1.03-1.53 1.76-2.1z"/>
                </svg>
                <span style={{ fontSize: '10px', fontWeight: '700' }}>android</span>
              </div>
              <div className="tech-item" title="iOS/Apple">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.5-.63.73-1.18 1.87-1.03 2.98 1.1.09 2.22-.55 2.96-1.42z"/>
                </svg>
              </div>
              <div className="tech-item" title="Flutter">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.015h-3.601zm3.599 7.185L12 13.072l3.602 3.601 5.998-6.002h-3.587v-.101zM12 13.072L8.398 16.67l3.602 3.601 8-8h-3.601l-4.399.801z"/>
                </svg>
                <span style={{ fontSize: '11px', fontWeight: '700' }}>flutter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cursor Follower Bubble */}
      <div 
        ref={cursorRef} 
        className={`custom-cursor-follower ${isCursorActive ? 'active' : ''}`}
      >
        <div className={`cursor-bubble ${isCursorActive ? 'active' : ''}`}>
          <span className="cursor-text">{cursorText}</span>
        </div>
      </div>
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
