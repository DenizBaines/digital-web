import React from 'react';
import './Services.css';

// Import your service images
import socialMedia from './assets/social-media.jpg';
import contentCreation from './assets/content-creation.jpg';
import websiteDev from './assets/website-development.jpg';
import websiteDesign from './assets/website-design.jpg';
import seo from './assets/seo.jpg';
import videoEditing from './assets/video-editing.jpg';
import graphicDesign from './assets/graphic-design.jpg';
import photoshoot from './assets/photoshoot.jpg';
import branding from './assets/branding.jpg'; 

const services = [
  { title: 'Social Media Management', img: socialMedia },
  { title: 'Content Creation', img: contentCreation },
  { title: 'Website Development', img: websiteDev },
  { title: 'Website Design', img: websiteDesign },
  { title: 'SEO', img: seo },
  { title: 'Video Editing', img: videoEditing },
  { title: 'Graphic Design', img: graphicDesign },
  { title: 'Creative Photoshoots', img: photoshoot },
  { title: 'Branding', img: branding }, 
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} className="service-image" />
            <h3 className="service-name">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
