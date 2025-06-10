import React, { useState } from 'react';
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
  { 
    title: 'Social Media Management', 
    img: socialMedia,
    description: 'Comprehensive social media strategy and management across all major platforms. We create engaging content, manage your online presence, and build meaningful connections with your audience.',
    features: ['Content Strategy & Planning', 'Daily Posting & Scheduling', 'Community Management', 'Analytics & Reporting', 'Hashtag Research', 'Competitor Analysis'],
    pricing: 'Starting from $299/month'
  },
  { 
    title: 'Content Creation', 
    img: contentCreation,
    description: 'High-quality content creation that tells your brand story and engages your target audience. From blog posts to social media content, we craft compelling narratives.',
    features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'Product Descriptions', 'Press Releases', 'Brand Storytelling'],
    pricing: 'Starting from $199/month'
  },
  { 
    title: 'Website Development', 
    img: websiteDev,
    description: 'Custom web development solutions using modern technologies. We build fast, secure, and scalable websites that deliver exceptional user experiences.',
    features: ['Custom Web Applications', 'E-commerce Development', 'CMS Integration', 'API Development', 'Database Design', 'Performance Optimization'],
    pricing: 'Starting from $2,999'
  },
  { 
    title: 'Website Design', 
    img: websiteDesign,
    description: 'Beautiful, user-centric web designs that convert visitors into customers. We focus on creating intuitive interfaces that reflect your brand identity.',
    features: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'Prototyping', 'Brand Integration', 'User Research'],
    pricing: 'Starting from $1,499'
  },
  { 
    title: 'SEO', 
    img: seo,
    description: 'Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic to your website. We use proven techniques and stay updated with algorithm changes.',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Local SEO', 'SEO Audits'],
    pricing: 'Starting from $399/month'
  },
  { 
    title: 'Video Editing', 
    img: videoEditing,
    description: 'Professional video editing services for all your content needs. From promotional videos to social media clips, we bring your vision to life.',
    features: ['Corporate Videos', 'Social Media Clips', 'Product Demos', 'Event Coverage', 'Motion Graphics', 'Color Grading'],
    pricing: 'Starting from $99/video'
  },
  { 
    title: 'Graphic Design', 
    img: graphicDesign,
    description: 'Creative graphic design solutions that make your brand stand out. We create visually stunning designs that communicate your message effectively.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Social Media Graphics', 'Print Design', 'Packaging Design'],
    pricing: 'Starting from $149/design'
  },
  { 
    title: 'Creative Photoshoots', 
    img: photoshoot,
    description: 'Professional photography services for all your business needs. We capture high-quality images that showcase your products, team, and brand story.',
    features: ['Product Photography', 'Corporate Headshots', 'Event Photography', 'Lifestyle Shoots', 'E-commerce Photos', 'Brand Photography'],
    pricing: 'Starting from $499/session'
  },
  { 
    title: 'Branding', 
    img: branding,
    description: 'Complete brand identity solutions that help you stand out in the market. We create cohesive brand experiences that resonate with your target audience.',
    features: ['Brand Strategy', 'Logo & Identity Design', 'Brand Guidelines', 'Brand Messaging', 'Visual Identity', 'Brand Positioning'],
    pricing: 'Starting from $1,999'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={index}
            onClick={() => openModal(service)}
          >
            <img src={service.img} alt={service.title} className="service-image" />
            <h3 className="service-name">{service.title}</h3>
            <div className="service-overlay">
              <span className="view-details">View Details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="modal-overlayy" onClick={closeModal}>
          <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
            <button className="modal-closee" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="modal-headerr">
              <img 
                src={selectedService.img} 
                alt={selectedService.title} 
                className="modal-imagee"
              />
              <div className="modal-title-sectionn">
                <h2 className="modal-titlee">{selectedService.title}</h2>
                <p className="modal-pricingg">{selectedService.pricing}</p>
              </div>
            </div>

            <div className="modal-bodyy">
              <div className="modal-descriptionn">
                <h3>About This Service</h3>
                <p>{selectedService.description}</p>
              </div>

              <div className="modal-featuress">
                <h3>What's Included</h3>
                <ul className="features-list">
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>
                      <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actionss">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;