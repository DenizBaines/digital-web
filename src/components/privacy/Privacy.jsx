import React, { useEffect, useRef } from 'react';
import './Privacy.css';

const Privacy = () => {
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

  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you contact us, request services, or subscribe to our newsletter. This may include your name, email address, phone number, company information, and project details."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device and usage patterns when you visit our website, including IP address, browser type, operating system, and pages visited."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies and similar technologies to enhance your experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, communicate with you about projects, and deliver the digital solutions you've requested."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you updates about our services, industry insights, and promotional materials. You can opt out of marketing communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns and feedback to improve our website functionality, user experience, and service offerings."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or providing services to you."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Update",
          text: "You have the right to access, update, or correct your personal information. Contact us if you need to make changes to your data."
        },
        {
          subtitle: "Data Portability",
          text: "You may request a copy of your personal information in a structured, commonly used format."
        },
        {
          subtitle: "Deletion Rights",
          text: "You can request deletion of your personal information, subject to certain legal and business requirements."
        },
        {
          subtitle: "Marketing Opt-Out",
          text: "You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly."
        }
      ]
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      content: [
        {
          subtitle: "External Websites",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies."
        }
      ]
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Cross-Border Processing",
          text: "Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers."
        }
      ]
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: [
        {
          subtitle: "Age Restrictions",
          text: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."
        }
      ]
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      content: [
        {
          subtitle: "Updates and Notifications",
          text: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the 'Last Updated' date."
        }
      ]
    }
  ];

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-overlayy"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-subtitle">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="last-updated">
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content" ref={contentRef}>
        <div className="content-container">
          {/* Introduction */}
          <div className="privacy-intro">
            <h2>Our Commitment to Privacy</h2>
            <p>
              At Blue Sage Media, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="table-of-contents">
            <h3>Table of Contents</h3>
            <ul>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="toc-link">
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Privacy Sections */}
          <div className="privacy-sections">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="privacy-section">
                <h2 className="section-title">
                  <span className="section-number">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="section-content">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="content-block">
                      {item.subtitle && (
                        <h4 className="content-subtitle">{item.subtitle}</h4>
                      )}
                      <p className="content-text">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Blue Sage Media</strong>
              </div>
              <div className="contact-item">
                <span>Email: privacy@bluesagemedia.com</span>
              </div>
              <div className="contact-item">
                <span>Phone: +1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span>Address: 123 Digital Avenue, Creative District, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;