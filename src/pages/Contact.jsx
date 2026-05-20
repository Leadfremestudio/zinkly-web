import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { faqData } from '../data';
import Accordion from '../components/Accordion';
import usePageMetadata from '../hooks/usePageMetadata';

function Contact() {
  usePageMetadata('Contact & Planner', 'Launch your project strategy session with Zinkly. Configure our interactive multi-step project planner in under 60 seconds.');

  const [searchParams] = useSearchParams();

  // 1. Planner State
  const [step, setStep] = useState(1);
  const [targetAreas, setTargetAreas] = useState({
    web: false,
    app: false,
    auto: false,
    cloud: false
  });
  const [budget, setBudget] = useState(50000); // Slider default $50k
  const [timeline, setTimeline] = useState('1-3 months');
  const [profile, setProfile] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Set default area if passed via query params (e.g. /contact?area=service-web)
  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (areaParam) {
      if (areaParam === 'service-web') setTargetAreas((prev) => ({ ...prev, web: true }));
      if (areaParam === 'service-app') setTargetAreas((prev) => ({ ...prev, app: true }));
      if (areaParam === 'service-auto') setTargetAreas((prev) => ({ ...prev, auto: true }));
      if (areaParam === 'service-custom') setTargetAreas((prev) => ({ ...prev, web: true, auto: true }));
      if (areaParam === 'service-consult') setTargetAreas((prev) => ({ ...prev, cloud: true }));
    }
  }, [searchParams]);

  const handleAreaToggle = (key) => {
    setTargetAreas((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitPlanner = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getBudgetText = (value) => {
    if (value < 25000) return '$10k - $25k (SME MVP Launch)';
    if (value < 75000) return '$25k - $75k (Medium scale integrations)';
    if (value < 150000) return '$75k - $150k (Enterprise cloud microservices)';
    return '$150k+ (Global multi-tenant platforms)';
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. Page Hero */}
      <section className="page-hero-banner">
        <div className="page-hero-glow"></div>
        <div className="page-hero-content">
          <span className="page-badge font-green">COMMUNICATION</span>
          <h1 className="page-title">
            Project <span className="accent-green">Planner</span>
          </h1>
          <p className="page-subtitle">
            Configure your technical scope, timeline bounds, and project budget in under 60 seconds. Our engineering leads will review your specs immediately.
          </p>
        </div>
      </section>

      {/* 2. Interactive Multi-Step Planner Form */}
      <section className="contact-planner-section">
        <div className="planner-container-box">
          {submitted ? (
            <div className="planner-success-screen">
              <div className="success-icon-badge">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h2 className="success-heading">Planner Logged Successfully!</h2>
              <p className="success-subtext">
                Thank you, <strong>{profile.name}</strong> from <strong>{profile.company || 'your team'}</strong>! We have registered your inquiry.
              </p>
              
              <div className="planner-summary-glass">
                <h4 className="summary-title">Your Specifications Summary:</h4>
                <ul className="summary-list">
                  <li>
                    <span className="sum-lbl">Target Disciplines:</span>
                    <span className="sum-val">
                      {Object.keys(targetAreas).filter((k) => targetAreas[k]).map((k) => k.toUpperCase()).join(', ') || 'CUSTOM ARCHITECTURE'}
                    </span>
                  </li>
                  <li>
                    <span className="sum-lbl">Budget Bounds:</span>
                    <span className="sum-val">{getBudgetText(budget)}</span>
                  </li>
                  <li>
                    <span className="sum-lbl">Timeline Goal:</span>
                    <span className="sum-val">{timeline}</span>
                  </li>
                  <li>
                    <span className="sum-lbl">Contact Email:</span>
                    <span className="sum-val">{profile.email}</span>
                  </li>
                </ul>
              </div>
              <p className="success-next-steps">
                A senior React or cloud-native developer lead will contact you within **12 hours** to set up a Zoom discovery call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitPlanner} className="planner-interactive-form">
              {/* Progress Bar Indicators */}
              <div className="planner-progress-row">
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
                </div>
                <div className="progress-step-counter">STEP {step} OF 4</div>
              </div>

              {/* STEP 1: Target Areas Checkboxes */}
              {step === 1 && (
                <div className="planner-step-card animate-fade-in">
                  <h3 className="step-title">Which project disciplines are we building?</h3>
                  <p className="step-subtitle-text">Select all targeted capabilities that apply to your product plan.</p>
                  
                  <div className="disciplines-checkbox-grid">
                    <button
                      type="button"
                      className={`discipline-check-card ${targetAreas.web ? 'active' : ''}`}
                      onClick={() => handleAreaToggle('web')}
                      id="planner-opt-web"
                    >
                      <span className="check-bullet"></span>
                      <div className="check-meta">
                        <span className="check-title">Website Engineering</span>
                        <span className="check-desc">Jamstack portals, headless Strapi APIs.</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`discipline-check-card ${targetAreas.app ? 'active' : ''}`}
                      onClick={() => handleAreaToggle('app')}
                      id="planner-opt-app"
                    >
                      <span className="check-bullet"></span>
                      <div className="check-meta">
                        <span className="check-title">Application Development</span>
                        <span className="check-desc">Headless Shopify checkouts, merchant apps.</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`discipline-check-card ${targetAreas.auto ? 'active' : ''}`}
                      onClick={() => handleAreaToggle('auto')}
                      id="planner-opt-auto"
                    >
                      <span className="check-bullet"></span>
                      <div className="check-meta">
                        <span className="check-title">Workflow Automation</span>
                        <span className="check-desc">Low-latency GPS sockets, API streams.</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`discipline-check-card ${targetAreas.cloud ? 'active' : ''}`}
                      onClick={() => handleAreaToggle('cloud')}
                      id="planner-opt-cloud"
                    >
                      <span className="check-bullet"></span>
                      <div className="check-meta">
                        <span className="check-title">Consulting & Cloud</span>
                        <span className="check-desc">Compliance audits, multi-region setups.</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Scale & Budget HSL slider */}
              {step === 2 && (
                <div className="planner-step-card animate-fade-in">
                  <h3 className="step-title">What is your targeted project budget bounds?</h3>
                  <p className="step-subtitle-text">Adjust our custom HSL interactive range slider to match your parameters.</p>
                  
                  <div className="budget-slider-container">
                    <input
                      type="range"
                      min="10000"
                      max="200000"
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="premium-budget-range-slider"
                      id="planner-budget-slider"
                    />
                    <div className="budget-output-panel">
                      <span className="budget-numeric-val">${budget.toLocaleString()}</span>
                      <span className="budget-category-label">{getBudgetText(budget)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Timeline durations pills */}
              {step === 3 && (
                <div className="planner-step-card animate-fade-in">
                  <h3 className="step-title">What is your target launch schedule timeline?</h3>
                  <p className="step-subtitle-text">Pick the ideal timeframe matching your delivery expectations.</p>
                  
                  <div className="timeline-pills-selector">
                    {['1-3 months', '3-6 months', 'Continuous Agile Sprints'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`timeline-pill-card ${timeline === time ? 'active' : ''}`}
                        onClick={() => setTimeline(time)}
                        id={`planner-time-${time.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span className="pill-dot"></span>
                        <span className="pill-label">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Profile Inputs */}
              {step === 4 && (
                <div className="planner-step-card animate-fade-in">
                  <h3 className="step-title">Enter your contact profile details</h3>
                  <p className="step-subtitle-text">We safeguard all customer info. No third-party relays.</p>
                  
                  <div className="planner-inputs-grid">
                    <div className="planner-input-wrapper">
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="planner-input-field text-input"
                        placeholder="Your full name..."
                        required
                        id="planner-input-name"
                      />
                    </div>

                    <div className="planner-input-wrapper">
                      <input
                        type="text"
                        name="company"
                        value={profile.company}
                        onChange={handleProfileChange}
                        className="planner-input-field text-input"
                        placeholder="Company name..."
                        id="planner-input-company"
                      />
                    </div>

                    <div className="planner-input-wrapper full-width">
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="planner-input-field text-input"
                        placeholder="Professional email address..."
                        required
                        id="planner-input-email"
                      />
                    </div>

                    <div className="planner-input-wrapper full-width">
                      <textarea
                        name="message"
                        value={profile.message}
                        onChange={handleProfileChange}
                        className="planner-input-field textarea-input"
                        placeholder="Short descriptions of your technical hurdles or target scope..."
                        rows="4"
                        id="planner-input-message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Button Bar */}
              <div className="planner-nav-bar">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="planner-nav-btn prev"
                    id="planner-prev-btn"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="planner-nav-btn next"
                    id="planner-next-btn"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="planner-nav-btn submit-btn"
                    id="planner-submit-btn"
                  >
                    Submit Specifications
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. Reusable Accordion FAQs */}
      <section className="contact-faqs-section">
        <div className="section-title-block centered">
          <span className="section-badge font-green">RESOLUTIONS</span>
          <h2 className="section-heading">Contact FAQs</h2>
          <p className="section-subtitle-text">Answers to questions about software timelines, database protection, and remote team sprints.</p>
        </div>
        <div className="faqs-accordion-wrapper">
          <Accordion items={faqData} />
        </div>
      </section>
    </div>
  );
}

export default Contact;
