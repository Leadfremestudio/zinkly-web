import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'motion/react';

// Global Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FloatingChat from './components/FloatingChat';
import BackToTop from './components/BackToTop';

// Multi-Page shells using lazy loading for bundle optimization
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Contact = lazy(() => import('./pages/Contact'));

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
  const location = useLocation();

  // 1. Core scroll raw coordinates tracker for CSS variables (optimized: only runs scroll listener when Hero is visible)
  useEffect(() => {
    let rafId;
    let isHeroVisible = false;
    let scrollListenerAdded = false;

    const handleScroll = () => {
      const hero = document.getElementById('carousel-hero');
      if (hero) {
        hero.style.setProperty('--scroll-y-raw', window.scrollY.toString());
      }
      rafId = null;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(handleScroll);
      }
    };

    const enableScrollListener = () => {
      if (!scrollListenerAdded) {
        window.addEventListener('scroll', onScroll, { passive: true });
        scrollListenerAdded = true;
        handleScroll();
      }
    };

    const disableScrollListener = () => {
      if (scrollListenerAdded) {
        window.removeEventListener('scroll', onScroll);
        scrollListenerAdded = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    // Use IntersectionObserver to toggle scroll listener based on visibility of the Hero
    const hero = document.getElementById('carousel-hero');
    let observer;
    if (hero && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible) {
            enableScrollListener();
          } else {
            disableScrollListener();
          }
        });
      }, { threshold: 0 });
      observer.observe(hero);
    } else {
      // Fallback: if no observer or element not found immediately, run listener as fallback
      enableScrollListener();
    }

    return () => {
      disableScrollListener();
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

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
    <>
      {/* Route scroll position orchestrator */}
      <ScrollToTop />

      {/* Global Navigation Glassmorphic Header */}
      <Header />

      {/* Primary Routing Shells */}
      <AnimatePresence mode="wait">
        <Suspense fallback={
          <div className="lazy-loading-spinner-container">
            <div className="lazy-loading-spinner"></div>
          </div>
        }>
          <Routes location={location} key={location.pathname}>
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
        </Suspense>
      </AnimatePresence>

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
    </>
  );
}

export default App;
