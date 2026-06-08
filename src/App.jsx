import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

// Global Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingChat from './components/FloatingChat';
import BackToTop from './components/BackToTop';

// Multi-Page shells
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

import './App.css';

// Dynamic scroll reset tool executing on route pathname shift
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Also reset Lenis scroll position instantly if Lenis is active globally
    const lenisEvent = new CustomEvent('lenis-reset-scroll');
    window.dispatchEvent(lenisEvent);
  }, [pathname]);

  return null;
}


function App() {
  const [cursorText, setCursorText] = useState("");
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [isCursorDark, setIsCursorDark] = useState(false);

  // 1. Core scroll raw coordinates tracker for CSS variables
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

  // 2. Premium Lenis smooth scroll binds
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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

    // Event listener to reset Lenis scroll instantly upon route transition
    const handleResetScroll = () => {
      lenis.scrollTo(0, { immediate: true });
    };
    window.addEventListener('lenis-reset-scroll', handleResetScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('lenis-reset-scroll', handleResetScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Route scroll position orchestrator */}
      <ScrollToTop />

      {/* Global Navigation Glassmorphic Header */}
      <Header />

      {/* Primary Routing Shells */}
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              setCursorText={setCursorText} 
              setIsCursorActive={setIsCursorActive} 
              setIsCursorDark={setIsCursorDark} 
            />
          } 
        />
        <Route 
          path="/solutions" 
          element={
            <Solutions 
              setCursorText={setCursorText} 
              setIsCursorActive={setIsCursorActive} 
              setIsCursorDark={setIsCursorDark} 
            />
          } 
        />
        
        {/* Redirect deleted routes to Home to prevent 404 page breaks */}
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/services/:serviceId" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/projects/:id" element={<Navigate to="/" replace />} />
        <Route path="/insights" element={<Navigate to="/" replace />} />
        <Route path="/insights/:articleId" element={<Navigate to="/" replace />} />
        <Route 
          path="/contact" 
          element={
            <Contact 
              setCursorText={setCursorText} 
              setIsCursorActive={setIsCursorActive} 
              setIsCursorDark={setIsCursorDark} 
            />
          } 
        />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Rich Conversion Footer */}
      <Footer />

      {/* Interactive Coordinate Mouse Cursor Follower */}
      <CustomCursor 
        cursorText={cursorText} 
        isActive={isCursorActive} 
        isDark={isCursorDark} 
      />

      {/* Premium Glassmorphic Support Chat Concierge */}
      <FloatingChat />

      {/* Premium Floating Back-to-Top Navigation */}
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
