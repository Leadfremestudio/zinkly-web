import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: "What verticals/niches are supported?",
    answer: "We support a broad range of high-performance industries including Enterprise E-Commerce, Financial Services (Fintech), Supply Chain & Logistics, Healthcare, and Traditional Heritage Tourism. Our systems are tailored to handle specific compliance frameworks such as HIPAA, SOC2, and ISO certifications."
  },
  {
    question: "How does Zinkly work with my business?",
    answer: "We act as your dedicated engineering and transformation partner. We start with a 48-hour discovery sprint, draft a robust cloud system architecture blueprint, and deploy dedicated agile development sprint teams. You receive constant updates via Slack, Jira, and live staging environments."
  },
  {
    question: "What if I don't like the designs or strategies?",
    answer: "We employ an iterative, feedback-driven design system process. You are involved in interactive wireframing and prototyping phases. If a strategy or visual blueprint doesn't meet your expectations, we revise it before writing a single line of production code."
  },
  {
    question: "Can I see an example of the Zinkly work?",
    answer: "Absolutely! You can browse our Bento Flagship Projects on our case studies page, which showcases live web platforms, high-traffic reservation architectures, and automated CRM pipelines built for international clients."
  },
  {
    question: "Is Zinkly compliant and secure?",
    answer: "Yes, security is built into our core architectures. We deliver robust server vaults, encrypted data pipelines, secure API integrations, and ISO-compliant database designs. All intellectual property, source code, and cloud repositories are 100% transferred to you upon project sign-off."
  },
  {
    question: "What if my competitor is using Zinkly?",
    answer: "We maintain strict non-disclosure agreements (NDAs) and sandbox isolation protocols. Your strategic advantages, proprietary automation scripts, and custom source codes are legally protected and never shared or duplicated across vertical competitors."
  },
  {
    question: "I can do this myself, why do I need Zinkly?",
    answer: "While internal teams can build basic systems, Zinkly provides senior-level software architecture expertise, proven security compliance roadmaps, and next-generation speed optimization. We save your internal teams months of trial-and-error, ensuring a fast time-to-market."
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
            {faqItems.slice(4, 7).map((item, idx) => {
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
