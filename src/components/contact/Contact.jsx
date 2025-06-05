import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="contact-page">
      <div className="content-container">
        <div className="content-wrapper">
          
          {/* Header */}
          <div className="header-section">
            <h1 className="main-title">Contact Us</h1>
            <div className="title-divider"></div>
            <p className="subtitle">
              Ready to transform your business? Get in touch with our global team and let's create something extraordinary together.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="main-content">
            
            {/* Office Locations */}
            <div className="offices-section">
              <h2 className="section-title">Our Global Offices</h2>
              
              <div className="offices-grid">
                <div className="office-card">
                  <h3 className="office-title">Munich Headquarters</h3>
                  <div className="office-details">
                    <p>Innsbrucker Ring 15</p>
                    <p>81673 Munich, Germany</p>
                    <p className="office-phone">+49 89 360 766 0</p>
                  </div>
                </div>

                <div className="office-card">
                  <h3 className="office-title">São Paulo Office</h3>
                  <div className="office-details">
                    <p>JK Iguatemi</p>
                    <p>Av. Presidente Juscelino Kubitschek, 2.041</p>
                    <p>5º andar – Bloco B, Vila Olímpia</p>
                    <p>São Paulo - SP, Brazil</p>
                    <p className="office-phone">+55 11 2844 8506</p>
                  </div>
                </div>

                <div className="office-card">
                  <h3 className="office-title">New York Office</h3>
                  <div className="office-details">
                    <p>Spring Place</p>
                    <p>6 St Johns Lane</p>
                    <p>NY 10013, New York</p>
                    <p className="office-phone">+1 212 984 0689</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-section">
              <h2 className="section-title">Send us a message</h2>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="name-row">
                  <div className="input-group">
                    <label className="input-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label" htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label" htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, or how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  <span className="btn-content">
                    <span>Send Message</span>
                    <svg 
                      className="btn-arrow" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;