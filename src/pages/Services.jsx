import { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, techStackMatrix } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function ServicesPage() {
  usePageMetadata('Services & Capabilities', 'Explore Zinkly\'s software engineering capabilities: web dev, mobile apps, custom cloud automation, IT consulting, and talent pipelines.');

  const [activeTab, setActiveTab] = useState('frontend');

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      desc: 'Deep architecture consultations, technical backlog framing, scope definition, and structural planning.'
    },
    {
      step: '02',
      title: 'Architectural Design',
      desc: 'Database schema diagrams, security blueprints, HSL visual grids, and microservices decoupling.'
    },
    {
      step: '03',
      title: 'Agile Engineering',
      desc: 'Bi-weekly sprint iterations, daily test updates, direct git commits, and zero-unused variable codebases.'
    },
    {
      step: '04',
      title: 'Rigorous Quality Assurance',
      desc: 'Security auditing, manual load spikes testing, automated browser checkups, and strict lint conformity.'
    },
    {
      step: '05',
      title: 'Launch & 24/7 SLA Telemetry',
      desc: 'Zero-downtime hot pushes, live server telemetry, proactive backups, and 15-min emergency response thresholds.'
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. Capabilities Hero */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge">CAPABILITIES</span>
          <h1 className="page-title">
            Technical <span className="accent-green">Engineering</span>
          </h1>
          <p className="page-subtitle">
            We build modular systems that scale seamlessly. From headless custom portals to multi-region cloud infrastructures and robust talent internships.
          </p>
        </div>
      </section>

      {/* 2. Expanded Services Pillars - 6 Cards */}
      <section className="services-pillars-section">
        <div className="section-title-block">
          <span className="section-badge font-green">SERVICE CORE</span>
          <h2 className="section-heading">Our Flagship Offerings</h2>
        </div>

        <div className="pillars-detailed-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="pillar-detail-card" id={`pillar-card-${service.id}`}>
              <div className="pillar-card-overlay"></div>
              <div className="pillar-header">
                <span className="pillar-index">0{index + 1}</span>
                <h3 className="pillar-title">{service.title}</h3>
              </div>
              <p className="pillar-desc">{service.description}</p>
              <div className="pillar-tech-chips">
                {service.techBadges.map((badge, bIdx) => (
                  <span key={bIdx} className="pillar-tech-chip">
                    {badge.name}
                  </span>
                ))}
              </div>
              <div className="pillar-action">
                <Link to={`/services/${service.id}`} className="pillar-link" id={`pillar-deep-dive-${service.id}`}>
                  <span>Deep Dive Capability</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Zinkly Delivery Blueprint (Stepped Carousel) */}
      <section className="services-blueprint-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">METHODOLOGY</span>
          <h2 className="section-heading">The Delivery Blueprint</h2>
          <p className="section-subtitle-text">Five precise stages structured to guarantee predictable, flawless software outcomes.</p>
        </div>

        <div className="blueprint-flow-timeline">
          {processSteps.map((step, idx) => (
            <div key={idx} className="blueprint-step-card">
              <span className="blueprint-step-num">{step.step}</span>
              <h3 className="blueprint-step-title">{step.title}</h3>
              <p className="blueprint-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Tech Stack Matrix (Tabbed selector) */}
      <section className="services-tech-matrix-section">
        <div className="section-title-block">
          <span className="section-badge">COMMAND CENTER</span>
          <h2 className="section-heading">Technology Matrix</h2>
          <p className="section-subtitle-text">Click the categories to filter the enterprise toolsets we actively command.</p>
        </div>

        <div className="tech-matrix-container">
          {/* Tab controls */}
          <div className="tech-matrix-tabs">
            {['frontend', 'backend', 'mobile', 'cloud'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`matrix-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                id={`matrix-tab-${tab}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="tech-matrix-grid">
            {techStackMatrix[activeTab].map((tech, tIdx) => (
              <div key={tIdx} className="matrix-tech-card">
                <div className="matrix-card-glow"></div>
                <div className="matrix-card-header">
                  <h4 className="matrix-tech-name">{tech.name}</h4>
                  <span className="matrix-tech-level">{tech.level}</span>
                </div>
                <p className="matrix-tech-desc">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
