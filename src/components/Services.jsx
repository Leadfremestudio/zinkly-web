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
