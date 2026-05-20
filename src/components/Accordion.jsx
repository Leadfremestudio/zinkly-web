import { useState, useRef } from 'react';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-group">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => toggleAccordion(idx)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${idx}`}
              id={`accordion-trigger-${idx}`}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19" className="line-y"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
            <div
              id={`accordion-content-${idx}`}
              className="accordion-content"
              role="region"
              aria-labelledby={`accordion-trigger-${idx}`}
              style={{
                maxHeight: isOpen ? '300px' : '0px',
                opacity: isOpen ? 1 : 0,
                transition: 'max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s linear',
              }}
            >
              <div className="accordion-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
