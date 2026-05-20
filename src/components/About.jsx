import aboutOfficeMain from '../assets/about_office_main.png';
import aboutOfficeSub from '../assets/about_office_sub.png';

function About() {
  return (
    <section id="about" className="about-section">
      {/* Glow backdrop */}
      <div className="about-bg-glow"></div>

      {/* Left Column: Overlapping Rounded Images */}
      <div className="about-image-column">
        <div className="about-collage">
          <div className="collage-image-wrapper main">
            <img src={aboutOfficeMain} alt="Zinkly Workspace - Think Build Connect" className="collage-image" />
          </div>
          <div className="collage-image-wrapper sub">
            <img src={aboutOfficeSub} alt="Zinkly Collaborative Lounge Cabin" className="collage-image" />
          </div>
        </div>
      </div>

      {/* Right Column: Reference Headline, Copy, and Pill Button */}
      <div className="about-content">
        <span className="about-badge">ABOUT US</span>
        <h2 className="about-heading">
          Empowering Businesses <br />
          Grow Worldwide with <br />
          <span className="accent-green">Innovative Digital Solutions</span>
        </h2>
        <p className="about-description">
          Zinkly is committed to connecting businesses across the world towards digitalisation highlighting the knowledge of skills. We, the ideal digital agency, provide bespoke solutions to meet all your digital needs. Zinkly aims to expand, innovate, or enhance businesses and propel your projects to new heights. Zinkly holds the power for better experiences.
        </p>
        <a href="#learn-more" className="learn-more-btn" id="about-learn-more">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
