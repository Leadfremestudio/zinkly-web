import { useState, useEffect, useRef } from 'react';

const keralaTestimonials = [
  {
    quote: "Zinkly transformed our heritage backwater resort booking system into a high-performance custom platform. We saw a 180% increase in direct international bookings within the first month. Their clean code and attention to detail reflect true engineering excellence.",
    author: "Madhavan Kurup",
    designation: "Managing Director, Vembanad Whispers Luxury Resorts",
    location: "Kumarakom, Kerala"
  },
  {
    quote: "As a leading organic spice exporter from Wayanad, logistics accuracy is our lifeline. Zinkly automated our supply chain dispatch system and custom custom clearance documents. Their real-time WebSocket tracing and cloud infrastructure are rock-solid.",
    author: "Fathima Hameed",
    designation: "Founder & CEO, Malabar Spices Co-operative",
    location: "Kozhikode, Kerala"
  },
  {
    quote: "Building a fintech startup at Infopark Kochi requires highly secure and scalable systems. Zinkly delivered our customer transaction ledger on AWS with ISO-compliant database designs. They are the most reliable engineering partners in South India.",
    author: "Rohan Mathew",
    designation: "Co-Founder, PaysaPay Digital Solutions",
    location: "Kochi, Kerala"
  },
  {
    quote: "Zinkly engineered a premium e-commerce gateway for our traditional handloom and coir collections. Direct integrations with Shopify POS and automated inventory syncing saved our artisans hundreds of manual hours every single week.",
    author: "Devaki Amma",
    designation: "Chairperson, Kerala Weaver & Artisan Alliance",
    location: "Trivandrum, Kerala"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 7000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % keralaTestimonials.length);
    setTimeout(() => setIsAnimating(false), 500); // match transition speed
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + keralaTestimonials.length) % keralaTestimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const current = keralaTestimonials[currentIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-badge">CLIENT SUCCESS STORIES</span>
          <h2 className="testimonials-heading">What Malayalam Enterprises Say About Us</h2>
        </div>

        {/* Carousel Box */}
        <div 
          className="testimonial-carousel-box"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Quote Graphic Overlay */}
          <div className="quote-icon-bg">“</div>

          {/* Testimonial Content Wrap */}
          <div className="testimonial-content-wrapper">
            <div className="testimonial-quote-box">
              <p className="testimonial-quote">"{current.quote}"</p>
            </div>
            
            <div className="testimonial-meta">
              <h4 className="testimonial-author">{current.author}</h4>
              <p className="testimonial-designation">
                {current.designation} <span className="meta-separator">•</span> <strong className="meta-location">{current.location}</strong>
              </p>
            </div>
          </div>

          {/* Navigations - Elegant Glassmorphic Buttons inside the box */}
          <div className="testimonial-navigation">
            <button 
              className="nav-btn prev-btn" 
              onClick={handlePrev} 
              aria-label="Previous Testimonial"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            
            {/* Dots Indicator in center */}
            <div className="testimonial-dots">
              {keralaTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot-btn ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="nav-btn next-btn" 
              onClick={handleNext} 
              aria-label="Next Testimonial"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
