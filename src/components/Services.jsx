import { servicesData } from '../data';

// Helper to render main service icons based on ID (outline SVGs from glas.html)
const ServiceIcon = ({ id }) => {
  switch (id) {
    case 'service-web':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <rect x="3" y="6" width="18" height="11" rx="2" ry="2"></rect>
          <line x1="12" y1="17" x2="12" y2="20"></line>
          <line x1="9" y1="20" x2="15" y2="20"></line>
        </svg>
      );
    case 'service-app':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      );
    case 'service-auto':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case 'service-consult':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      );
    case 'service-marketing':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'service-seo':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      );
    default:
      return null;
  }
};

// Reusable ServiceCard Sub-Component
const ServiceCard = ({ card, index }) => {
  const circleIconBg = card.id === 'service-web'
    ? 'icon-red'
    : card.id === 'service-app'
      ? 'icon-blue'
      : card.id === 'service-marketing'
        ? 'icon-orange'
        : card.id === 'service-seo'
          ? 'icon-purple'
          : 'icon-green';

  const delayClass = `delay-${((index % 3) + 1) * 100}`;

  return (
    <div 
      className={`glass-card reveal reveal-up ${delayClass}`}
      id={card.id}
    >
      <div className={`icon-wrapper ${circleIconBg}`}>
        <ServiceIcon id={card.id} />
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};

function Services({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  return (
    <section id="services" className="services-section">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="container">
        <div className="section-header reveal reveal-up">
          <span className="subtitle">What We Do</span>
          <h2 className="title">Perfect Solution For Your Business</h2>
        </div>

        <div className="cards-grid">
          {servicesData.map((card, index) => (
            <ServiceCard
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
