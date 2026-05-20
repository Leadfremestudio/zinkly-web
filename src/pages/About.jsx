import { timelineData, leadershipData } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function About() {
  usePageMetadata('About Us', 'Discover Zinkly\'s DNA, corporate engineering philosophies, growth timelines, and meets our technical leadership team.');

  return (
    <div className="about-page-wrapper">
      {/* 1. Hero Header Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge">OUR IDENTITY</span>
          <h1 className="page-title">
            Our DNA & <span className="accent-green">Mission</span>
          </h1>
          <p className="page-subtitle">
            Think • Build • Connect. We engineer custom enterprise systems, headless web portals, and low-latency workflows designed to scale.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy & Values */}
      <section className="about-values-section">
        <div className="section-title-block">
          <span className="section-badge">FOUNDATIONS</span>
          <h2 className="section-heading">Core Engineering Pillars</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon-circle green">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
              </svg>
            </div>
            <h3 className="value-title">Innovation</h3>
            <p className="value-desc">Pioneering edge solutions, containerized microservices, and serverless automation frameworks to reduce operational friction.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle pink">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3 className="value-title">Trust & SLAs</h3>
            <p className="value-desc">Backing every project with robust, corporate-grade service agreements, 99.99% system uptime, and transparent database transfers.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle blue">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="value-title">Technical Quality</h3>
            <p className="value-desc">Strict lint configurations, automated QA pipelines, zero-unused compilation variables, and highly reusable modular components.</p>
          </div>

          <div className="value-card">
            <div className="value-icon-circle gold">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <h3 className="value-title">Agile Alignment</h3>
            <p className="value-desc">Deploying bi-weekly sprint intervals, daily standups, and direct access to senior dev leads to ensure complete alignment.</p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Growth Timeline */}
      <section className="about-timeline-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">JOURNEY</span>
          <h2 className="section-heading">How Zinkly Scaled</h2>
          <p className="section-subtitle-text">Tracing our path from a local team to a trusted global engineering partner.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line-track"></div>
          {timelineData.map((node, index) => (
            <div key={index} className={`timeline-node ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-indicator-dot"></div>
              <div className="timeline-node-card">
                <span className="timeline-year">{node.year}</span>
                <h3 className="timeline-title">{node.title}</h3>
                <span className="timeline-subtext">{node.subLabel}</span>
                <p className="timeline-desc">{node.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership Profiles Team Section */}
      <section className="about-team-section">
        <div className="section-title-block">
          <span className="section-badge">EXPERTISE</span>
          <h2 className="section-heading">Meet the Brains</h2>
        </div>

        <div className="team-grid">
          {leadershipData.map((leader, index) => (
            <div key={index} className="team-profile-card">
              <div className="team-avatar-placeholder">
                <div className="avatar-mesh-glow"></div>
                <svg viewBox="0 0 24 24" className="profile-svg-icon" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{leader.name}</h3>
                <span className="profile-role">{leader.role}</span>
                <span className="profile-credentials">{leader.credentials}</span>
                <p className="profile-bio">{leader.bio}</p>
                <a href={leader.linkedIn} className="profile-linkedin" aria-label={`${leader.name} LinkedIn Profile`}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Connect with Exec</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Global Ecosystem Maps */}
      <section className="about-offices-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">ECOSYSTEM</span>
          <h2 className="section-heading">Zinkly Global Reach</h2>
          <p className="section-subtitle-text">800+ clients served across Europe, North America, and Asia-Pacific hubs.</p>
        </div>

        <div className="office-grid-cards">
          <div className="office-card">
            <span className="office-location">BANGALORE</span>
            <span className="office-type">Headquarters & Dev Desk</span>
            <p className="office-address">242 Cyber Hub, Tower B, Electronic City Phase 1, Bangalore, KA, India</p>
            <div className="office-pulse-point active">
              <span className="pulsing-radar"></span>
              <span className="radar-status">120+ Active Devs</span>
            </div>
          </div>

          <div className="office-card">
            <span className="office-location">SILICON VALLEY</span>
            <span className="office-type">Consulting & Strategy Hub</span>
            <p className="office-address">450 Infinite Loop Way, Suite 120, Cupertino, California, USA</p>
            <div className="office-pulse-point active">
              <span className="pulsing-radar blue-radar"></span>
              <span className="radar-status">Enterprise Strategy Desk</span>
            </div>
          </div>

          <div className="office-card">
            <span className="office-location">LONDON</span>
            <span className="office-type">Support & Compliance Desk</span>
            <p className="office-address">88 Shoreditch High St, Tech City East, London, UK</p>
            <div className="office-pulse-point active">
              <span className="pulsing-radar green-radar"></span>
              <span className="radar-status">24/7 SLA Telemetry Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
