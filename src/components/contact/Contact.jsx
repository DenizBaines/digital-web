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

        
         {/* WhatsApp Contact Grid */}
            <div className="whatsapp-section">
              <h2 className="section-title">Connect via WhatsApp</h2>
              
              <div className="whatsapp-grid">
                <div className="whatsapp-card">
                  <div className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="wa-icon">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                    </svg>
                  </div>
                  <div className="whatsapp-content">
                    <h3 className="whatsapp-title">General Inquiries</h3>
                    <p className="whatsapp-desc">Questions about our services or general support</p>
                    <p className="whatsapp-number">+49 89 360 766 0</p>
                  </div>
                  <button className="whatsapp-btn" onClick={() => window.open('https://wa.me/4989360766', '_blank')}>
                    <span>Chat Now</span>
                    <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>

                <div className="whatsapp-card">
                  <div className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="wa-icon">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                    </svg>
                  </div>
                  <div className="whatsapp-content">
                    <h3 className="whatsapp-title">Technical Support</h3>
                    <p className="whatsapp-desc">technical issues and implementations</p>
                    <p className="whatsapp-number">+55 11 2844 8506</p>
                  </div>
                  <button className="whatsapp-btn" onClick={() => window.open('https://wa.me/5511284485', '_blank')}>
                    <span>Chat Now</span>
                    <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>

                
                    
              
              </div>
            </div>
        
        
        
        
        
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;