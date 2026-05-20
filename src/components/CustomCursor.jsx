import { useEffect, useRef } from 'react';

function CustomCursor({ cursorText, isActive, isDark }) {
  const cursorRef = useRef(null);

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
      if (cursor) {
        cursor.style.opacity = '1';
      }
    };

    const onMouseOver = (e) => {
      const target = e.target.closest('button:not(.indicator-btn), .learn-more-btn, .view-all-btn, .view-all-projects-btn, .case-arrow-btn, .floating-btn');
      const navLink = e.target.closest('.nav-link, .indicator-btn');
      if (target) {
        cursor.classList.add('hovering-btn');
      } else if (navLink) {
        cursor.classList.add('hovering-nav');
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest('button:not(.indicator-btn), .learn-more-btn, .view-all-btn, .view-all-projects-btn, .case-arrow-btn, .floating-btn');
      const navLink = e.target.closest('.nav-link, .indicator-btn');
      if (target) {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget || !target.contains(relatedTarget)) {
          cursor.classList.remove('hovering-btn');
        }
      } else if (navLink) {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget || !navLink.contains(relatedTarget)) {
          cursor.classList.remove('hovering-nav');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

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
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor-follower ${isActive ? 'active' : ''} ${isDark ? 'dark-text' : ''}`}
    >
      <div className={`cursor-bubble ${isActive ? 'active' : ''}`}>
        <span className="cursor-text">{cursorText}</span>
      </div>
    </div>
  );
}

export default CustomCursor;
