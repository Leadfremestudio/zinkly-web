import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import usePageMetadata from "../hooks/usePageMetadata";
import useScrollReveal from "../hooks/useScrollReveal";
import { motion } from "motion/react";
import "./Solutions.css";

// Import Video
import solutionsVideo from "../assets/videos/Solutions_Animation_4d19aed67d.mp4";

// Import Images
import bespokeWebImg from "../assets/oursolution/BespokeHeadlesWeb Solutions.avif";
import bespokeHeadlessImg from "../assets/oursolution/BespokeHeadless.avif";
import dataDrivenImg from "../assets/oursolution/Data-DrivenCampaigns &GrowthMarketing.avif";
import intelligentPipelineImg from "../assets/oursolution/IntelligentPipeline.avif";
import scalableArchImg from "../assets/oursolution/ScalableArchitetureCustomSoftareSystems.avif";
import computerLabImg from "../assets/oursolution/modern-equipped-computer-lab.jpg.avif";



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

    // Explicitly guarantee play is invoked when video is active
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
              src={bespokeWebImg}
              alt="Zinkly Advanced Web Engineering and Headless Architectures"
            />
          </div>
        </div>

        {/* Subsection 2: Application Development (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src={bespokeHeadlessImg}
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
              src={intelligentPipelineImg}
              alt="Zinkly Intelligent Automation pipelines and cloud syncs"
            />
          </div>
        </div>

        {/* Subsection 4: IT Consultation (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src={computerLabImg}
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
              src={dataDrivenImg}
              alt="Zinkly Performance Marketing, Google Ads and conversion dashboards"
            />
          </div>
        </div>

        {/* Subsection 6: Custom Software Development (Left Image, Right Content, Grey Background) */}
        <div className="detailed-service-item bg-grey reveal reveal-up">
          <div className="service-item-image">
            <img
              src={scalableArchImg}
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
