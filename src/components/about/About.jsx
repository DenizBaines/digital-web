// File: components/about/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-titlee">ABOUT US</h1>
              <div className="title-divider"></div>
              <h2 className="hero-subtitle">PROFESSIONAL. PERSONAL. PRECISE.</h2>
              <p className="hero-description">
                With over 30 years of experience in the premium and luxury market,
                we have developed extensive personal connections in various media,
                a global network of team members and partners, numerous satisfied
                clients & success stories, and above all, a keen eye for luxury.
              </p>
              <p className="hero-description">
                We bring our expertise, creativity, and passion to every assignment
                while executing goals with surgical precision. What sets us apart is
                our ability to combine innovation with tradition.
              </p>
            </div>
            
            <div className="hero-image">
              <div className="main-image-container">
                <img 
                  src="/images/social-about.jpg" 
                  alt="Professional Team Environment" 
                  className="main-image" 
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="message-section">
        <div className="message-container">
          <div className="message-content">
            <h2 className="message-title">
              WE CONVEY MESSAGES THAT ARE HEARD. SEEN. REMEMBERED.
            </h2>
            <div className="message-divider"></div>
            
            <div className="message-text">
              <p>
                At WHITE Communications, your message is paramount. We do everything
                in our power to communicate your brand in a luxurious but strategic
                way: classic print ads or outdoor advertising? Online campaigns or
                guerrilla marketing? Product placement on and offline? Radio or TV
                commercials?
              </p>
              
              <p>
                We analyze the efficacy and efficiency of every single
                presence in all disciplines. Only then do we present our clients with
                tailor-made solutions. For messages that are actually heard. By the
                right consumers.
              </p>
              
              <p>
                Thanks to our worldwide media buying, you can always
                count on us to be competitive. A customized communications mix includes
                the best-possible prices in every single media channel, the exact
                timing, the right frequency, the ideal geography, and a bespoke target
                group. We leave nothing to chance.
              </p>
            </div>
          </div>
        </div>
      </section>
     
      
    

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
              </div>
              <h3 className="value-title">Professional</h3>
              <p className="value-description">
                Delivering excellence through expertise and unwavering commitment to quality.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="value-title">Personal</h3>
              <p className="value-description">
                Building meaningful relationships and understanding each client's unique vision.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
              </div>
              <h3 className="value-title">Precise</h3>
              <p className="value-description">
                Executing every detail with surgical precision and strategic accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;