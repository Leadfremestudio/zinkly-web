import { useState, useEffect } from "react";
import contactBg from "../assets/contact-bg-clean.webp";
import { motion } from "motion/react";
import usePageMetadata from "../hooks/usePageMetadata";
import "./Contact.css";

function Contact() {
  usePageMetadata(
    "Contact Us",
    "Connect with Zinkly's custom software development and IT consulting team. Contact us for scalable software systems, web application architectures, and automation solutions in Thrissur, Kerala, India."
  );

  useEffect(() => {
    document.body.classList.add("solutions-header-theme");
    return () => {
      document.body.classList.remove("solutions-header-theme");
    };
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
    });
  };

  return (
    <motion.main 
      className="contact-page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Upper Section: Background Image & Contact Form */}
      <section className="contact-sec">
        <div
          className="contact-bg-wrapper"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="contact-main-container">
            <div className="contact-grid">
              {/* Left Column: Headline */}
              <div className="contact-left-col">
              </div>

              {/* Right Column: Form Card */}
              <div className="contact-right-col">
                <form className="contact-form-card" onSubmit={handleSubmit}>
                  <h2 className="form-card-title">What can we do for you?</h2>

                  <div className="form-input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="form-input-field"
                    />
                  </div>

                  <div className="form-input-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="form-input-field"
                    />
                  </div>

                  <div className="form-input-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      className="form-input-field"
                    />
                  </div>

                  <div className="form-input-group textarea-group">
                    <textarea
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="form-textarea-field"
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-button">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lower Section: Contact details in light grey container */}
      <section className="contact-second-sec">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            <div className="info-block">
              <h3 className="info-block-title">CONTACT ADDRESS</h3>
              <p className="info-block-text">
                5th Floor, CHOWALUR TOWER, AYYANTHOLE, <br />
                Thrissur- 680004, Kerala
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-block-title">CONTACT CONTACTS</h3>
              <a
                href="mailto:zinkly.contact@gmail.com"
                className="info-block-link"
              >
                zinkly.contact@gmail.com
              </a>
              <a href="tel:+917558077856" className="info-block-link">
                +91 755 807 7856
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Contact;
