import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [cursorText, setCursorText] = useState("");
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [isCursorDark, setIsCursorDark] = useState(false);

  // 1. Core scroll offset tracker for CSS scroll-linked calculations
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

  // 2. High-performance Lenis inertia smooth scroll on desktop viewports
  useEffect(() => {
    // Check user accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Bypass on touch screens to eliminate touch lag
    const isMobileOrTouch = window.innerWidth <= 1024 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isMobileOrTouch) return;

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

  return (
    <>
      {/* Immersive Glassmorphic Header Navbar */}
      <Header />

      {/* Main Premium Banner Carousel */}
      <Hero />

      {/* About Us Collage and Copy Section */}
      <About />

      {/* Reusable Services Grid */}
      <Services 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
        setIsCursorDark={setIsCursorDark} 
      />

      {/* Flagship Case Studies Bento Grid */}
      <CaseStudies 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
      />

      {/* Custom Follower Cursor Bubble */}
      <CustomCursor 
        cursorText={cursorText} 
        isActive={isCursorActive} 
        isDark={isCursorDark} 
      />

      {/* Floating Chat Support Widget */}
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
