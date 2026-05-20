import { useParams, Link, Navigate } from 'react-router-dom';
import { detailedCaseStudies } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function ProjectDetail() {
  const { id } = useParams();

  // Find corresponding detailed case study record
  const caseDetail = detailedCaseStudies[id];

  // Fallback to portfolio if not found
  if (!caseDetail) {
    return <Navigate to="/projects" replace />;
  }

  usePageMetadata(caseDetail.client, caseDetail.subtitle);

  return (
    <div className="project-detail-wrapper">
      {/* 1. Page Header */}
      <section className="page-hero-banner detail-header">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <Link to="/projects" className="back-to-hub-link" id="back-to-portfolio-hub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Portfolio Hub</span>
          </Link>
          <span className="page-badge">TECHNICAL ANALYSIS CASE</span>
          <h1 className="page-title">{caseDetail.client}</h1>
          <p className="page-subtitle">{caseDetail.subtitle}</p>
        </div>
      </section>

      {/* 2. Visual Browser Showcase Mockup */}
      <section className="project-detail-showcase-mock">
        <div className="showcase-mock-container">
          <div className="browser-mockup widescreen">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot red"></span>
                <span className="browser-dot yellow"></span>
                <span className="browser-dot green"></span>
              </div>
              <div className="browser-address">{caseDetail.client.toLowerCase().replace(/\s+/g, '')}.com</div>
            </div>
            <div className="browser-content">
              {caseDetail.bgImage ? (
                <div className="preview-screenshot large-preview">
                  <img src={caseDetail.bgImage} alt={`${caseDetail.client} High Resolution Screen`} className="screenshot-img" />
                </div>
              ) : (
                <div className="preview-common-placeholder">Live Production Platform Online</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Performance Dashboards */}
      <section className="project-detail-metrics-section">
        <div className="metrics-summary-grid">
          {caseDetail.metrics.map((metric, mIdx) => (
            <div key={mIdx} className="metric-box-glow">
              <div className="metric-card-overlay"></div>
              <span className="metric-box-value">{metric.value}</span>
              <span className="metric-box-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Challenge & Solution analysis */}
      <section className="project-technical-analysis">
        <div className="analysis-grid">
          <div className="analysis-card challenge">
            <span className="analysis-badge red">THE CHALLENGE</span>
            <h2 className="analysis-heading">Technical Bottlenecks</h2>
            <p className="analysis-text">{caseDetail.challenge}</p>
          </div>

          <div className="analysis-card solution">
            <span className="analysis-badge green">THE RESOLUTION</span>
            <h2 className="analysis-heading">Engineered Architecture</h2>
            <p className="analysis-text">{caseDetail.solution}</p>
            <div className="solution-tech-stack">
              <h4 className="stack-title">Technologies Utilized:</h4>
              <div className="stack-badges">
                {caseDetail.techStackUsed.map((tech, tIdx) => (
                  <span key={tIdx} className="stack-badge-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client quotes testimonial block */}
      {caseDetail.quote && (
        <section className="project-client-testimonial">
          <div className="testimonial-glow-halo"></div>
          <div className="testimonial-card-block">
            <svg viewBox="0 0 24 24" className="quotes-vector-icon" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
            </svg>
            <p className="testimonial-body-text">"{caseDetail.quote.text}"</p>
            <div className="testimonial-author-block">
              <span className="author-name">{caseDetail.quote.author}</span>
              <span className="author-status">Project Sponsor</span>
            </div>
          </div>
        </section>
      )}

      {/* 6. Footer Planning CTA */}
      <section className="service-detail-cta-hook border-top-glow">
        <div className="cta-hook-card">
          <h3 className="cta-hook-title">Looking for Similar Technical Outcomes?</h3>
          <p className="cta-hook-sub">Let's audit your current systems and discuss optimized custom engineering.</p>
          <Link to="/contact" className="cta-hook-btn" id="planner-case-outcomes">
            Consult our Engineers
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
