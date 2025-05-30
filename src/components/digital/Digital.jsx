import React from "react";
import "./Digital.css";

const Digital = () => {
  return (
    <div className="digital-container">
      <section className="hero">
        <h1>We Create Digital Impact</h1>
        <p>Design. Develop. Inspire. We shape digital experiences for tomorrow.</p>
      </section>

      <section className="features">
        <div className="feature-box">
          <h2>Design</h2>
          <p>Bold interfaces that speak. We turn ideas into stunning visuals.</p>
        </div>
        <div className="feature-box">
          <h2>Technology</h2>
          <p>Clean code. Fast performance. Built for scale and beauty.</p>
        </div>
        <div className="feature-box">
          <h2>Strategy</h2>
          <p>Smart moves that drive growth. We blend creativity with analytics.</p>
        </div>
      </section>

      <section className="showcase">
        <div className="image-block">
          <img src="images/proj1.jpg" alt="Digital Project 1" />
          <p>Transforming eCommerce Experience</p>
        </div>
        <div className="image-block">
          <img src="images/proj2.jpg" alt="Digital Project 2" />
          <p>Reimagining Modern Branding</p>
        </div>
      </section>

      <section className="cta">
        <h2>Let’s Build Something Bold Together</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Digital;
