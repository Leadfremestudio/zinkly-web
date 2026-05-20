import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function Insights() {
  usePageMetadata('Insights & Perspectives', 'Perspectives on software engineering, custom workflow automation, headless portals, and system scaling architectures.');

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="insights-page-wrapper">
      {/* 1. Page Hero */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge font-green">KNOWLEDGE HUB</span>
          <h1 className="page-title">
            Perspectives on <span className="accent-green">Systems</span>
          </h1>
          <p className="page-subtitle">
            Deep technical investigations, frontend audits, and enterprise custom software architecture blueprints compiled by Zinkly Leads.
          </p>
        </div>
      </section>

      {/* 2. Blog Articles Feed Grid */}
      <section className="insights-feed-section">
        <div className="insights-articles-grid">
          {blogArticles.map((article) => (
            <article key={article.id} className="insight-blog-card">
              <div className="insight-card-glow"></div>
              <div className="insight-card-header">
                <div className="insight-meta-row">
                  <span className="insight-category-chip">{article.category}</span>
                  <span className="insight-readtime">{article.readTime}</span>
                </div>
                <span className="insight-date">{article.date}</span>
              </div>
              <div className="insight-card-body">
                <h3 className="insight-title">{article.title}</h3>
                <p className="insight-summary">{article.summary}</p>
              </div>
              <div className="insight-card-footer">
                <div className="insight-tags">
                  {article.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="insight-tag-pill">{tag}</span>
                  ))}
                </div>
                <Link to={`/insights/${article.id}`} className="insight-read-btn" id={`insight-read-btn-${article.id}`}>
                  <span>Read Article</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Newsletter Capture Card */}
      <section className="insights-newsletter-section">
        <div className="newsletter-glow-halo"></div>
        <div className="newsletter-card-block">
          <h3 className="newsletter-title">Subscribe to the Zinkly Digest</h3>
          <p className="newsletter-sub">Weekly updates on microservices architecture, secure database planning, and system benchmarks. No spam.</p>
          {subscribed ? (
            <div className="newsletter-success-toast">
              <span className="online-indicator"></span>
              <span>Thank you for subscribing! We've registered your email for next Tuesday's digest.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-capture-form">
              <input
                type="email"
                placeholder="Enter your professional email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input-field"
                aria-label="Newsletter email input"
                required
              />
              <button type="submit" className="newsletter-submit-btn" id="newsletter-subscribe">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Insights;
