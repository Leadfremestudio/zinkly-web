import { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlides, companyStats } from '../data';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayTimer = useRef(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Transition slide every 6 seconds
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    startAutoplay(); // Restart interval on manual user interaction
  };

  return (
    <main className="carousel-container" id="carousel-hero">
      {heroSlides.map((slide, idx) => (
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
              <h1 className="hero-title">{slide.title}</h1>
              {slide.description && <p className="hero-description">{slide.description}</p>}
            </div>

            {/* Glassmorphic Stats Grid */}
            <div className="stats-grid">
              {companyStats.map((stat, statIdx) => (
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
        {heroSlides.map((slide, idx) => (
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
  );
}

export default Hero;
