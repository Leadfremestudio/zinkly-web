import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';



// Crisp, high-end vector SVG brand logos for Logo Marquee Section
const BrandLogos = {
  TaskUs: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 11 2 2 4-4"/>
    </svg>
  ),
  Tasktop: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 8 8 12 12 16"/>
      <line x1="16" y1="12" x2="8" y2="12"/>
    </svg>
  ),
  Taskode: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Taskrabbit: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  Smartcat: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  Spherule: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Boltshift: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Lightbox: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
    </svg>
  ),
  AcmeCorp: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
    </svg>
  ),
  Nietzsche: () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="brand-svg">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
};

// Row 1 Brands
const row1Brands = [
  { name: 'TaskUs', Icon: BrandLogos.TaskUs },
  { name: 'TASKTOP', Icon: BrandLogos.Tasktop },
  { name: 'taskode', Icon: BrandLogos.Taskode },
  { name: 'taskrabbit', Icon: BrandLogos.Taskrabbit }
];

// Row 2 Brands
const row2Brands = [
  { name: 'Smartcat', Icon: BrandLogos.Smartcat },
  { name: 'Spherule', Icon: BrandLogos.Spherule },
  { name: 'Boltshift', Icon: BrandLogos.Boltshift },
  { name: 'Lightbox', Icon: BrandLogos.Lightbox },
  { name: 'Acme Corp', Icon: BrandLogos.AcmeCorp },
  { name: 'Nietzsche', Icon: BrandLogos.Nietzsche }
];

// High-performance, 60fps Count Up animation component triggered when scrolled into view
function CountUpNumber({ end, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        window.requestAnimationFrame(step);
        observer.unobserve(elementRef.current);
      }
    }, { threshold: 0.1 });

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

const rotatingWords = ['Enterprise', 'Software', 'Systems', 'Workflows', 'Business'];
const extendedWords = [...rotatingWords, rotatingWords[0]];

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= rotatingWords.length) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  return (
    <span className="rotating-container">
      <span
        className="rotating-wheel"
        style={{
          transform: `translateY(-${currentIndex * (100 / extendedWords.length)}%)`,
          transition: transitionEnabled ? 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedWords.map((word, idx) => {
          const isActive = idx === currentIndex || (currentIndex >= rotatingWords.length && idx === 0);
          return (
            <span
              key={idx}
              className={`rotating-word ${isActive ? 'word-active' : ''}`}
            >
              {word}
            </span>
          );
        })}
      </span>
    </span>
  );
}


function About({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  // Toggle body class for black header styling
  useEffect(() => {
    document.body.classList.add('about-header-theme');
    return () => {
      document.body.classList.remove('about-header-theme');
    };
  }, []);

  // SEO Meta-data binding
  usePageMetadata('About Us | Zinkly', 'Discover how Zinkly fuels business transformation with advanced technology, custom web architectures, and seamless automation pipelines.');
  
  // Hardware-accelerated Scroll Reveal triggering
  useScrollReveal();

  const handleMouseEnterButton = () => {
    if (setCursorText && setIsCursorActive) {
      setCursorText("Talk");
      setIsCursorActive(true);
    }
  };

  const handleMouseLeaveButton = () => {
    if (setIsCursorActive) {
      setIsCursorActive(false);
    }
  };

  return (
    <div className="about-page-wrapper">
      {/* Dynamic Background Glows (shifted down to keep hero pure white) */}
      <div className="about-decor-glow mid-left" style={{ top: '65%' }}></div>

      {/* 1. ABOUT US BANNER SECTION */}
      <section className="about-banner-sec">
        <h1 className="about-banner-title">
          Scale Your <RotatingText /> <br /> with Ingenious Engineering
        </h1>
        <p className="about-banner-desc">
          At Zinkly, we architect high-performance software systems, low-latency headless web portals, 
          and custom cloud-native automation pipelines engineered to support global scale.
        </p>
      </section>

      {/* 2. LOGO MARQUEE SECTION */}
      <section className="logo-marquee-sec">
        {/* Layer 1: Scrolling Left */}
        <div className="logo-marquee-container">
          <div className="logo-marquee-track track-left">
            {[...Array(6)].flatMap(() => row1Brands).map((brand, idx) => {
              const Icon = brand.Icon;
              return (
                <div key={`row1-${idx}`} className="logo-marquee-item">
                  <span className="marquee-logo-icon">
                    <Icon />
                  </span>
                  <span className="marquee-logo-name">{brand.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Layer 2: Scrolling Right */}
        <div className="logo-marquee-container" style={{ marginTop: '24px' }}>
          <div className="logo-marquee-track track-right">
            {[...Array(4)].flatMap(() => row2Brands).map((brand, idx) => {
              const Icon = brand.Icon;
              return (
                <div key={`row2-${idx}`} className="logo-marquee-item">
                  <span className="marquee-logo-icon">
                    <Icon />
                  </span>
                  <span className="marquee-logo-name">{brand.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COUNT/STATS SECTION */}
      <section className="about-count-sec reveal reveal-up">
        <div className="count-sec-left">
          <h2 className="count-sec-heading">
            Empowering your <br />
            success <span className="accent-muted">with our <br /> solutions</span>
          </h2>
        </div>

        <div className="count-sec-right">
          <div className="about-stat-card">
            <div className="about-stat-num">
              <CountUpNumber end={15} suffix="k" />
            </div>
            <div className="about-stat-label">Global Downloads</div>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-num">
              <CountUpNumber end={20} prefix="$" suffix="M" />
            </div>
            <div className="about-stat-label">Return Investment</div>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-num">
              <CountUpNumber end={200} suffix="+" />
            </div>
            <div className="about-stat-label">5-Star Reviews</div>
          </div>

          <div className="about-stat-card">
            <div className="about-stat-num">
              <CountUpNumber end={500} />
            </div>
            <div className="about-stat-label">Projects Completed</div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US DESCRIPTION SECTION */}
      <section className="about-desc-sec reveal reveal-up">
        <div className="about-desc-container">
          <p className="about-desc-paragraph">
            Struggling to stay organized, our users found the perfect solution with Zinkly. By simplifying task management and boosting team collaboration, they've achieved more in less time. <span className="text-fade-1">Join thousands </span><span className="text-fade-2">who've transformed chaos into productivity</span>
          </p>
        </div>
      </section>

      {/* 5. DETAILED SERVICES SECTION (6 Alternating Layouts) */}
      <section className="detailed-services-sec">
        
        {/* Subsection 1: Web Development (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Web Development</span>
            <h2 className="service-item-title">
              Bespoke Headless <br />
              <span className="accent-green">Web Solutions</span>
            </h2>
            <p className="service-item-desc">
              We design and engineer high-performance web systems tailored to your specific brand identity. By utilizing headless architectures, static site generation, and optimized content delivery networks, Zinkly guarantees lightning-fast loading speeds, superior SEO performance, and bulletproof security.
            </p>
          </div>
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Zinkly Advanced Web Engineering and Headless Architectures" />
          </div>
        </div>

        {/* Subsection 2: Application Development (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" alt="Zinkly Mobile App Engineering & Enterprise SaaS Portals" />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">App Development</span>
            <h2 className="service-item-title">
              High-Scale Mobile & <br />
              <span className="accent-green">Enterprise Apps</span>
            </h2>
            <p className="service-item-desc">
              From enterprise SaaS portals to consumer mobile apps, Zinkly engineers secure, data-driven systems optimized for cross-platform efficiency. We build responsive and responsive architectures using React Native, Flutter, and native frameworks to ensure top-notch performance.
            </p>
          </div>
        </div>

        {/* Subsection 3: Automation (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Automation</span>
            <h2 className="service-item-title">
              Intelligent Pipeline & <br />
              <span className="accent-green">Workflow Automation</span>
            </h2>
            <p className="service-item-desc">
              Eliminate friction and human error. Zinkly designs advanced robotic process automations (RPA), custom database sync pipelines, and continuous integration triggers to automate your most critical business tasks, saving thousands of developer hours.
            </p>
          </div>
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" alt="Zinkly Intelligent Automation pipelines and cloud syncs" />
          </div>
        </div>

        {/* Subsection 4: IT Consultation (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" alt="Zinkly IT Consultation, roadmap definitions, and technical planning" />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">IT Consultation</span>
            <h2 className="service-item-title">
              Expert Strategic & <br />
              <span className="accent-green">Technical Consultation</span>
            </h2>
            <p className="service-item-desc">
              We define technical roadmaps, architectural strategies, cloud-native readiness, and secure compliance audits to align your software engineering stack with your global business objectives.
            </p>
          </div>
        </div>

        {/* Subsection 5: Digital Marketing (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Digital Marketing</span>
            <h2 className="service-item-title">
              Data-Driven Campaigns & <br />
              <span className="accent-green">Growth Marketing</span>
            </h2>
            <p className="service-item-desc">
              Amplify your brand reach, drive high-intent conversion traffic, and dominate channels. Zinkly designs robust digital ad funnels, performance metrics analytics, and multi-channel campaigns.
            </p>
          </div>
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Zinkly Performance Marketing, Google Ads and conversion dashboards" />
          </div>
        </div>

        {/* Subsection 6: Search Engine Optimization (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80" alt="Zinkly Search Engine Optimization, keyword ranking index metrics" />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">SEO</span>
            <h2 className="service-item-title">
              Authority Architecture & <br />
              <span className="accent-green">Search Ranking Domination</span>
            </h2>
            <p className="service-item-desc">
              Capture search intent and scale organic traffic. We specialize in deep technical SEO audits, keyword gap architectures, Core Web Vitals optimization, and high-quality link-building programs.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}


export default About;
