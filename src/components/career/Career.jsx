// File: components/career/Career.jsx
import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Marketing Strategist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead strategic marketing initiatives for luxury brands and premium clients. Develop comprehensive marketing campaigns that resonate with high-end consumers.",
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "5+ years of experience in luxury brand marketing",
        "Strong analytical and strategic thinking skills",
        "Experience with digital marketing platforms",
        "Excellent communication and presentation skills"
      ],
      responsibilities: [
        "Develop and execute marketing strategies for premium clients",
        "Analyze market trends and consumer behavior",
        "Collaborate with creative teams on campaign development",
        "Manage client relationships and presentations",
        "Oversee campaign performance and optimization"
      ]
    },
    {
      id: 2,
      title: "Creative Director",
      department: "Creative",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "7+ years",
      description: "Lead creative vision and direction for premium brand campaigns. Oversee creative teams and ensure exceptional quality in all deliverables.",
      requirements: [
        "Bachelor's degree in Design, Fine Arts, or related field",
        "7+ years of creative leadership experience",
        "Portfolio showcasing luxury brand work",
        "Proficiency in Adobe Creative Suite",
        "Strong leadership and team management skills"
      ],
      responsibilities: [
        "Lead creative strategy and concept development",
        "Manage and mentor creative teams",
        "Present creative concepts to clients",
        "Ensure brand consistency across all touchpoints",
        "Stay current with design trends and innovations"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Digital",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3+ years",
      description: "Execute digital marketing campaigns across multiple channels. Focus on luxury and premium brand digital presence and engagement.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "3+ years of digital marketing experience",
        "Experience with social media platforms and paid advertising",
        "Knowledge of SEO/SEM best practices",
        "Analytics and data interpretation skills"
      ],
      responsibilities: [
        "Manage social media accounts and content strategy",
        "Execute paid advertising campaigns",
        "Monitor and analyze digital performance metrics",
        "Collaborate with creative teams on digital assets",
        "Stay updated on digital marketing trends"
      ]
    },
    {
      id: 4,
      title: "Account Manager",
      department: "Client Services",
      location: "Miami, FL",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage relationships with premium clients and ensure exceptional service delivery. Act as primary point of contact for luxury brand partnerships.",
      requirements: [
        "Bachelor's degree in Business, Communications, or related field",
        "4+ years of account management experience",
        "Experience working with luxury or premium brands",
        "Excellent interpersonal and communication skills",
        "Strong organizational and project management abilities"
      ],
      responsibilities: [
        "Manage client relationships and communications",
        "Coordinate project timelines and deliverables",
        "Present campaign results and recommendations",
        "Identify opportunities for account growth",
        "Ensure client satisfaction and retention"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  const openJobModal = (job) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, position: job.title }));
  };

  const closeJobModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-container">
          <div className="career-hero-content">
            <h1 className="career-hero-title">JOIN OUR TEAM</h1>
            <div className="career-title-divider"></div>
            <h2 className="career-hero-subtitle">SHAPE THE FUTURE OF DIGITAL MARKETING</h2>
            <p className="career-hero-description">
              Be part of an exceptional team that crafts premium experiences for the world's 
              most prestigious brands. We're looking for passionate professionals who share 
              our commitment to excellence, innovation, and precision.
            </p>
            <div className="career-hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">30+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">50+</span>
                <span className="hero-stat-label">Team Members</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">200+</span>
                <span className="hero-stat-label">Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="why-join-container">
          <h2 className="section-title">Why Choose Blue Sage?</h2>
          <div className="section-divider"></div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="benefit-title">Premium Benefits</h3>
              <p className="benefit-description">
                Comprehensive healthcare, dental, vision, and retirement plans with competitive compensation packages.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="benefit-title">Growth Opportunities</h3>
              <p className="benefit-description">
                Continuous learning, mentorship programs, and clear career advancement paths in a dynamic environment.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3 className="benefit-title">Work-Life Balance</h3>
              <p className="benefit-description">
                Flexible schedules, remote work options, and generous PTO to maintain a healthy work-life integration.
              </p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="benefit-title">Collaborative Culture</h3>
              <p className="benefit-description">
                Work with industry leaders in a supportive environment that values creativity, innovation, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="jobs-section">
        <div className="jobs-container">
          <h2 className="section-title">Current Openings</h2>
          <div className="section-divider"></div>
          <div className="jobs-grid">
            {jobOpenings.map(job => (
              <div key={job.id} className="job-card" onClick={() => openJobModal(job)}>
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-department">{job.department}</div>
                </div>
                <div className="job-details">
                  <div className="job-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {job.location}
                  </div>
                  <div className="job-type">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    {job.type}
                  </div>
                  <div className="job-experience">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    {job.experience}
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <button className="apply-button">
                  View Details & Apply
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12,5 19,12 12,19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <div className="job-modal-overlay" onClick={closeJobModal}>
          <div className="job-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedJob.title}</h2>
              <button className="close-button" onClick={closeJobModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            
            <div className="modal-content">
              <div className="job-info">
                <div className="job-meta">
                  <span className="meta-item">{selectedJob.department}</span>
                  <span className="meta-item">{selectedJob.location}</span>
                  <span className="meta-item">{selectedJob.type}</span>
                  <span className="meta-item">{selectedJob.experience}</span>
                </div>
                
                <div className="job-section">
                  <h3>Job Description</h3>
                  <p>{selectedJob.description}</p>
                </div>
                
                <div className="job-section">
                  <h3>Requirements</h3>
                  <ul>
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="job-section">
                  <h3>Responsibilities</h3>
                  <ul>
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="application-form">
                <h3>Apply for this Position</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="experience">Years of Experience</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows="4"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="resume">Resume *</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Submit Application
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;