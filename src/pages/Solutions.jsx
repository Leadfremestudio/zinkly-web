import { industryProfiles } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function Solutions() {
  usePageMetadata('Enterprise Solutions & SLAs', 'Review Zinkly\'s industry solutions (Fintech, Healthtech, SCMS) and explore our guaranteed Service Level Agreements (SLAs).');

  const slaSpecifications = [
    { spec: 'System Uptime Guarantee', standard: '99.99% Uptime SLA', threshold: 'Validated via automatic serverless cloud telemetry pings.' },
    { spec: 'Critical Incident Response', standard: '15 Minutes Response', threshold: 'Dedicated engineer desk assigned to support queues immediately.' },
    { spec: 'Security Standards Compliance', standard: 'GDPR & SOC2 Conformity', threshold: 'Encrypted databases, access logs audits, server vaults.' },
    { spec: 'Cloud Telemetry Audits', standard: 'Daily Multi-Region Backups', threshold: 'S3 snapshots cached across separate geographic sectors.' },
    { spec: 'Performance Speed Standard', standard: 'Sub-second API Latency', threshold: 'Caching layers on edges to guarantee maximum responsiveness.' }
  ];

  return (
    <div className="solutions-page-wrapper">
      {/* 1. Page Hero */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge">ENTERPRISE</span>
          <h1 className="page-title">
            Vertical <span className="accent-green">Solutions</span>
          </h1>
          <p className="page-subtitle">
            Highly secure software frameworks built for vertical scale. We tailor our engineering expertise directly to specialized corporate sectors.
          </p>
        </div>
      </section>

      {/* 2. Industry Profiles Grid */}
      <section className="solutions-profiles-section">
        <div className="section-title-block">
          <span className="section-badge font-green">COMPLIANCE</span>
          <h2 className="section-heading">Industry Specializations</h2>
        </div>

        <div className="vertical-profiles-grid">
          {industryProfiles.map((profile) => (
            <div key={profile.id} className="vertical-profile-card">
              <div className="profile-badge-row">
                <span className="vertical-badge-kpi">{profile.kpi}</span>
                <span className="vertical-badge-text">{profile.badge}</span>
              </div>
              <h3 className="vertical-profile-title">{profile.name}</h3>
              <p className="vertical-profile-desc">{profile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SLA Technical Specs Table */}
      <section className="solutions-sla-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">STANDARDS</span>
          <h2 className="section-heading">SLA Service Level Guarantees</h2>
          <p className="section-subtitle-text">Honest, verifiable benchmarks backing our enterprise software deployments.</p>
        </div>

        <div className="sla-table-container">
          <table className="sla-spec-table">
            <thead>
              <tr>
                <th className="th-spec">TECHNICAL PARAMETER</th>
                <th className="th-standard">GUARANTEED SLA BOUNDS</th>
                <th className="th-threshold">TELEMETRY MONITORING THRESHOLD</th>
              </tr>
            </thead>
            <tbody>
              {slaSpecifications.map((sla, sIdx) => (
                <tr key={sIdx}>
                  <td className="td-spec">{sla.spec}</td>
                  <td className="td-standard">
                    <span className="standard-chip">{sla.standard}</span>
                  </td>
                  <td className="td-threshold">{sla.threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Support Security Seal */}
      <section className="solutions-security-seal">
        <div className="security-seal-glow"></div>
        <div className="security-seal-card">
          <svg viewBox="0 0 24 24" className="seal-vector-icon" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
          <h3 className="seal-title">Absolute Security Certification</h3>
          <p className="seal-desc">
            All Zinkly databases are fully isolated. We transfer repository ownership immediately upon project delivery and maintain strict secure code standards.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
