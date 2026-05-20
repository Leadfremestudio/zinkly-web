import { Link } from 'react-router-dom';
import { servicesData } from '../data';

// Helper to render main service icons based on ID
const ServiceIcon = ({ id }) => {
  switch (id) {
    case 'service-web':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-8-3l-3-3 3-3 1.4 1.4-1.6 1.6 1.6 1.6L12 15zm4-3l-3 3-1.4-1.4 1.6-1.6-1.6-1.6L16 12z"/>
        </svg>
      );
    case 'service-app':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zM16 8H8v2h8V8zm0 3H8v2h8v-2z"/>
        </svg>
      );
    case 'service-auto':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      );
    case 'service-consult':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
        </svg>
      );
    case 'service-marketing':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M18 4v1h-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5v2H7v2h10v-2h-2v-2h1c.55 0 1-.45 1-1v-1h1c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm-5 14H11v-2h2v2zm6-6c0 .55-.45 1-1 1h-1V8h1c.55 0 1 .45 1 1v3zM7 9h8v6H7V9z"/>
        </svg>
      );
    case 'service-seo':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
        </svg>
      );
    default:
      return null;
  }
};

// Helper to render technical badge icons based on type
const TechIcon = ({ type }) => {
  switch (type) {
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12.158 12.786l-2.698 7.84a9.755 9.755 0 01-4.762-2.124l4.242-11.666 3.218 5.95zm3.626.353l-2.029-5.918h.078c1.09 0 1.954-.878 1.954-1.953 0-.74-.467-1.363-1.13-1.637a9.742 9.742 0 015.35 4.316l-4.223 5.192zm-3.666-9.01a1.218 1.218 0 011.22 1.22c0 .546-.35 1.01-.842 1.17L10.373 11.23 7.822 4.13zm6.657 12.164a9.73 9.73 0 01-5.748 3.522l3.435-9.972 2.313 6.45zm3.031-4.218l.194-.582a9.771 9.771 0 01-1.077 7.781l.883-7.199zm-9.806 8.163a9.789 9.789 0 01-7.234-8.816l4.498 12.338a9.71 9.71 0 012.736-3.522zm-7.66-9.822a9.745 9.745 0 016.924-3.136l-4.143 11.385a9.728 9.728 0 01-2.781-8.25zM12 0a12 12 0 1012 12A12.013 12.013 0 0012 0z"/>
        </svg>
      );
    case 'strapi':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
          <path d="M12 2L2 22h20L12 2zm0 3.99L18.01 18H5.99L12 5.99zM11 14h2v2h-2v-2zm0-5h2v3h-2V9z"/>
        </svg>
      );
    case 'blocks':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
          <path d="M4 4h7v7H4zm9 0h7v7h-7zm0 9h7v7h-7zm-9 0h7v7H4z"/>
        </svg>
      );
    case 'node':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
          <path d="M12 2L2 7.77v11.54L12 22l10-4.69V7.77L12 2zm8 16.27l-8 3.75-8-3.75V8.93l8-3.75 8 3.75v9.34z"/>
        </svg>
      );
    case 'shopify':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18.8 6.4L17 2H7L5.2 6.4C4.5 7.1 4 8 4 9v11c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1-.5-1.9-1.2-2.6zM12 4c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2z"/>
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '4px' }}>
          <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM12 2c-2.45 0-4.5 1.76-4.93 4h9.86c-.43-2.24-2.48-4-4.93-4zm7.25 4.25c-.39-.39-1.02-.39-1.41 0L16.2 7.9c.73.57 1.33 1.29 1.76 2.1l1.29-1.29c.39-.39.39-1.03 0-1.41zM6.22 7.9L4.58 6.25c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L4.8 9.3c.43-.81 1.03-1.53 1.76-2.1z"/>
        </svg>
      );
    case 'ios':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.5-.63.73-1.18 1.87-1.03 2.98 1.1.09 2.22-.55 2.96-1.42z"/>
        </svg>
      );
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '4px' }}>
          <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.015h-3.601zm3.599 7.185L12 13.072l3.602 3.601 5.998-6.002h-3.587v-.101zM12 13.072L8.398 16.67l3.602 3.601 8-8h-3.601l-4.399.801z"/>
        </svg>
      );
    default:
      return null;
  }
};

// Reusable ServiceCard Sub-Component
const ServiceCard = ({ card, setCursorText, setIsCursorActive, setIsCursorDark }) => {
  const getBubbleText = (id) => {
    if (id === 'service-web') return 'Web';
    if (id === 'service-app') return 'App';
    if (id === 'service-auto') return 'Auto';
    if (id === 'service-consult') return 'Consult';
    if (id === 'service-marketing') return 'Marketing';
    if (id === 'service-seo') return 'SEO';
    return '';
  };

  const circleIconBg = card.id === 'service-web'
    ? 'pink-bg'
    : card.id === 'service-app'
      ? 'blue-bg'
      : card.id === 'service-marketing'
        ? 'orange-bg'
        : card.id === 'service-seo'
          ? 'purple-bg'
          : 'green-bg';

  return (
    <div 
      className="service-card" 
      id={card.id}
      onMouseEnter={() => {
        setCursorText(getBubbleText(card.id));
        setIsCursorActive(true);
        setIsCursorDark(true);
      }}
      onMouseLeave={() => {
        setIsCursorActive(false);
        setIsCursorDark(false);
      }}
    >
      <div className="service-icon-wrapper">
        <div className={`circle-icon ${circleIconBg}`}>
          <ServiceIcon id={card.id} />
        </div>
      </div>
      <h3 className="service-card-title">{card.title}</h3>
      <p className="service-card-desc">{card.description}</p>
      <div className="service-tech-logos">
        {card.techBadges.map((badge, bIdx) => (
          <div key={bIdx} className="tech-item" title={badge.name}>
            <TechIcon type={badge.type} />
            {badge.text && <span style={{ fontSize: badge.type === 'woo' || badge.type === 'woocommerce' ? '12px' : '11px', fontWeight: '700', letterSpacing: '0.02em' }}>{badge.text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

function Services({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div className="services-header-left">
          <span className="services-badge">What We Do</span>
          <h2 className="services-heading">Perfect Solution For Your Business</h2>
        </div>
        <div className="services-header-right">
          <Link to="/services" className="view-all-btn">
            View All Services
          </Link>
        </div>
      </div>

      <div className="services-grid six-cards-grid">
        {servicesData.map((card) => (
          <ServiceCard
            key={card.id}
            card={card}
            setCursorText={setCursorText}
            setIsCursorActive={setIsCursorActive}
            setIsCursorDark={setIsCursorDark}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
