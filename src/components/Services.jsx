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
          {/* account_tree icon (representing System Architecture & Technical Strategy) */}
          <path fill="currentColor" d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>
        </svg>
      );
    case 'service-marketing':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M18 4v1h-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5v2H7v2h10v-2h-2v-2h1c.55 0 1-.45 1-1v-1h1c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm-5 14H11v-2h2v2zm6-6c0 .55-.45 1-1 1h-1V8h1c.55 0 1 .45 1 1v3zM7 9h8v6H7V9z"/>
        </svg>
      );
    case 'service-software':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      );
    default:
      return null;
  }
};

// Reusable ServiceCard Sub-Component
const ServiceCard = ({ card, index }) => {
  const circleIconBg = card.id === 'service-web'
    ? 'pink-bg'
    : card.id === 'service-app'
      ? 'blue-bg'
      : card.id === 'service-marketing'
        ? 'orange-bg'
        : card.id === 'service-software'
          ? 'purple-bg'
          : 'green-bg';

  const delayClass = `delay-${((index % 3) + 1) * 100}`;

  return (
    <div 
      className={`service-card reveal reveal-up ${delayClass}`}
      id={card.id}
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

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header reveal reveal-up">
        <div className="services-header-left">
          <span className="services-badge">What We Do</span>
          <h2 className="services-heading">Perfect Solution For Your Business</h2>
        </div>
      </div>

      <div className="services-grid six-cards-grid">
        {servicesData.map((card, index) => (
          <ServiceCard
            key={card.id}
            card={card}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
