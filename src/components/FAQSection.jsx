import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: "How do you ensure my website represents my brand?",
    answer: "We don't just build websites—we create digital experiences. Every project begins by understanding your business, target audience, and brand identity so that the final product reflects your vision while delivering an intuitive user experience."
  },
  {
    question: "What makes Zinkly different from other software development companies?",
    answer: "We focus on creating technology that solves business problems—not just writing code. Our team combines technical expertise, strategic thinking, and a user-first approach to deliver scalable, future-ready digital solutions that generate measurable business value."
  },
  {
    question: "Can you automate our existing business workflows?",
    answer: "Yes. We help businesses transform manual, time-consuming processes into intelligent automated workflows. By integrating your existing systems and digitizing routine operations, we improve operational efficiency, minimize errors, accelerate decision-making, and enable your team to focus on higher-value work."
  },
  {
    question: "What makes your team qualified to handle complex projects?",
    answer: "Our multidisciplinary team has experience delivering projects across diverse industries and technologies. By combining technical expertise, industry best practices, and a collaborative approach, we build solutions that are secure, scalable, and designed for long-term success."
  },
  {
    question: "What industries do you serve?",
    answer: "We work with businesses of all sizes, from startups to large enterprises, across industries including education, healthcare, retail, logistics, finance, manufacturing, hospitality, and professional services. Every solution is tailored to the unique needs and objectives of each client."
  },
  {
    question: "How do you ensure the quality and security of your solutions?",
    answer: "Quality and security are integrated into every stage of our development process. We follow industry best practices, conduct rigorous testing, perform code reviews, implement secure development standards, and carry out User Acceptance Testing (UAT) before deployment. Our goal is to deliver reliable, high-performing, and secure digital solutions."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes. Our relationship with clients extends beyond project delivery. We offer ongoing maintenance, performance monitoring, security updates, bug fixes, backups, feature enhancements, and technical support to ensure your solution continues to perform efficiently as your business evolves"
  },
  {
    question: "Do you have expertise in Artificial Intelligence (AI)?",
    answer: "Yes. Our team specializes in developing AI-powered solutions that help businesses automate processes, improve decision-making, and enhance customer experiences. From intelligent chatbots and document processing to predictive analytics and AI integrations, we build solutions that deliver measurable business value."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper">
      <div className="faq-container">
        {/* Header Area */}
        <div className="faq-header">
          <span className="faq-badge">QUESTIONS & ANSWERS</span>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
        </div>

        {/* 2-Column Grid matching Design Reference */}
        <div className="faq-grid">
          {/* Column 1 */}
          <div className="faq-col">
            {faqItems.slice(0, 4).map((item, idx) => {
              const actualIdx = idx;
              const isOpen = openIndex === actualIdx;
              return (
                <div 
                  key={actualIdx} 
                  className={`faq-card-box ${isOpen ? 'is-open' : ''}`}
                >
                  <button 
                    className="faq-trigger-btn"
                    onClick={() => toggleFAQ(actualIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon-plus">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer-panel">
                    <div className="faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="faq-col">
            {faqItems.slice(4, 8).map((item, idx) => {
              const actualIdx = idx + 4;
              const isOpen = openIndex === actualIdx;
              return (
                <div 
                  key={actualIdx} 
                  className={`faq-card-box ${isOpen ? 'is-open' : ''}`}
                >
                  <button 
                    className="faq-trigger-btn"
                    onClick={() => toggleFAQ(actualIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon-plus">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer-panel">
                    <div className="faq-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom-right Contact CTA card matching design reference */}
            <div className="faq-card-box faq-cta-card-box">
              <div className="faq-cta-content">
                <span className="faq-question">Couldn't find an answer you're looking for?</span>
                <Link to="/contact" className="faq-contact-pill-btn">
                  <span>Contact Us</span>
                  <span className="faq-arrow-circle">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
