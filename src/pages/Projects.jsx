import { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData, fallbackPreviewImage } from '../data';
import usePageMetadata from '../hooks/usePageMetadata';

function Projects({ setCursorText, setIsCursorActive }) {
  usePageMetadata('Flagship Case Studies', 'Read technical deep dives and explore our bento-grid portfolio of website development, transit apps, and real estate portals.');

  const [activeFilter, setActiveFilter] = useState('All');

  // Filter labels mapping
  const filterPills = ['All', 'Global Education', 'Transit & Travel', 'Financial Training', 'Premium Real Estate'];

  const filteredProjects = activeFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page-wrapper">
      {/* 1. Page Hero */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge">PORTFOLIO</span>
          <h1 className="page-title">
            Engineered <span className="accent-green">Outcomes</span>
          </h1>
          <p className="page-subtitle">
            Explore our flagship portfolio of software engineering projects, desktop browser mockup visualizers, and sub-second scaling metrics.
          </p>
        </div>
      </section>

      {/* 2. Filter Pills controls */}
      <section className="projects-filter-section">
        <div className="filter-controls-pills">
          {filterPills.map((pill) => (
            <button
              key={pill}
              type="button"
              className={`filter-pill-btn ${activeFilter === pill ? 'active' : ''}`}
              onClick={() => setActiveFilter(pill)}
              id={`filter-pill-${pill.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {pill.replace('Global ', '').replace('Transit & ', '').replace('Financial ', '').replace('Premium ', '')}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Dynamic bento projects grid */}
      <section className="projects-grid-section">
        <div className="bento-projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bento-case-card custom-projects-page-card ${project.gridClass}`}
              onMouseEnter={() => {
                setCursorText("Visit Site");
                setIsCursorActive(true);
              }}
              onMouseLeave={() => {
                setIsCursorActive(false);
              }}
            >
              <div className="case-card-overlay" />
              <div className="case-card-glow" />

              <div className="case-card-main-layout">
                {/* Left Column: Details */}
                <div className="case-card-details-col">
                  <div className="case-card-header">
                    <div className="case-header-left">
                      <span className="case-client">{project.client}</span>
                      <span className="case-category">{project.category}</span>
                    </div>
                    <div className="case-kpi-badge">
                      <span className="case-kpi-value">{project.kpi}</span>
                      <span className="case-kpi-title">{project.kpiLabel}</span>
                    </div>
                  </div>

                  <div className="case-card-body">
                    <h3 className="case-title">{project.title}</h3>
                    <p className="case-desc">{project.description}</p>
                  </div>

                  <div className="case-card-footer">
                    <div className="case-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="case-tag-pill">{tag}</span>
                      ))}
                    </div>
                    <Link to={`/projects/${project.id}`} className="case-arrow-btn" id={`project-details-link-${project.id}`}>
                      <span>Deep Dive results</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Web Mockup Frame */}
                <div className="case-card-preview-col">
                  <div className="browser-mockup">
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="browser-dot red"></span>
                        <span className="browser-dot yellow"></span>
                        <span className="browser-dot green"></span>
                      </div>
                      <div className="browser-address">{project.address}</div>
                    </div>
                    <div className="browser-content">
                      {project.image ? (
                        <div className="preview-screenshot">
                          <img src={project.image} alt={`${project.client} Preview`} className="screenshot-img" />
                        </div>
                      ) : (
                        <div className="preview-common">
                          <img src={fallbackPreviewImage} alt={`${project.client} Preview`} className="common-preview-img" />
                          <div className="preview-common-overlay">
                            <span className="preview-label">Live Platform</span>
                            <div className="preview-common-badge">Active</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
