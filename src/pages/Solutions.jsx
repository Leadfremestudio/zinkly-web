import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import usePageMetadata from "../hooks/usePageMetadata";
import useScrollReveal from "../hooks/useScrollReveal";
import { motion } from "motion/react";
import "./Solutions.css";

// Import Video
import solutionsVideo from "../assets/videos/Solutions_Animation_4d19aed67d.mp4";

// Crisp, high-end vector SVG brand logos for Logo Marquee Section
const BrandLogos = {
  TaskUs: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  ),
  Tasktop: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 8 8 12 12 16" />
      <line x1="16" y1="12" x2="8" y2="12" />
    </svg>
  ),
  Taskode: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Taskrabbit: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  Smartcat: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Spherule: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Boltshift: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Lightbox: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  ),
  AcmeCorp: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    </svg>
  ),
  Nietzsche: () => (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="brand-svg"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
};

// Row 1 Brands
const row1Brands = [
  { name: "TaskUs", Icon: BrandLogos.TaskUs },
  { name: "TASKTOP", Icon: BrandLogos.Tasktop },
  { name: "taskode", Icon: BrandLogos.Taskode },
  { name: "taskrabbit", Icon: BrandLogos.Taskrabbit },
];

// Row 2 Brands
const row2Brands = [
  { name: "Smartcat", Icon: BrandLogos.Smartcat },
  { name: "Spherule", Icon: BrandLogos.Spherule },
  { name: "Boltshift", Icon: BrandLogos.Boltshift },
  { name: "Lightbox", Icon: BrandLogos.Lightbox },
  { name: "Acme Corp", Icon: BrandLogos.AcmeCorp },
  { name: "Nietzsche", Icon: BrandLogos.Nietzsche },
];

function Solutions() {
  usePageMetadata(
    "Our Solutions",
    "Technology should empower businesses, not complicate them. At Zinkly, we build intelligent digital solutions that help organizations innovate faster, streamline operations, and unlock sustainable growth.",
  );

  const videoRef = useRef(null);

  // Sync scroll reveals on content reveal classes
  useScrollReveal();

  // Sync video play and clean header styles
  useEffect(() => {
    // Enable light theme header on body
    document.body.classList.add("solutions-header-theme");

    // Explicitly guarantee play is invoked on mount
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked or video error:", err);
      });
    }

    return () => {
      document.body.classList.remove("solutions-header-theme");
    };
  }, []);

  return (
    <motion.div 
      className="solutions-page-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. SOLUTIONS HERO SECTION */}
      <section className="solutions-hero-banner">
        {/* Dynamic moving green blurred gradient particles */}
        <div className="solutions-moving-particle particle-1"></div>
        <div className="solutions-moving-particle particle-2"></div>

        {/* Centered Single Video Player (max-width adjusted for screen size) */}
        <div className="solutions-hero-video-container">
          <video
            ref={videoRef}
            src={solutionsVideo}
            className="solutions-hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* Heading & description text directly UNDER the video */}
        <div className="solutions-hero-content">
          <h1 className="solutions-page-title">Our Solutions.</h1>
          <p className="solutions-page-subtitle paragraph-text">
            Technology should empower businesses, not complicate them. At Zinkly, we build intelligent digital solutions that help organizations innovate faster, streamline operations, and unlock sustainable growth.
          </p>
        </div>
      </section>

      {/* 2. LOGO MARQUEE SECTION (Pasted from About page) */}
      <section className="logo-marquee-sec">
        <div className="logo-marquee-container">
          <div className="logo-marquee-track track-left">
            {[...Array(6)]
              .flatMap(() => row1Brands)
              .map((brand, idx) => {
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

        <div className="logo-marquee-container" style={{ marginTop: "24px" }}>
          <div className="logo-marquee-track track-right">
            {[...Array(4)]
              .flatMap(() => row2Brands)
              .map((brand, idx) => {
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

      {/* 4. ABOUT US DESCRIPTION SECTION (Pasted from About page) */}
      <section className="about-desc-sec reveal reveal-up">
        <div className="about-desc-container">
          <p className="about-desc-paragraph">
            Every business has unique challenges, and every solution should be just as unique. At Zinkly, we combine technical expertise with strategic thinking to create digital products that are secure, scalable, and built for long-term success.{" "}
            <span className="text-fade-1">Whether you're launching a new product, modernizing existing systems, or automating business operations, </span>
            <span className="text-fade-2">
              we help transform your vision into technology that delivers real business value.
            </span>
          </p>
        </div>
      </section>

      {/* 5. DETAILED SERVICES SECTION (6 Alternating Layouts) (Pasted from About page) */}
      <section className="detailed-services-sec">
        {/* Subsection 1: Web Development (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Web Development</span>
            <h2 className="service-item-title">
              Bespoke Headless <br />
              <span className="accent-blue">Web Solutions</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              We design and engineer high-performance web systems tailored to
              your specific brand identity. By utilizing headless architectures,
              static site generation, and optimized content delivery networks,
              Zinkly guarantees lightning-fast loading speeds, superior SEO
              performance, and bulletproof security.
            </p>
          </div>
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly Advanced Web Engineering and Headless Architectures"
            />
          </div>
        </div>

        {/* Subsection 2: Application Development (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly Mobile App Engineering & Enterprise SaaS Portals"
            />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">App Development</span>
            <h2 className="service-item-title">
              High-Scale Mobile & <br />
              <span className="accent-purple">Enterprise Apps</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              From enterprise SaaS portals to consumer mobile apps, Zinkly
              engineers secure, data-driven systems optimized for cross-platform
              efficiency. We build responsive and responsive architectures using
              React Native, Flutter, and native frameworks to ensure top-notch
              performance.
            </p>
          </div>
        </div>

        {/* Subsection 3: Automation (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Automation</span>
            <h2 className="service-item-title">
              Intelligent Pipeline & <br />
              <span className="accent-orange">Workflow Automation</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              Eliminate friction and human error. Zinkly designs advanced
              robotic process automations (RPA), custom database sync pipelines,
              and continuous integration triggers to automate your most critical
              business tasks, saving thousands of developer hours.
            </p>
          </div>
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly Intelligent Automation pipelines and cloud syncs"
            />
          </div>
        </div>

        {/* Subsection 4: IT Consultation (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly IT Consultation, roadmap definitions, and technical planning"
            />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">IT Consultation</span>
            <h2 className="service-item-title">
              Expert Strategic & <br />
              <span className="accent-teal">Technical Consultation</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              We define technical roadmaps, architectural strategies,
              cloud-native readiness, and secure compliance audits to align your
              software engineering stack with your global business objectives.
            </p>
          </div>
        </div>

        {/* Subsection 5: Digital Marketing (Left Content, Right Image, White Background) */}
        <div className="detailed-service-item reveal reveal-up">
          <div className="service-item-content">
            <span className="service-item-badge">Digital Marketing</span>
            <h2 className="service-item-title">
              Data-Driven Campaigns & <br />
              <span className="accent-red">Growth Marketing</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              Amplify your brand reach, drive high-intent conversion traffic,
              and dominate channels. Zinkly designs robust digital ad funnels,
              performance metrics analytics, and multi-channel campaigns.
            </p>
          </div>
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly Performance Marketing, Google Ads and conversion dashboards"
            />
          </div>
        </div>

        {/* Subsection 6: Custom Software Development (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Zinkly Custom Software Development, IDE editor with React code"
            />
          </div>
          <div className="service-item-content">
            <span className="service-item-badge">Software</span>
            <h2 className="service-item-title">
              Scalable Architecture & <br />
              <span className="accent-green">Custom Software Systems</span>
            </h2>
            <p className="service-item-desc paragraph-text">
              Build future-proof digital tools tailored to your business operations. We design, engineer, and deploy high-performance web systems, cloud architectures, customized APIs, and automation tools built to scale.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Solutions;
