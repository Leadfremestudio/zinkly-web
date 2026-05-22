import { useEffect } from 'react';

function useScrollReveal() {
  useEffect(() => {
    // Graceful fallback for legacy environments without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      const allRevealElements = document.querySelectorAll('.reveal');
      allRevealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observerOptions = {
      root: null, // use the browser viewport
      rootMargin: '0px 0px -8% 0px', // trigger slightly before entering the screen fully
      threshold: 0.05 // trigger when 5% of the element is visible
    };

    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          self.unobserve(entry.target); // Stop tracking once revealed to save CPU/RAM cycles
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useScrollReveal;
