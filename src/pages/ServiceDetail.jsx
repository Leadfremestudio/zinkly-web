import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData, faqData } from '../data';
import Accordion from '../components/Accordion';
import usePageMetadata from '../hooks/usePageMetadata';

function ServiceDetail() {
  const { serviceId } = useParams();

  // Find corresponding service
  const service = servicesData.find((s) => s.id === serviceId);

  // If service ID is not found, fallback to services hub
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  usePageMetadata(service.title, service.description);

  // Custom technical copy mapping for each of the 6 services
  const technicalDeepDives = {
    'service-web': {
      architecture: 'Decoupled JAMstack & Headless CMS architectures',
      highlights: [
        'Structured REST/GraphQL JSON endpoints powered by Headless Strapi.',
        'High-performance React frontends styled with modern Vanilla CSS layers.',
        'Caching on Global Cloudflare Edge CDN configurations with sub-second TTLs.',
        'Rigorous automated semantic testing ensuring high accessibility (ARIA compliant).'
      ],
      faqItems: faqData.slice(0, 3)
    },
    'service-app': {
      architecture: 'Secure, high-conversion multi-tenant merchant applications',
      highlights: [
        'Frictionless checkout APIs integrated with headless Shopify engines.',
        'Optimized data caching mechanisms to lower loading lag on cellular networks.',
        'Database structures synchronization across multi-region logistics warehouses.',
        'Integrated analytics mapping client metrics and checkout success curves.'
      ],
      faqItems: faqData.slice(1, 4)
    },
    'service-auto': {
      architecture: 'Cloud-native serverless workflow orchestrations',
      highlights: [
        'Persistent real-time WebSockets connecting mobile coordinates and server dispatch desks.',
        'Elastic AWS Lambda serverless execution grids eliminating database locking surges.',
        'Automatic cron execution tracks for stock updates and client email reminders.',
        'High-level security keys vaults encryption to safeguard customer API tokens.'
      ],
      faqItems: [faqData[1], faqData[2]]
    },
    'service-consult': {
      architecture: 'Strategic systems audit and engineering governance',
      highlights: [
        'Comprehensive security compliance assessments targeting GDPR and SOC2 benchmarks.',
        'Cloud-readiness blueprints assessing database scaling thresholds and cloud costs.',
        'Legacy code modularization roadmaps mapping monolithic refactoring intervals.',
        'Agile delivery consulting helping local engineering teams align with enterprise SLAs.'
      ],
      faqItems: [faqData[0], faqData[1]]
    },
    'service-custom': {
      architecture: 'Sub-second microservice networks and bespoke database systems',
      highlights: [
        'Decoupled system grids linking Node.js modules via low-latency REST endpoints.',
        'Custom enterprise control consoles featuring real-time telemetry metrics overlays.',
        'Highly normalized database architectures utilizing Postgres indices to avoid query lockups.',
        'Isolated test environments mirroring production to allow safe hot pushes.'
      ],
      faqItems: [faqData[1], faqData[2]]
    },
    'service-intern': {
      architecture: 'Agile talent mentoring and sandbox mirroring programs',
      highlights: [
        'Agile sprint simulations where interns build features inside isolated sandbox repositories.',
        'Daily technical code reviews driving code cleanliness and unused variables purging.',
        'Direct mentorship by senior React Leads teaching HSL designs and Lenis inertia scroll binds.',
        'Clear hiring paths integrating high-achieving recruits directly into full active dev teams.'
      ],
      faqItems: [faqData[3]]
    }
  };

  const deepDive = technicalDeepDives[service.id] || technicalDeepDives['service-web'];

  return (
    <div className="service-detail-wrapper">
      {/* 1. Page Header */}
      <section className="page-hero-banner detail-header">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <Link to="/services" className="back-to-hub-link" id="back-to-services-hub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Capabilities Hub</span>
          </Link>
          <span className="page-badge">DEEP DIVE EXAMINATIONS</span>
          <h1 className="page-title">{service.title}</h1>
          <p className="page-subtitle">{service.description}</p>
        </div>
      </section>

      {/* 2. Architectural Highlights */}
      <section className="service-architecture-section">
        <div className="architecture-grid">
          <div className="architecture-copy">
            <span className="section-badge font-green">SYSTEM Blueprints</span>
            <h2 className="section-heading">Architectural Overview</h2>
            <p className="architecture-desc-intro">
              How Zinkly approaches this capability: <strong>{deepDive.architecture}</strong>. We enforce enterprise-grade scalability, bulletproof API links, and zero performance bottlenecks.
            </p>
            <ul className="architecture-highlights-list">
              {deepDive.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="architecture-li">
                  <span className="li-bullet-point"></span>
                  <p>{highlight}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="architecture-preview-panel">
            <div className="architecture-glass-console">
              <div className="console-title-row">
                <span className="console-dot-glow"></span>
                <span className="console-title-text">Telemetry Output</span>
              </div>
              <div className="console-code-lines">
                <p className="code-green">// Zinkly Technical Core System Initialized</p>
                <p className="code-white">const capability = await getCapability("{service.id}");</p>
                <p className="code-white">console.log(capability.architecture);</p>
                <p className="code-green">{"=>"} "{deepDive.architecture}"</p>
                <p className="code-white">process.exit(0);</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Reusable Accordion FAQs */}
      <section className="service-faqs-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">INFORMATION</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subtitle-text">Clear, honest answers about discovery, pricing, ownership, and talent.</p>
        </div>
        <div className="faqs-accordion-wrapper">
          <Accordion items={deepDive.faqItems} />
        </div>
      </section>

      {/* 4. Contact CTA Hook */}
      <section className="service-detail-cta-hook">
        <div className="cta-hook-card">
          <h3 className="cta-hook-title">Ready to Plan Your {service.title} Project?</h3>
          <p className="cta-hook-sub">Configure your budget, timeline, and exact scope using our interactive Project Planner.</p>
          <Link to={`/contact?area=${service.id}`} className="cta-hook-btn" id="planner-lead-hook">
            Open Interactive Planner
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
