import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="cta-section-wrapper">
      <div className="cta-container">
        <div className="cta-reference-card">
          {/* Subtle curved background lines patterns */}
          <div className="cta-bg-pattern-circle cta-pattern-1"></div>
          <div className="cta-bg-pattern-circle cta-pattern-2"></div>
          
          {/* Floating White Pill Badges (Corners) */}
          <div className="cta-floating-badge cta-badge-top-left">
            <div className="cta-badge-icon-wrapper text-blue">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
          </div>
          
          <div className="cta-floating-badge cta-badge-bottom-left">
            <div className="cta-badge-icon-wrapper text-green">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
          </div>

          <div className="cta-floating-badge cta-badge-top-right">
            <div className="cta-badge-icon-wrapper text-purple">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>

          <div className="cta-floating-badge cta-badge-bottom-right">
            <div className="cta-badge-icon-wrapper text-orange">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
          </div>

          {/* Main Card Content */}
          <div className="cta-card-body-ref">

            {/* Heading */}
            <h2 className="cta-card-title-ref">
              Unlock the Power of Zinkly Engineering
            </h2>

            {/* Description */}
            <p className="cta-card-desc-ref">
              Zinkly is an all-in-one software engineering partner that helps businesses manage custom architectures, optimize cloud pipelines, and automate workflows with next-gen speed.
            </p>

            {/* Centered Button */}
            <div className="cta-button-wrapper-ref">
              <Link to="/contact" className="cta-pill-btn-ref">
                <span className="cta-btn-text-ref">Contact Us Today</span>
                <span className="cta-btn-arrow-ref">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
