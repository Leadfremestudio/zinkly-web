import aboutOfficeMain from '../assets/about_office_main.webp';
import aboutOfficeSub from '../assets/about_office_sub.webp';

function About({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  return (
    <section id="about" className="about-section">
      {/* Glow backdrop */}
      <div className="about-bg-glow"></div>

      {/* Left Column: Overlapping Rounded Images */}
      <div className="about-image-column reveal reveal-left">
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
      <div className="about-content reveal reveal-right delay-200">
        <span className="about-badge">ABOUT US</span>
        <h2 className="about-heading">
          Helping Businesses Stay Ahead <br />
          In a Fast Digital World With <br />
          <span className="accent-green">Effective Digital Solutions</span>
        </h2>
        <p className="about-description">
          In today’s fast-paced modern world, your digital presence and speed matter more than ever. Zinkly helps you get there.
        </p>
        <p className="about-description">
          We focus on building simple, effective digital solutions that help businesses move faster, work smarter, and stay competitive in a changing world. Our goal is to make technology practical and easy to use so businesses can focus on growth, not complexity.
        </p>
        <p className="about-description">
          At Zinkly, we believe progress comes from clarity, speed, and innovation. We help businesses strengthen their digital presence and improve how they operate in the modern world.
        </p>
        <a href="#learn-more" className="learn-more-btn" id="about-learn-more">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default About;
