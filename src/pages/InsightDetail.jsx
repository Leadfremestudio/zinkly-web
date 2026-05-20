import { useParams, Link, Navigate } from 'react-router-dom';
import { blogArticles } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function InsightDetail() {
  const { articleId } = useParams();

  // Find corresponding article record
  const article = blogArticles.find((a) => a.id === articleId);

  // Fallback to insights list if not found
  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  usePageMetadata(article.title, article.summary);

  return (
    <div className="insight-detail-wrapper">
      {/* 1. Page Header */}
      <section className="page-hero-banner detail-header">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <Link to="/insights" className="back-to-hub-link" id="back-to-insights-hub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Knowledge Hub</span>
          </Link>
          <div className="detail-meta-row">
            <span className="page-badge font-green">{article.category}</span>
            <span className="detail-date-read">{article.date} • {article.readTime}</span>
          </div>
          <h1 className="page-title article-headline">{article.title}</h1>
        </div>
      </section>

      {/* 2. Structured Article Body Presentation */}
      <section className="insight-article-body-content">
        <div className="article-body-container">
          <div className="article-body-html">
            {article.content}
          </div>

          <div className="article-body-tags">
            <h4 className="tags-title">Article Tags:</h4>
            <div className="tags-list">
              {article.tags.map((tag, tIdx) => (
                <span key={tIdx} className="article-tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer capture CTA */}
      <section className="service-detail-cta-hook border-top-glow">
        <div className="cta-hook-card">
          <h3 className="cta-hook-title">Did you find this technical audit useful?</h3>
          <p className="cta-hook-sub">Get direct software engineering updates delivered weekly to your inbox.</p>
          <Link to="/insights" className="cta-hook-btn" id="sub-insight-footer">
            Return to Insights Hub
          </Link>
        </div>
      </section>
    </div>
  );
}

export default InsightDetail;
