import { caseStudiesData, fallbackPreviewImage } from '../data';

// Reusable CaseStudyCard Sub-Component
const CaseStudyCard = ({ project, setCursorText, setIsCursorActive }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`bento-case-card ${project.gridClass}`}
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
      
      <div 
        className="case-card-hover-bg" 
        style={{ backgroundImage: `url(${project.image || fallbackPreviewImage})` }} 
      />
      
      <div className="case-card-main-layout">
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
            <div className="case-arrow-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

function CaseStudies({ setCursorText, setIsCursorActive }) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-header-left">
          <span className="projects-badge">Our Impact</span>
          <h2 className="projects-heading">Engineered Success: Flagship Projects</h2>
        </div>
        <div className="projects-header-right">
          <a href="#projects" className="view-all-projects-btn">
            Explore Portfolio
          </a>
        </div>
      </div>

      <div className="bento-projects-grid">
        {caseStudiesData.map((project) => (
          <CaseStudyCard
            key={project.id}
            project={project}
            setCursorText={setCursorText}
            setIsCursorActive={setIsCursorActive}
          />
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
