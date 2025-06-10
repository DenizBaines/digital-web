import React, { useEffect, useRef } from 'react';
import './OurIdeology.css';

const OurIdeology = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ideology-page">
      {/* Hero Section */}
      <section className="ideology-hero" ref={heroRef}>
        <div className="h">
          <div className="s"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            ELEVATE YOUR DIGITAL PRESENCE WITH US
          </h1>
          <div className="hero-subtitle">
            
           

          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="ideology-content" ref={contentRef}>
        <div className="content-container">
          <div className="quote-section">
            <div className="main-quote">
              "We believe elevated storytelling creates unforgettable brands. 
              Refined strategy, thoughtful design, and powerful content—crafted with intention."
            </div>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>✦</span>
                </div>
              </div>
              <h3>Innovation</h3>
              <p>Where cutting-edge technology meets creative vision, we push boundaries to create digital experiences that set new standards.</p>
            </div>

            <div className="philosophy-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>◊</span>
                </div>
              </div>
              <h3>Aesthetic</h3>
              <p>Beauty and function unite in our designs. Every pixel, every interaction is carefully crafted to create visual harmony.</p>
            </div>

            <div className="philosophy-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>●</span>
                </div>
              </div>
              <h3>Resonance</h3>
              <p>We don't just create brands—we birth experiences that connect deeply with audiences and leave lasting impressions.</p>
            </div>
          </div>

          <div className="manifesto-section">
            <div className="manifesto-content">
              <h2>Our Manifesto</h2>
              <p className="manifesto-text">
                Step into our world where innovation meets aesthetic. Where brands don't just exist—they resonate. 
                Let's create digital experiences that feel as good as they perform.
              </p>
              <div className="brand-signature">
                <span className="signature-line"></span>
                <span className="brand-name">Blue Sage Media</span>
                <span className="signature-line"></span>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>What Drives Us</h2>
            <div className="values-grid">
              <div className="value-item">
                <h4>Refined Strategy</h4>
                <p>Every decision backed by deep understanding and purposeful planning.</p>
              </div>
              <div className="value-item">
                <h4>Thoughtful Design</h4>
                <p>Where form meets function in perfect harmony, creating intuitive experiences.</p>
              </div>
              <div className="value-item">
                <h4>Powerful Content</h4>
                <p>Stories that move, inspire, and drive action—crafted with intention and impact.</p>
              </div>
              <div className="value-item">
                <h4>Elevated Storytelling</h4>
                <p>Transforming brand narratives into unforgettable journeys that resonate deeply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurIdeology;